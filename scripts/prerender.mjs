import fs from 'node:fs/promises';
import path from 'node:path';
import { render, getPageSEO, getSiteRoutes, SITE_URL } from '../.prerender/entry-server.js';

const template = await fs.readFile('dist/index.html', 'utf8');
const escape = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const routes = getSiteRoutes();
for (const route of routes) {
  const seo = getPageSEO(route);
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(seo.title)}</title>`);
  const fields = { description: seo.description, 'og:title': seo.title, 'og:description': seo.description, 'og:url': seo.canonical, 'og:image': seo.image, 'og:type': seo.type,
    'twitter:title': seo.title, 'twitter:description': seo.description, 'twitter:image': seo.image, 'og:image:alt': seo.imageAlt, 'twitter:image:alt': seo.imageAlt };
  for (const [key, value] of Object.entries(fields)) {
    const name = key.includes(':') && key.startsWith('og:') ? 'property' : 'name';
    const pattern = new RegExp(`<meta ${name}="${key}" content="[^"]*"\\s*/?>`);
    if (!pattern.test(html)) throw new Error(`Missing meta slot ${key}`);
    html = html.replace(pattern, `<meta ${name}="${key}" content="${escape(value)}" />`);
  }
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?\>/, `<link rel="canonical" href="${escape(seo.canonical)}" />`);
  html = html.replace(/(<script type="application\/ld\+json" id="portfolio-structured-data">)[\s\S]*?(<\/script>)/, (_, start, end) => `${start}${JSON.stringify(seo.structuredData).replace(/</g, '\\u003c')}${end}`);
  html = html.replace('<div id="root"></div>', `<div id="root">${await render(route)}</div>`);
  const file = route === '/' ? 'dist/index.html' : `dist${route}.html`;
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, html);
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(route => `  <url><loc>${escape(`${SITE_URL}${route}`)}</loc></url>`).join('\n')}\n</urlset>\n`;
await Promise.all([fs.writeFile('dist/sitemap.xml', sitemap), fs.writeFile('public/sitemap.xml', sitemap)]);
console.log(`Prerendered ${routes.length} pages with unique metadata, complete HTML, and canonical URLs.`);
