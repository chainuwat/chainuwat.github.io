import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: process.env.SITE_URL ?? 'https://chainuwat.github.io', base: '/', output: 'static', integrations: [sitemap()] });
