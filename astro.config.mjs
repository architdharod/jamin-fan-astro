import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://jasminefan.de',
	integrations: [react(), mdx(), sitemap({
		lastmod: new Date('2023-05-18'),
	})],
});
