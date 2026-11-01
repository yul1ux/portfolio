import { loadEnvFile } from 'node:process';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

try {
  loadEnvFile();
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

const site =
  process.env.SITE_URL ||
  (process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4321');
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
