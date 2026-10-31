import { PROJECTS } from './data';
import { BLOG_POSTS } from './data/blog';

export const SITE_URL = 'https://portfo.salmanbuilds.web.id';
export const SITE_NAME = 'Salman Fidinillah';
export const DEFAULT_SEO_IMAGE = `${SITE_URL}/images/salman-fidinillah-full-stack-developer.png`;
type Language = 'ID' | 'EN';

export function normalizePath(path: string) {
  return path.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
}
export function getProjectPath(id: string) { return `/projects/${id}`; }
export function resolveRoute(path: string) {
  const normalized = normalizePath(path);
  const project = PROJECTS.find(item => getProjectPath(item.id) === normalized) || null;
  const post = BLOG_POSTS.find(item => `/blog/${item.slug}` === normalized);
  const tab = normalized === '/' || normalized === '/home' ? 'home'
    : normalized.startsWith('/blog') ? 'blog'
    : project ? 'projects'
    : ['journey', 'skills', 'projects', 'contact'].includes(normalized.slice(1)) ? normalized.slice(1) : 'home';
  return { tab, project, postSlug: post?.slug || null };
}
export function getSiteRoutes() {
  return ['/', '/journey', '/skills', '/projects', '/blog', '/contact',
    ...PROJECTS.map(project => getProjectPath(project.id)), ...BLOG_POSTS.map(post => `/blog/${post.slug}`)];
}

const pages: Record<string, [string, string, string, string]> = {
  '/': ['Salman Fidinillah | Full Stack Developer Indonesia', 'Salman Fidinillah | Full Stack Developer Indonesia',
    'Salman Fidinillah, Full Stack Developer Indonesia. Membangun website dan aplikasi dengan React, TypeScript, API, dan AI. Lihat proyek, keahlian, dan pengalaman saya.',
    'Salman Fidinillah, a Full Stack Developer in Indonesia building web applications with React, TypeScript, APIs, and AI. Explore my projects, skills, and experience.'],
  '/journey': ['Pengalaman & Pendidikan | Salman Fidinillah, Full Stack Developer', 'Experience & Education | Salman Fidinillah, Full Stack Developer',
    'Pengalaman kerja, pendidikan, pelatihan AI, dan sertifikasi Salman Fidinillah dalam perjalanan sebagai Full Stack Developer Indonesia.',
    'Work experience, education, AI training, and certifications of Salman Fidinillah, a Full Stack Developer in Indonesia.'],
  '/skills': ['Keahlian React, TypeScript, API & AI | Salman Fidinillah', 'React, TypeScript, API & AI Skills | Salman Fidinillah',
    'Keahlian Salman Fidinillah dalam frontend, backend, database, AI, cloud, dan UI/UX untuk membangun aplikasi web sebagai Full Stack Developer.',
    'Frontend, backend, database, AI, cloud, and UI/UX skills used by Full Stack Developer Salman Fidinillah to build web applications.'],
  '/projects': ['Proyek Full Stack Developer | Salman Fidinillah', 'Full Stack Developer Projects | Salman Fidinillah',
    'Proyek Salman Fidinillah: Cyber Academy AI, InvitaLab, Kangen Haramain, dan ScanMed AI. Baca studi kasus, fitur, teknologi, serta hasil pengembangan.',
    'Projects by Salman Fidinillah: Cyber Academy AI, InvitaLab, Kangen Haramain, and ScanMed AI. Explore case studies, features, and technologies.'],
  '/blog': ['Blog Salman Fidinillah | Web Development, AI & Pengalaman', 'Salman Fidinillah Blog | Web Development, AI & Experience',
    'Catatan Salman Fidinillah tentang full stack web development, artificial intelligence, bootcamp, hackathon, dan proses membangun produk digital.',
    'Articles by Salman Fidinillah about full stack web development, artificial intelligence, bootcamps, hackathons, and building digital products.'],
  '/contact': ['Hubungi Salman Fidinillah | Full Stack Developer', 'Contact Salman Fidinillah | Full Stack Developer',
    'Hubungi Salman Fidinillah melalui email untuk kolaborasi pengembangan website, aplikasi full stack, integrasi API, AI, dan produk digital.',
    'Contact Salman Fidinillah by email for website development, full stack applications, API integrations, AI, and digital product collaboration.'],
};

