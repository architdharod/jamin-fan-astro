import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://jasminefan.de',
	integrations: [
		mdx(),
		sitemap({
			lastmod: new Date('2026-03-13'),
		}),
	],
	image: {
		responsiveStyles: true,
	},
});
