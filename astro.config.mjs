import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import purgecss from 'astro-purgecss';
import compress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
	site: 'https://jasminefan.de',
	build: {
		inlineStylesheets: 'never', // Required for astro-purgecss to process CSS files
	},
	integrations: [
		mdx(),
		sitemap({
			lastmod: new Date('2026-03-13'),
		}),
		purgecss({
			keyframes: false, // Keep CSS keyframe animations
			fontFace: false, // Keep @font-face rules (used by @fontsource)
			safelist: [/^astro-/], // Protect Astro-generated scoped class names
		}),
		compress({
			Image: false, // Already handled by Astro's sharp image pipeline
		}),
	],
	image: {
		responsiveStyles: true,
	},
});
