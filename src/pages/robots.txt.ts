import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const localHosts = new Set(['localhost', '127.0.0.1', '[::1]']);
  const sitemap =
    site && !localHosts.has(site.hostname)
      ? `Sitemap: ${new URL('sitemap-index.xml', site).href}\n`
      : '';
  return new Response(`User-agent: *\nAllow: /\n${sitemap}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
