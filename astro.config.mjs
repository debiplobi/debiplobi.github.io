// @ts-check

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://debiplobi.github.io",
	integrations: [react(), sitemap()],
	markdown: {
		shikiConfig: {
			themes: {
				light: "github-light",
				dark: "github-dark",
			},
			defaultColor: false,
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