export function getPageSEO(path: string, lang: Language = 'ID') {
  const route = normalizePath(path);
  const post = BLOG_POSTS.find(item => `/blog/${item.slug}` === route);
  const project = PROJECTS.find(item => getProjectPath(item.id) === route);
  const canonicalPath = post || project || pages[route] ? route : '/';
  const page = pages[canonicalPath] || pages['/'];
  const title = post ? `${lang === 'ID' ? post.titleID : post.titleEN} | Salman Fidinillah`
    : project ? `${project.title} | Proyek Full Stack Salman Fidinillah` : page[lang === 'ID' ? 0 : 1];
  const description = post ? (lang === 'ID' ? post.metaDescriptionID || post.summaryID : post.metaDescriptionEN || post.summaryEN)
    : project ? project.description : page[lang === 'ID' ? 2 : 3];
  const canonical = `${SITE_URL}${canonicalPath}`;
  const image = project ? `${SITE_URL}${project.image}` : DEFAULT_SEO_IMAGE;
  const imageAlt = project ? `${project.title} — Proyek Salman Fidinillah` : `${SITE_NAME} — Full Stack Developer Indonesia`;
  const personId = `${SITE_URL}/#person`, websiteId = `${SITE_URL}/#website`;
  const person = {
    '@type': 'Person', '@id': personId, name: 'Salman Fidinillah', alternateName: 'salmansegf',
    url: `${SITE_URL}/`, image: `${SITE_URL}/images/salman-fidinillah-profile.webp`,
    jobTitle: 'Full Stack Developer', email: 'mailto:salmansegaf52@gmail.com',
    description: pages['/'][lang === 'ID' ? 2 : 3],
    sameAs: ['https://github.com/salmanfidinillah', 'https://linkedin.com/in/salman-fidinillah', 'https://instagram.com/salmansegf'],
    knowsAbout: ['Full Stack Development', 'Web Development', 'React', 'TypeScript', 'Next.js', 'Node.js', 'API Development', 'Database', 'UI/UX', 'Artificial Intelligence', 'Cybersecurity', 'Cloud Computing'],
  };
  const webpage: Record<string, unknown> = {
    '@type': canonicalPath === '/' ? 'ProfilePage' : post ? 'WebPage' : canonicalPath === '/contact' ? 'ContactPage' : 'CollectionPage',
    '@id': `${canonical}#webpage`, url: canonical, name: title, description,
    inLanguage: lang === 'ID' ? 'id-ID' : 'en-US', isPartOf: { '@id': websiteId }, about: { '@id': personId },
    primaryImageOfPage: { '@type': 'ImageObject', url: image },
  };
  if (canonicalPath === '/') webpage.mainEntity = { '@id': personId };
  const graph: Record<string, unknown>[] = [person,
    { '@type': 'WebSite', '@id': websiteId, url: `${SITE_URL}/`, name: SITE_NAME, alternateName: 'salmansegf', publisher: { '@id': personId }, inLanguage: 'id-ID' }, webpage];
  if (canonicalPath !== '/') {
    const segments = canonicalPath.split('/').filter(Boolean);
    const names: Record<string, string> = { journey: 'Pengalaman', skills: 'Keahlian', projects: 'Proyek', blog: 'Blog', contact: 'Kontak' };
    const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Salman Fidinillah', item: `${SITE_URL}/` },
      ...segments.map((segment, index) => ({ '@type': 'ListItem', position: index + 2, name: names[segment] || project?.title || (post ? (lang === 'ID' ? post.titleID : post.titleEN) : segment), item: `${SITE_URL}/${segments.slice(0, index + 1).join('/')}` }))];
    graph.push({ '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: crumbs });
    webpage.breadcrumb = { '@id': `${canonical}#breadcrumb` };
  }
  if (post) {
    webpage.mainEntity = { '@id': `${canonical}#article` };
    graph.push({ '@type': 'BlogPosting', '@id': `${canonical}#article`, headline: lang === 'ID' ? post.titleID : post.titleEN,
      description, image: [image], url: canonical, mainEntityOfPage: { '@id': `${canonical}#webpage` },
      datePublished: `${post.date}T08:00:00+07:00`, dateModified: `${post.date}T08:00:00+07:00`,
      author: { '@id': personId }, publisher: { '@id': personId }, inLanguage: lang === 'ID' ? 'id-ID' : 'en-US', keywords: post.tags.join(', ') });
  }
  return { title, description, canonical, image, imageAlt, type: post ? 'article' : 'website', lang, structuredData: { '@context': 'https://schema.org', '@graph': graph } };
}

export function applyPageSEO(seo: ReturnType<typeof getPageSEO>) {
  document.title = seo.title;
  document.documentElement.lang = seo.lang === 'ID' ? 'id' : 'en';
  const meta = (attribute: 'name' | 'property', key: string, content: string) => {
    let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
    if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); }
    element.content = content;
  };
  meta('name', 'description', seo.description);
  meta('name', 'robots', 'index, follow, max-image-preview:large');
  for (const [key, value] of Object.entries({ title: seo.title, description: seo.description, url: seo.canonical, image: seo.image, type: seo.type, site_name: SITE_NAME, locale: seo.lang === 'ID' ? 'id_ID' : 'en_US', 'image:alt': seo.imageAlt })) meta('property', `og:${key}`, value);
  for (const [key, value] of Object.entries({ card: 'summary_large_image', title: seo.title, description: seo.description, image: seo.image, 'image:alt': seo.imageAlt })) meta('name', `twitter:${key}`, value);
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
  canonical.href = seo.canonical;
  let structured = document.getElementById('portfolio-structured-data');
  if (!structured) { structured = document.createElement('script'); structured.id = 'portfolio-structured-data'; structured.setAttribute('type', 'application/ld+json'); document.head.appendChild(structured); }
  structured.textContent = JSON.stringify(seo.structuredData);
  document.getElementById('blog-structured-data')?.remove();
}
