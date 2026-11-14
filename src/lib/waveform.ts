export interface WaveBar {
	/** Base height, as a percentage of the track lane. */
	height: number;
	/** Lowest point of the animation, as a percentage. */
	low: number;
	/** Highest point of the animation, as a percentage. */
	high: number;
	/** Negative animation delay in milliseconds. */
	delay: number;
}

export interface WaveTrack {
	id: string;
	name: string;
	accent: boolean;
	/** Animation duration in seconds. */
	duration: number;
	bars: WaveBar[];
}

type TrackKind = "pad" | "synth" | "beat" | "ambient";

interface TrackSpec {
	id: string;
	name: string;
	kind: TrackKind;
	accent: boolean;
	duration: number;
	dyn: number;
	phase: number;
	offset: number;
}

const BAR_COUNT = 96;

const trackSpecs: TrackSpec[] = [
	{ id: "TRK 01", name: "PAD", kind: "pad", accent: false, duration: 3.2, dyn: 0.3, phase: 0.6, offset: 0 },
	{ id: "TRK 02", name: "SYNTH", kind: "synth", accent: false, duration: 3.2, dyn: 0.42, phase: 1.7, offset: 140 },
	{ id: "TRK 03", name: "BEAT", kind: "beat", accent: true, duration: 3.2, dyn: 0.65, phase: 0.35, offset: 280 },
	{ id: "TRK 04", name: "AMBIENT", kind: "ambient", accent: false, duration: 3.2, dyn: 0.26, phase: 2.4, offset: 420 },
];

function createShape(spec: TrackSpec, t: number): number {
	switch (spec.kind) {
		case "pad":
			return (
				0.48 +
				0.26 * Math.sin(t * Math.PI * 2.4 + spec.phase) +
				0.14 * Math.sin(t * Math.PI * 6.1 + spec.phase * 1.6)
			);
		case "synth":
			return (
				0.24 +
				0.5 * Math.abs(Math.sin(t * Math.PI * 14 + spec.phase)) +
				0.1 * Math.sin(t * Math.PI * 4.5)
			);
		case "beat": {
			/* Periodic transients with an exponential decay, like a kick stem. */
			const local = (((t * 12 + spec.phase) % 1) + 1) % 1;
			return (0.16 + 0.74 * Math.exp(-local * 4.5)) * (0.8 + 0.2 * Math.sin(t * Math.PI * 6));
		}
		case "ambient":
			return (
				0.4 +
				0.18 * Math.sin(t * Math.PI * 2.1 + spec.phase) +
				0.12 * Math.sin(t * Math.PI * 7.7 + spec.phase * 2)
			);
	}
}

export function createMotionTracks(): WaveTrack[] {
	return trackSpecs.map((spec) => {
		const bars = Array.from({ length: BAR_COUNT }, (_, index): WaveBar => {
			const t = index / (BAR_COUNT - 1);

			/* Soft taper at the edges so each stem spans the full lane. */
			const envelope = 0.45 + 0.55 * Math.pow(Math.sin(Math.PI * (0.04 + t * 0.92)), 0.3);
			const height = Math.max(0.1, Math.min(0.92, createShape(spec, t) * envelope));
			const dyn = spec.dyn * (0.8 + 0.2 * Math.sin(t * Math.PI * 5.5 + spec.phase));

			return {
				height: Number((height * 100).toFixed(2)),
				low: Number((height * 100 * (1 - dyn * 0.4)).toFixed(2)),
				high: Number((height * 100 * (1 + dyn * 0.14)).toFixed(2)),
				/* Negative, staggered delays: each stem plays mid-cycle from the
				   first frame and crests travel left to right within the lane. */
				delay: Math.round(-spec.duration * 1000 + spec.offset + t * 640),
			};
		});

		return {
			id: spec.id,
			name: spec.name,
			accent: spec.accent,
			duration: spec.duration,
			bars,
		};
	});
}
