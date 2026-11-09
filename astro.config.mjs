// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Plus Jakarta Sans",
			cssVariable: "--font-plus-jakarta-sans",
		},
		{
			provider: fontProviders.fontsource(),
			name: "Space Grotesk",
			cssVariable: "--font-space-grotesk",
		},
	],
	integrations: [react(), partytown()],
});
