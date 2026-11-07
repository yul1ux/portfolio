import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL || 'https://yuliux.pages.dev';
const localHosts = new Set(['localhost', '127.0.0.1', '[::1]']);
const includeSitemap = Boolean(site && !localHosts.has(new URL(site).hostname));

export default defineConfig({
  site,
  cacheDir: './.astro/cache',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: false,
      langAlias: {
        sh: 'bash',
        shell: 'bash',
        yml: 'yaml',
        tf: 'terraform',
        ps1: 'powershell',
      },
    },
  },
  integrations: [react(), ...(includeSitemap ? [sitemap()] : [])],
  vite: {
    plugins: [tailwindcss()],
  },
});
