export type ProductCategory = "loops" | "multitracks" | "presets";

export interface ProductArt {
	/** Glow color, usually the most saturated tone. */
	glow: string;
	/** Mid tone used for the second radial wash. */
	mid: string;
	/** Base tone for the linear falloff. */
	base: string;
}

export interface ProductSpec {
	label: string;
	value: string;
}

export interface Product {
	id: string;
	title: string;
	category: ProductCategory;
	price: string;
	timeAgo: string;
	resources: string;
	motif: "rings" | "lines" | "dots";
	art: ProductArt;
	/** Short atmospheric copy used on the product page. */
	description: string;
	/** What the download actually contains. */
	contents: string[];
	/** Delivery and compatibility details. */
	specs: ProductSpec[];
	featured?: boolean;
}

export const categoryLabels: Record<ProductCategory, string> = {
	loops: "Motion loops",
	multitracks: "Multitracks",
	presets: "Visual presets",
};

export const products: Product[] = [
	{
		id: "mighty-god",
		title: "Mighty God",
		category: "loops",
		price: "$25",
		timeAgo: "10 days ago",
		resources: "18 Backgrounds",
		motif: "rings",
		featured: true,
		art: { glow: "#2f5d57", mid: "#17322f", base: "#0b1413" },
		description:
			"Slow horizons, deep greens, and a low, steady light. Mighty God is built for the biggest moments of the set — motion that fills the room without pulling focus from the words on screen.",
		contents: [
			"18 seamless motion backgrounds",
			"4K and 1080p exports",
			"Light and dark variants",
			"Title-safe compositions",
		],
		specs: [
			{ label: "Format", value: "ProRes 422 · H.264 MP4" },
			{ label: "Resolution", value: "3840 × 2160 (4K)" },
			{ label: "File size", value: "3.2 GB" },
			{ label: "License", value: "Single church, unlimited services" },
		],
	},
	{
		id: "set-the-room",
		title: "Set the Room",
		category: "multitracks",
		price: "$32",
		timeAgo: "6 days ago",
		resources: "Multitracks & Loops",
		motif: "lines",
		art: { glow: "#4b3d2a", mid: "#241d15", base: "#120f0b" },
		description:
			"A complete arrangement for the first song — pads, ambient guitar, keys, and a soft guide vocal. Every part is separated, so you can build the mix the room actually needs.",
		contents: [
			"14 isolated stems",
			"Click and cue tracks",
			"Guide vocal and reference mix",
			"Chord chart (PDF)",
		],
		specs: [
			{ label: "Format", value: "24-bit WAV · 48 kHz" },
			{ label: "Tempo", value: "84 BPM" },
			{ label: "File size", value: "3.4 GB" },
			{ label: "License", value: "Single church, unlimited services" },
		],
	},
	{
		id: "flow",
		title: "FLOW",
		category: "loops",
		price: "$18",
		timeAgo: "3 weeks ago",
		resources: "12 Backgrounds",
		motif: "rings",
		art: { glow: "#3b3550", mid: "#1d1a2a", base: "#0d0c12" },
		description:
			"Long, unhurried gradients in muted jade and graphite. FLOW is made for transitions, prayer, and the space between songs, when the screen should breathe rather than speak.",
		contents: [
			"12 seamless motion backgrounds",
			"45-second loopable clips",
			"4K and 1080p exports",
			"Muted jade and graphite palette",
		],
		specs: [
			{ label: "Format", value: "ProRes 422 · H.264 MP4" },
			{ label: "Resolution", value: "3840 × 2160 (4K)" },
			{ label: "File size", value: "1.8 GB" },
			{ label: "License", value: "Single church, unlimited services" },
		],
	},
	{
		id: "grain-and-glass",
		title: "Grain & Glass",
		category: "presets",
		price: "$15",
		timeAgo: "8 days ago",
		resources: "24 Presets",
		motif: "dots",
		art: { glow: "#4a4a42", mid: "#24241f", base: "#10100e" },
		description:
			"Film grain, soft glass, and restrained light leaks for Resolume and Premiere. Presets that add texture to a lyric slide without turning the screen into the show.",
		contents: [
			"24 visual presets",
			"Resolume and Premiere project files",
			"Adjustable grain and bloom",
			"Install guide (PDF)",
		],
		specs: [
			{ label: "Compatibility", value: "Resolume 7+ · Premiere 2023+" },
			{ label: "Resolution", value: "Up to 4K" },
			{ label: "File size", value: "240 MB" },
			{ label: "License", value: "Single church, unlimited services" },
		],
	},
	{
		id: "hymn-reimagined",
		title: "Hymn Reimagined",
		category: "multitracks",
		price: "$28",
		timeAgo: "2 weeks ago",
		resources: "Stems & Guide",
		motif: "lines",
		art: { glow: "#33465a", mid: "#19222b", base: "#0b1014" },
		description:
			"A familiar hymn rebuilt with felt piano, warm strings, and a quiet modern pulse. Arranged to work with a full band or a single keys player on a Sunday morning.",
		contents: [
			"11 isolated stems",
			"Click and cue tracks",
			"Felt piano and string layers",
			"Lead sheet and chord chart",
		],
		specs: [
			{ label: "Format", value: "24-bit WAV · 48 kHz" },
			{ label: "Tempo", value: "72 BPM" },
			{ label: "File size", value: "2.6 GB" },
			{ label: "License", value: "Single church, unlimited services" },
		],
	},
	{
		id: "rough-cut",
		title: "Rough Cut",
		category: "loops",
		price: "FREE",
		timeAgo: "1 month ago",
		resources: "9 Backgrounds",
		motif: "dots",
		art: { glow: "#4d3a34", mid: "#251c19", base: "#110d0c" },
		description:
			"Unpolished on purpose. Handheld light, dust, and imperfect texture for the songs that need to feel human — a free introduction to the Ezer loop library.",
		contents: [
			"9 motion backgrounds",
			"30-second loopable clips",
			"4K H.264 exports",
			"Title-safe compositions",
		],
		specs: [
			{ label: "Format", value: "H.264 MP4" },
			{ label: "Resolution", value: "3840 × 2160 (4K)" },
			{ label: "File size", value: "1.1 GB" },
			{ label: "License", value: "Free use in church services" },
		],
	},
	{
		id: "still-waters",
		title: "Still Waters",
		category: "loops",
		price: "$22",
		timeAgo: "2 months ago",
		resources: "14 Loops",
		motif: "rings",
		art: { glow: "#2c4a4f", mid: "#16262a", base: "#0a1112" },
		description:
			"Slow water, soft blue, and distant light. Still Waters holds the room during response and communion, with enough movement to feel alive and enough stillness to disappear.",
		contents: [
			"14 seamless motion loops",
			"60-second loopable clips",
			"4K and 1080p exports",
			"Calm palette variants",
		],
		specs: [
			{ label: "Format", value: "ProRes 422 · H.264 MP4" },
			{ label: "Resolution", value: "3840 × 2160 (4K)" },
			{ label: "File size", value: "2.4 GB" },
			{ label: "License", value: "Single church, unlimited services" },
		],
	},
	{
		id: "aurora-patch",
		title: "Aurora Patch",
		category: "presets",
		price: "FREE",
		timeAgo: "3 weeks ago",
		resources: "12 Presets",
		motif: "dots",
		art: { glow: "#3f4b3a", mid: "#1f251d", base: "#0d100c" },
		description:
			"A free introduction to our visual preset language — aurora bands, cool greens, and a gentle horizontal drift built to sit under lyrics.",
		contents: [
			"12 visual presets",
			"Resolume and Premiere project files",
			"Adjustable color and drift",
			"Install guide (PDF)",
		],
		specs: [
			{ label: "Compatibility", value: "Resolume 7+ · Premiere 2023+" },
			{ label: "Resolution", value: "Up to 4K" },
			{ label: "File size", value: "120 MB" },
			{ label: "License", value: "Free use in church services" },
		],
	},
	{
		id: "northlight",
		title: "Northlight",
		category: "presets",
		price: "$16",
		timeAgo: "2 months ago",
		resources: "16 Presets",
		motif: "lines",
		art: { glow: "#3d4652", mid: "#1d2228", base: "#0c0e11" },
		description:
			"Cold northern light in a restrained palette. Northlight is a full preset set for services that want atmosphere without color noise.",
		contents: [
			"16 visual presets",
			"Motion and still variants",
			"Resolume and Premiere project files",
			"Install guide (PDF)",
		],
		specs: [
			{ label: "Compatibility", value: "Resolume 7+ · Premiere 2023+" },
			{ label: "Resolution", value: "Up to 4K" },
			{ label: "File size", value: "380 MB" },
			{ label: "License", value: "Single church, unlimited services" },
		],
	},
];
