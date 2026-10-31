import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { TRANSLATIONS } from './translations';
import { Project } from './types';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import FeaturedProjects from './components/FeaturedProjects';
import Footer from './components/Footer';

const Journey = lazy(() => import('./components/Journey'));
const Toolbox = lazy(() => import('./components/Toolbox'));
const Projects = lazy(() => import('./components/Projects'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const Contact = lazy(() => import('./components/Contact'));
const Blog = lazy(() => import('./components/Blog'));

const SITE_URL = 'https://salmanbuilds.web.id';
const DEFAULT_SEO_IMAGE = `${SITE_URL}/images/salman-fidinillah-developer-blog-cover.webp`;

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>(() => {
    const path = window.location.pathname;
    if (path.startsWith('/blog')) {
      return 'blog';
    }
    const tab = path.substring(1);
    const validTabs = ['home', 'journey', 'skills', 'projects', 'contact'];
    return validTabs.includes(tab) ? tab : 'home';
  });

  const [activePostSlug, setActivePostSlug] = useState<string | null>(() => {
    const path = window.location.pathname;
    if (path.startsWith('/blog/')) {
      return path.substring(6).replace(/\/$/, '');
    }
    return null;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');
  const [darkMode, setDarkMode] = useState<boolean>(() => { try { return localStorage.getItem('portfolio-theme') === 'dark'; } catch { return false; } });
  const [soundEnabled] = useState<boolean>(true);

  // Sync state when popstate changes (browser back/forward button clicks)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/blog')) {
        setCurrentTab('blog');
        if (path.startsWith('/blog/')) {
          setActivePostSlug(path.substring(6).replace(/\/$/, ''));
        } else {
          setActivePostSlug(null);
        }
      } else {
        const tab = path.substring(1);
        const validTabs = ['home', 'journey', 'skills', 'projects', 'contact'];
        setCurrentTab(validTabs.includes(tab) ? tab : 'home');
        setActivePostSlug(null);
      }
      setSelectedProject(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToTab = (tab: string) => {
    setSelectedProject(null);
    setCurrentTab(tab);
    setActivePostSlug(null);

    const newPath = tab === 'home' ? '/' : `/${tab}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
  };

  const handleActivePostChange = (slug: string | null) => {
    setActivePostSlug(slug);
    const newPath = slug ? `/blog/${slug}` : '/blog';
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
  };

  // Apply dark/light class to root body on theme change
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      body.className = 'editorial-body';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      body.className = 'editorial-body';
    }
    try { localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light'); } catch { /* Storage may be unavailable in private browsing. */ }
  }, [darkMode]);

  // Handle language change side-effects
  const t = TRANSLATIONS[lang];

  // Keep page identity and share previews accurate on every portfolio route.
  useEffect(() => {
    if (currentTab === 'blog') return;

    const seoByTab: Record<string, { titleID: string; titleEN: string; descriptionID: string; descriptionEN: string; path: string }> = {
      home: {
        titleID: 'Salman Fidinillah | Fullstack Developer Indonesia',
        titleEN: 'Salman Fidinillah | Fullstack Developer Indonesia',
        descriptionID: 'Portofolio Salman Fidinillah, Fullstack Developer Indonesia di bidang web, AI, dan cybersecurity. Lihat proyek, pengalaman, sertifikat, dan blog.',
        descriptionEN: 'Portfolio of Salman Fidinillah, an Indonesian Fullstack Developer focused on web development, AI, and cybersecurity.',
        path: '/'
      },
      journey: {
        titleID: 'Perjalanan Salman Fidinillah | Pendidikan & Pengalaman',
        titleEN: 'Salman Fidinillah Journey | Education & Experience',
        descriptionID: 'Perjalanan pendidikan, pelatihan, pengalaman, dan sertifikasi Salman Fidinillah sebagai Fullstack Developer Indonesia.',
        descriptionEN: 'Education, training, experience, and certifications of Salman Fidinillah as an Indonesian Fullstack Developer.',
        path: '/journey'
      },
      skills: {
        titleID: 'Keahlian Salman Fidinillah | Web, AI & Cloud',
        titleEN: 'Salman Fidinillah Skills | Web, AI & Cloud',
        descriptionID: 'Keahlian Salman Fidinillah dalam web development, TypeScript, React, artificial intelligence, cloud computing, dan cybersecurity.',
        descriptionEN: 'Salman Fidinillah skills in web development, TypeScript, React, artificial intelligence, cloud computing, and cybersecurity.',
        path: '/skills'
      },
      projects: {
        titleID: 'Proyek Salman Fidinillah | Fullstack Developer Portfolio',
        titleEN: 'Salman Fidinillah Projects | Fullstack Developer Portfolio',
        descriptionID: 'Kumpulan proyek Salman Fidinillah, termasuk Cyber Academy AI, InvitaLab, Kangen Haramain, dan ScanMed AI.',
        descriptionEN: 'Projects by Salman Fidinillah, including Cyber Academy AI, InvitaLab, Kangen Haramain, and ScanMed AI.',
        path: '/projects'
      },
      contact: {
        titleID: 'Hubungi Salman Fidinillah | Fullstack Developer',
        titleEN: 'Contact Salman Fidinillah | Fullstack Developer',
        descriptionID: 'Hubungi Salman Fidinillah untuk kolaborasi web development, aplikasi AI, cybersecurity, atau pengembangan produk digital.',
        descriptionEN: 'Contact Salman Fidinillah for web development, AI applications, cybersecurity, or digital product collaboration.',
        path: '/contact'
      }
    };

    const currentSEO = seoByTab[currentTab] || seoByTab.home;
    const title = selectedProject
      ? `${selectedProject.title} | Proyek Salman Fidinillah`
      : lang === 'ID' ? currentSEO.titleID : currentSEO.titleEN;
    const description = selectedProject
      ? selectedProject.description
      : lang === 'ID' ? currentSEO.descriptionID : currentSEO.descriptionEN;
    const pagePath = selectedProject ? '/projects' : currentSEO.path;
    const pageUrl = `${SITE_URL}${pagePath}`;
    const image = selectedProject
      ? selectedProject.image.startsWith('http') ? selectedProject.image : `${SITE_URL}${selectedProject.image}`
      : DEFAULT_SEO_IMAGE;

    document.title = title;

    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta('name', 'description', description);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:locale', lang === 'ID' ? 'id_ID' : 'en_US');
    setMeta('property', 'og:site_name', 'Portfolio Salman Fidinillah');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', pageUrl);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:alt', title);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
    setMeta('name', 'twitter:image:alt', title);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    document.getElementById('blog-structured-data')?.remove();
  }, [currentTab, selectedProject, lang]);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    navigateToTab('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user"><a className="skip-link" href="#portfolio-main-viewport">{lang === 'ID' ? 'Langsung ke konten' : 'Skip to content'}</a><div id="portfolio-app-root" className="editorial-app min-h-screen flex flex-col justify-between font-sans relative">

      <div className="site-ambient" aria-hidden="true"><span className="ambient-blob ambient-one" /><span className="ambient-blob ambient-two" /><span className="ambient-blob ambient-three" /></div>

      {/* Sticky Top Header Navigation */}
      <Header
        currentTab={currentTab}
        setCurrentTab={navigateToTab}
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        soundEnabled={soundEnabled}
      />

      {/* Main Page Content Dynamic Portal */}
      <main id="portfolio-main-viewport" tabIndex={-1} className="flex-grow">

        <Suspense fallback={<div className="page-width editorial-page" role="status">{lang === 'ID' ? 'Memuat halaman…' : 'Loading page…'}</div>}><AnimatePresence mode="wait">

          {selectedProject ? (
            /* PROJECT DETAIL VIEW SCREEN */
            <motion.div
              key={`detail-${selectedProject.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <ProjectDetail
                project={selectedProject}
                onBack={handleBackToProjects}
                lang={lang}
                darkMode={darkMode}
                t={t}
              />
            </motion.div>
          ) : (
            /* STANDARD VIEW SHELLS */
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >

              {currentTab === 'home' && (
                <div id="tab-home-container" className="home-content">

                  {/* Hero landing section */}
                  <Hero
                    lang={lang}
                    darkMode={darkMode}
                    t={t}
                    soundEnabled={soundEnabled}
                    setCurrentTab={navigateToTab}
                  />

                  {/* About with dynamic 3D ID Card & Services Grid */}
                  <AboutServices
                    lang={lang}
                    darkMode={darkMode}
                    t={t}
                    soundEnabled={soundEnabled}
                  />

                  {/* 3 Selected Works (Featured Projects) */}
                  <FeaturedProjects
                    onSelectProject={handleSelectProject}
                    lang={lang}
                    darkMode={darkMode}
                    soundEnabled={soundEnabled}
                    setCurrentTab={navigateToTab}
                  />

                  {/* High Fidelity Call To Action banner */}
                  <section className="collaboration-section">
                    <div className={`max-w-5xl mx-auto p-6 sm:p-8 md:p-12 rounded-3xl border relative overflow-hidden text-center ${
                      darkMode
                        ? 'bg-[#0c0c12]/60 border-white/5 shadow-2xl shadow-purple-500/5'
                        : 'bg-white border-black/5 shadow-xl'
                    }`}>
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
                      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" />

                      <div className="relative z-10 space-y-6">
                        <h2 className={`font-display text-2xl md:text-4xl font-extrabold tracking-tight ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {lang === 'ID' ? 'Punya ide? ' : 'Have an idea? '}<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">{lang === 'ID' ? 'Mari kita bangun.' : 'Let’s build it.'}</span>
                        </h2>

                        <p className={`text-xs md:text-sm max-w-xl mx-auto leading-relaxed ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {lang === 'ID'
                            ? 'Dari landing page hingga platform kompleks - saya membantu startup dan kreator meluncurkan produk dengan cepat dan terlihat luar biasa.'
                            : 'From simple landing pages to highly complex software applications - I help startups and creators launch products rapidly with outstanding quality.'
                          }
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                          <button
                            onClick={() => {
                              if (soundEnabled) {
                                try {
                                  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
                                  const osc = ctx.createOscillator();
                                  const gain = ctx.createGain();
                                  osc.type = 'sine';
                                  osc.frequency.setValueAtTime(650, ctx.currentTime);
                                  gain.gain.setValueAtTime(0.04, ctx.currentTime);
                                  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
                                  osc.connect(gain);
                                  gain.connect(ctx.destination);
                                  osc.start();
                                  osc.stop(ctx.currentTime + 0.1);
                                } catch (e) {}
                              }
                              navigateToTab('contact');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-bold text-xs shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all cursor-pointer"
                          >
                            {lang === 'ID' ? 'Hubungi Saya →' : 'Contact Me →'}
                          </button>

                          <button
                            onClick={() => {
                              if (soundEnabled) {
                                try {
                                  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
                                  const osc = ctx.createOscillator();
                                  const gain = ctx.createGain();
                                  osc.type = 'sine';
                                  osc.frequency.setValueAtTime(550, ctx.currentTime);
                                  gain.gain.setValueAtTime(0.02, ctx.currentTime);
                                  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
                                  osc.connect(gain);
                                  gain.connect(ctx.destination);
                                  osc.start();
                                  osc.stop(ctx.currentTime + 0.1);
                                } catch (e) {}
                              }
                              navigateToTab('projects');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`px-6 py-3.5 rounded-xl border font-bold text-xs transition-all hover:-translate-y-0.5 cursor-pointer ${
                              darkMode
                                ? 'border-white/10 hover:border-white/20 hover:bg-white/5 text-white bg-white/5'
                                : 'border-black/10 hover:border-black/20 hover:bg-gray-50 text-gray-800 bg-gray-50'
                            }`}
                          >
                            {lang === 'ID' ? 'Lihat proyek' : 'View portfolio'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                </div>
              )}

              {currentTab === 'journey' && (
                <Journey
                  lang={lang}
                  darkMode={darkMode}
                  t={t}
                  soundEnabled={soundEnabled}
                />
              )}

              {currentTab === 'skills' && (
                <Toolbox
                  lang={lang}
                  darkMode={darkMode}
                  t={t}
                  soundEnabled={soundEnabled}
                />
              )}

              {currentTab === 'projects' && (
                <Projects
                  onSelectProject={handleSelectProject}
                  lang={lang}
                  darkMode={darkMode}
                  t={t}
                  soundEnabled={soundEnabled}
                />
              )}

              {currentTab === 'contact' && (
                <Contact
                  lang={lang}
                  darkMode={darkMode}
                  t={t}
                  soundEnabled={soundEnabled}
                />
              )}

              {currentTab === 'blog' && (
                <Blog
                  lang={lang}
                  darkMode={darkMode}
                  t={t}
                  soundEnabled={soundEnabled}
                  activePostSlug={activePostSlug}
                  setActivePostSlug={handleActivePostChange}
                />
              )}

            </motion.div>
          )}

        </AnimatePresence></Suspense>

      </main>

      {/* Shared Footer block */}
      <Footer
        setCurrentTab={navigateToTab}
        lang={lang}
        darkMode={darkMode}
        t={t}
        soundEnabled={soundEnabled}
      />

    </div></MotionConfig>
  );
}
