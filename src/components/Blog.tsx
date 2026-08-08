import { useState, useEffect, useMemo, useRef, MouseEvent, SyntheticEvent } from 'react';
import { Search, Calendar, Clock, Tag, ChevronLeft, Share2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data/blog';
import { TranslationDict } from '../translations';

const SITE_URL = 'https://salmanbuilds.web.id';
const DEFAULT_BLOG_IMAGE = '/images/salman-fidinillah-developer-blog-cover.webp';

const toAbsoluteUrl = (url: string) => {
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`;
};

interface BlogProps {
  lang: 'ID' | 'EN';
  darkMode: boolean;
  t: TranslationDict;
  soundEnabled: boolean;
  activePostSlug: string | null;
  setActivePostSlug: (slug: string | null) => void;
}

export default function Blog({
  lang,
  darkMode,
  t,
  soundEnabled,
  activePostSlug,
  setActivePostSlug
}: BlogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Sound feedback helper
  const playClickSound = () => {
    if (soundEnabled) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(580, ctx.currentTime);
        gain.gain.setValueAtTime(0.02, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } catch (e) {}
    }
  };

  // Extract unique categories dynamically from the data
  const categories = useMemo(() => {
    const cats = new Set(BLOG_POSTS.map(post => post.category));
    return ['all', ...Array.from(cats)];
  }, []);

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let result = [...BLOG_POSTS];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(post => post.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(post => {
        const title = lang === 'ID' ? post.titleID : post.titleEN;
        const summary = lang === 'ID' ? post.summaryID : post.summaryEN;
        const content = lang === 'ID' ? post.contentID : post.contentEN;
        const hasTag = post.tags.some(tag => tag.toLowerCase().includes(q));

        return (
          title.toLowerCase().includes(q) ||
          summary.toLowerCase().includes(q) ||
          content.toLowerCase().includes(q) ||
          hasTag
        );
      });
    }

    // Sort
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [selectedCategory, searchQuery, sortBy, lang]);

  // Find active article if slug is provided
  const activeArticle = useMemo(() => {
    if (!activePostSlug) return null;
    return BLOG_POSTS.find(post => post.slug === activePostSlug) || null;
  }, [activePostSlug]);

  // Dynamic SEO implementation based on active article
  useEffect(() => {
    if (activeArticle) {
      const title = lang === 'ID' 
        ? (activeArticle.metaTitleID || activeArticle.titleID)
        : (activeArticle.metaTitleEN || activeArticle.titleEN);
      const desc = lang === 'ID'
        ? (activeArticle.metaDescriptionID || activeArticle.summaryID)
        : (activeArticle.metaDescriptionEN || activeArticle.summaryEN);

      updateSEO(title, desc, activeArticle.thumbnail, activeArticle.slug);
    } else {
      const title = lang === 'ID'
        ? 'Blog Salman Fidinillah | Web, AI & Cybersecurity'
        : 'Salman Fidinillah Blog | Web, AI & Cybersecurity';
      const desc = lang === 'ID'
        ? 'Artikel Salman Fidinillah tentang web development, artificial intelligence, cybersecurity, proses belajar, dan pengalaman membangun proyek teknologi.'
        : 'Articles by Salman Fidinillah about web development, artificial intelligence, cybersecurity, learning, and building technology projects.';
      updateSEO(title, desc, DEFAULT_BLOG_IMAGE);
    }
  }, [activeArticle, lang, t.blogSubtitle]);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePostSlug]);

  const updateSEO = (title: string, desc: string, ogImage: string, slug?: string) => {
    document.title = title;
    const pageUrl = `${SITE_URL}/blog${slug ? `/${slug}` : ''}`;
    const absoluteImage = toAbsoluteUrl(ogImage);
    
    const getOrCreateMeta = (nameAttr: string, valueAttr: string, content: string) => {
      let el = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameAttr, valueAttr);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard SEO Meta Tags
    getOrCreateMeta('name', 'description', desc);
    getOrCreateMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Open Graph / Facebook Meta Tags
    getOrCreateMeta('property', 'og:title', title);
    getOrCreateMeta('property', 'og:description', desc);
    getOrCreateMeta('property', 'og:image', absoluteImage);
    getOrCreateMeta('property', 'og:image:alt', title);
    getOrCreateMeta('property', 'og:url', pageUrl);
    getOrCreateMeta('property', 'og:type', slug ? 'article' : 'website');
    getOrCreateMeta('property', 'og:site_name', 'Portfolio Salman Fidinillah');
    getOrCreateMeta('property', 'og:locale', lang === 'ID' ? 'id_ID' : 'en_US');

    // Twitter Meta Tags
    getOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    getOrCreateMeta('name', 'twitter:title', title);
    getOrCreateMeta('name', 'twitter:description', desc);
    getOrCreateMeta('name', 'twitter:image', absoluteImage);
    getOrCreateMeta('name', 'twitter:image:alt', title);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    // Structured Data Inject (JSON-LD)
    let scriptEl = document.getElementById('blog-structured-data');
    if (scriptEl) {
      scriptEl.remove();
    }
    
    const structuredData = slug && activeArticle
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": desc,
          "image": [absoluteImage],
          "url": pageUrl,
          "mainEntityOfPage": pageUrl,
          "datePublished": activeArticle.date + "T08:00:00+07:00",
          "dateModified": activeArticle.date + "T08:00:00+07:00",
          "author": [{
              "@type": "Person",
              "name": activeArticle.author?.name || "Salman",
              "jobTitle": activeArticle.author?.role || "Fullstack Developer",
              "url": `${SITE_URL}/`
            }],
          "publisher": {
            "@type": "Person",
            "name": "Salman Fidinillah",
            "url": `${SITE_URL}/`
          }
        }
      : {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": desc,
          "publisher": {
            "@type": "Person",
            "name": "Salman Fidinillah",
            "url": `${SITE_URL}/`
          }
        };

    scriptEl = document.createElement('script');
    scriptEl.id = 'blog-structured-data';
    scriptEl.setAttribute('type', 'application/ld+json');
    scriptEl.textContent = JSON.stringify(structuredData);
    document.head.appendChild(scriptEl);
  };

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = DEFAULT_BLOG_IMAGE;
  };

  const handleShare = (e: MouseEvent, slug: string) => {
    e.stopPropagation();
    playClickSound();
    const url = `${window.location.origin}/blog/${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    });
  };

  // Lightweight, accurate, beautiful markdown-like content parser
  const renderFormattedContent = (content: string) => {
    const blocks = content.split('\n\n');
    return blocks.map((block, bIdx) => {
      const trimmedBlock = block.trim();
      if (!trimmedBlock) return null;

      // Handle Code Blocks
      if (trimmedBlock.startsWith('```')) {
        const lines = trimmedBlock.split('\n');
        const firstLine = lines[0];
        const lastLine = lines[lines.length - 1];
        const codeType = firstLine.replace('```', '').trim() || 'code';
        const codeLines = lines.slice(1, lastLine.startsWith('```') ? -1 : undefined);
        const codeString = codeLines.join('\n');

        return (
          <div key={bIdx} className="my-6 relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-black/40">
            <div className="flex items-center justify-between px-5 py-2 bg-white/5 border-b border-white/5">
              <span className="text-[10px] font-bold font-mono text-cyan-400 uppercase tracking-widest">{codeType}</span>
              <button 
                onClick={() => {
                  playClickSound();
                  navigator.clipboard.writeText(codeString);
                }}
                className="text-[10px] text-gray-400 hover:text-white transition-colors flex items-center gap-1 font-mono uppercase font-bold"
              >
                Copy
              </button>
            </div>
            <pre className="p-5 overflow-x-auto font-mono text-xs text-cyan-50/90 leading-relaxed text-left">
              <code>{codeString}</code>
            </pre>
          </div>
        );
      }

      // Handle Section Headers
      if (trimmedBlock.startsWith('### ')) {
        const headerText = trimmedBlock.replace('### ', '');
        return (
          <h3 
            key={bIdx} 
            className={`font-display text-lg md:text-xl font-bold tracking-tight mt-8 mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {headerText}
          </h3>
        );
      }

      // Handle Divider
      if (trimmedBlock === '---') {
        return (
          <hr 
            key={bIdx} 
            className={`my-8 border-t ${
              darkMode ? 'border-white/5' : 'border-black/5'
            }`} 
          />
        );
      }

      // Handle Lists
      if (trimmedBlock.startsWith('1. ') || trimmedBlock.startsWith('* ')) {
        const lines = trimmedBlock.split('\n');
        const isOrdered = trimmedBlock.startsWith('1. ');
        const ListTag = isOrdered ? 'ol' : 'ul';
        const listClass = isOrdered ? 'list-decimal pl-5 space-y-2' : 'list-disc pl-5 space-y-2';

        return (
          <ListTag key={bIdx} className={`${listClass} text-left my-4 text-sm md:text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {lines.map((line, lIdx) => {
              const cleanLine = line.replace(/^(1\.\s|\*\s)/, '');
              return (
                <li key={lIdx}>
                  {parseInlineFormatting(cleanLine)}
                </li>
              );
            })}
          </ListTag>
        );
      }

      // Default: Paragraph text
      return (
        <p 
          key={bIdx} 
          className={`text-sm md:text-base leading-relaxed text-left mb-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          {parseInlineFormatting(trimmedBlock)}
        </p>
      );
    });
  };

  // Helper for inline styles such as bold, italics, code blocks
  const parseInlineFormatting = (text: string) => {
    const parts = [];
    let currentIndex = 0;

    // Matches **bold**, `code`
    const regex = /(\*\*.*?\*\*|`.*?`)/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const matchIndex = match.index;
      const matchedStr = match[0];

      // Add preceding plain text
      if (matchIndex > currentIndex) {
        parts.push(text.substring(currentIndex, matchIndex));
      }

      // Format bold text
      if (matchedStr.startsWith('**') && matchedStr.endsWith('**')) {
        parts.push(
          <strong key={matchIndex} className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
            {matchedStr.substring(2, matchedStr.length - 2)}
          </strong>
        );
      } 
      // Format inline code
      else if (matchedStr.startsWith('`') && matchedStr.endsWith('`')) {
        parts.push(
          <code key={matchIndex} className="px-1.5 py-0.5 rounded-md font-mono text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/10">
            {matchedStr.substring(1, matchedStr.length - 1)}
          </code>
        );
      }

      currentIndex = regex.lastIndex;
    }

    // Add trailing plain text
    if (currentIndex < text.length) {
      parts.push(text.substring(currentIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div 
      ref={containerRef}
      id="blog-section-viewport" 
      className={`min-h-screen pt-28 pb-20 px-4 md:px-8 relative overflow-hidden bg-grid-pattern ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}
    >
      {/* Background Neon Elements */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <AnimatePresence mode="wait">
          {!activeArticle ? (
            /* BLOG LIST VIEW */
            <motion.div
              key="blog-list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              
              {/* HERO HEADER */}
              <div id="blog-hero-header" className="text-center max-w-3xl mx-auto space-y-6 mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-md shadow-cyan-500/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Insights & Articles
                </motion.div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-display tracking-tight leading-tight">
                  {lang === 'ID' ? 'Blog & ' : 'Blog & '}<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">{lang === 'ID' ? 'Wawasan' : 'Insights'}</span>
                </h1>

                <p className={`text-sm md:text-base leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {t.blogSubtitle}
                </p>
              </div>

              {/* SEARCH & FILTERS CONTROLS */}
              <div 
                id="blog-controls-wrapper" 
                className={`p-4 sm:p-6 rounded-3xl border mb-12 flex flex-col md:flex-row items-center justify-between gap-6 ${
                  darkMode 
                    ? 'bg-[#0c0c12]/60 border-white/5 shadow-inner' 
                    : 'bg-white border-black/5 shadow-md shadow-black/5'
                }`}
              >
                {/* Search Input */}
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.searchBlog}
                    className={`w-full pl-11 pr-4 py-3 rounded-2xl text-xs font-semibold focus:outline-none border transition-all ${
                      darkMode 
                        ? 'bg-black/30 border-white/5 text-white placeholder-gray-500 focus:border-cyan-500' 
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-indigo-600'
                    }`}
                  />
                </div>

                {/* Sort dropdown */}
                <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
                  <span className={`text-xs font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t.sortBy}:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      playClickSound();
                      setSortBy(e.target.value as 'newest' | 'oldest');
                    }}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold focus:outline-none cursor-pointer border ${
                      darkMode 
                        ? 'bg-[#0f0f18] border-white/5 text-gray-300 focus:border-cyan-500' 
                        : 'bg-white border-gray-200 text-gray-700 focus:border-indigo-600'
                    }`}
                  >
                    <option value="newest">{t.newest}</option>
                    <option value="oldest">{t.oldest}</option>
                  </select>
                </div>
              </div>

              {/* CATEGORIES HORIZONTAL SCROLL CHIPS */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  let displayLabel = cat;
                  if (cat === 'all') displayLabel = t.allCategories;

                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        playClickSound();
                        setSelectedCategory(cat);
                      }}
                      className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? darkMode
                            ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                            : 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                          : darkMode
                            ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
                            : 'bg-black/5 hover:bg-black/10 text-gray-600 hover:text-black border border-black/5'
                      }`}
                    >
                      {displayLabel}
                    </button>
                  );
                })}
              </div>

              {/* ARTICLE CARDS GRID */}
              {filteredAndSortedPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredAndSortedPosts.map((post, index) => {
                    const title = lang === 'ID' ? post.titleID : post.titleEN;
                    const summary = lang === 'ID' ? post.summaryID : post.summaryEN;
                    const readTime = lang === 'ID' ? post.readTimeID : post.readTimeEN;

                    return (
                      <motion.article
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.3 }}
                        onClick={() => {
                          playClickSound();
                          setActivePostSlug(post.slug);
                        }}
                        className={`rounded-3xl border overflow-hidden cursor-pointer flex flex-col justify-between h-full group relative transition-all duration-300 hover:-translate-y-1.5 ${
                          darkMode 
                            ? 'bg-[#0c0c12]/50 border-white/5 hover:border-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/5' 
                            : 'bg-white border-black/5 hover:border-indigo-600/20 shadow-md shadow-black/5 hover:shadow-xl'
                        }`}
                      >
                        {/* Thumbnail image and badge */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={post.thumbnail}
                            alt={title}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={handleImageError}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Category Badge */}
                          <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border shadow-sm ${
                            darkMode
                              ? 'bg-[#0c0c12]/90 border-white/10 text-cyan-400'
                              : 'bg-white/95 border-black/10 text-indigo-600'
                          }`}>
                            {post.category}
                          </span>
                        </div>

                        {/* Card Content Body */}
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2">
                            {/* Meta row: Date and Reading time */}
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {post.date}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-gray-500" />
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {readTime}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className={`text-base md:text-lg font-bold tracking-tight leading-snug group-hover:text-cyan-400 transition-colors duration-300 text-left ${
                              darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {title}
                            </h3>

                            {/* Summary */}
                            <p className={`text-xs md:text-sm text-left leading-relaxed line-clamp-3 ${
                              darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {summary}
                            </p>
                          </div>

                          {/* Card Footer controls */}
                          <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                            {/* CTA Link button */}
                            <span className={`text-xs font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform ${
                              darkMode ? 'text-cyan-400 hover:text-white' : 'text-indigo-600 hover:text-black'
                            }`}>
                              {t.readMoreBtn}
                            </span>

                            {/* Mini Share Button */}
                            <button
                              type="button"
                              onClick={(e) => handleShare(e, post.slug)}
                              title="Share article link"
                              className={`p-2 rounded-xl border transition-colors relative ${
                                darkMode 
                                  ? 'border-white/5 bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10' 
                                  : 'border-black/5 bg-black/5 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
                              }`}
                            >
                              <AnimatePresence mode="wait">
                                {copiedSlug === post.slug ? (
                                  <motion.div
                                    key="check"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                  >
                                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    key="share"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                  >
                                    <Share2 className="w-3.5 h-3.5" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </button>
                          </div>
                        </div>

                      </motion.article>
                    );
                  })}
                </div>
              ) : (
                /* EMPTY SEARCH STATE */
                <div className={`p-12 text-center rounded-3xl border border-dashed max-w-lg mx-auto ${
                  darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'
                }`}>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t.noArticles}
                  </p>
                </div>
              )}

            </motion.div>
          ) : (
            /* DETAILED BLOG POST READER */
            <motion.div
              key="blog-detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              {/* Back Button */}
              <button
                onClick={() => {
                  playClickSound();
                  setActivePostSlug(null);
                }}
                className={`inline-flex items-center gap-2 mb-8 text-xs font-bold transition-all px-4 py-2 rounded-xl border cursor-pointer hover:shadow-md ${
                  darkMode 
                    ? 'border-white/15 bg-white/5 hover:border-cyan-500/30 text-gray-300 hover:text-white shadow-inner' 
                    : 'border-black/10 bg-white hover:border-indigo-600/30 text-gray-700 hover:text-black'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{t.backToBlog}</span>
              </button>

              {/* ARTICLE COVER HEADER */}
              <div className="space-y-6 text-left mb-10">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-medium">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                    darkMode
                      ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                      : 'bg-indigo-50 border-indigo-200 text-indigo-600'
                  }`}>
                    {activeArticle.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {activeArticle.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-500" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {lang === 'ID' ? activeArticle.readTimeID : activeArticle.readTimeEN}
                  </span>
                </div>

                {/* Title */}
                <h1 className={`text-2xl md:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {lang === 'ID' ? activeArticle.titleID : activeArticle.titleEN}
                </h1>

                {/* Author Card Row */}
                {activeArticle.author && (
                  <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border ${
                    darkMode ? 'bg-black/20 border-white/5' : 'bg-gray-50 border-gray-100'
                  }`}>
                    <div className="flex items-center gap-3 min-w-0">
                      <img 
                        src={activeArticle.author.avatar} 
                        alt={activeArticle.author.name} 
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-full border border-cyan-500/20 object-cover"
                      />
                      <div className="text-left">
                        <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {activeArticle.author.name}
                        </p>
                        <p className="text-[10px] text-gray-500">
                          {activeArticle.author.role || 'Fullstack Developer'}
                        </p>
                      </div>
                    </div>

                    {/* Copy Share Link */}
                    <button
                      onClick={(e) => handleShare(e, activeArticle.slug)}
                      className={`inline-flex w-full sm:w-auto items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                        darkMode 
                          ? 'border-white/5 bg-white/5 hover:border-cyan-500/20 text-gray-300 hover:text-white' 
                          : 'border-black/5 bg-black/5 hover:border-indigo-600/20 text-gray-700 hover:text-black'
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {copiedSlug === activeArticle.slug ? (
                          <motion.span
                            key="copied"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="text-emerald-500 flex items-center gap-1"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>{t.copied}</span>
                          </motion.span>
                        ) : (
                          <motion.span
                            key="share"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="flex items-center gap-1"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                            <span>{t.shareArticle}</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                )}
              </div>

              {/* Large Image Banner */}
              <div className="relative rounded-3xl overflow-hidden mb-12 aspect-[16/9] border border-white/5 shadow-xl">
                <img
                  src={activeArticle.thumbnail}
                  alt={lang === 'ID' ? activeArticle.titleID : activeArticle.titleEN}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
              </div>

              {/* PARSED ARTICLE BODY */}
              <article className={`prose max-w-none text-left tracking-normal font-sans ${
                darkMode ? 'prose-invert' : ''
              }`}>
                {renderFormattedContent(lang === 'ID' ? activeArticle.contentID : activeArticle.contentEN)}
              </article>

              {/* Tags Section */}
              <div className="flex flex-wrap items-center gap-2 mt-12 border-t border-white/5 pt-6 text-left">
                <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> Tags:
                </span>
                {activeArticle.tags.map(tag => (
                  <span 
                    key={tag}
                    className={`text-[10px] px-2.5 py-1 rounded-lg font-mono font-bold ${
                      darkMode 
                        ? 'bg-[#12121a] text-cyan-400 border border-cyan-500/10' 
                        : 'bg-gray-100 text-indigo-600 border border-gray-200'
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* About the Author (Tentang Penulis) Section */}
              <div className={`mt-10 p-6 rounded-3xl border text-left relative overflow-hidden transition-all duration-300 ${
                darkMode
                  ? 'bg-gradient-to-br from-[#0c0c12] to-[#12121e] border-white/5 shadow-[0_0_30px_rgba(34,211,238,0.03)]'
                  : 'bg-gradient-to-br from-gray-50 to-white border-gray-200/80 shadow-sm'
              }`}>
                {/* Visual Accent Glow */}
                {darkMode && (
                  <div className="absolute -right-24 -bottom-24 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
                )}
                
                <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 ${
                  darkMode ? 'text-cyan-400' : 'text-indigo-600'
                }`}>
                  {lang === 'ID' ? 'Tentang Penulis' : 'About the Author'}
                </h4>

                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <div className="relative shrink-0">
                    <img 
                      src={activeArticle.author?.avatar || '/images/salman-fidinillah-profile.webp'} 
                      alt={activeArticle.author?.name || 'Salman Fidinillah'} 
                      referrerPolicy="no-referrer"
                      className={`w-16 h-16 rounded-2xl object-cover border ${
                        darkMode ? 'border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'border-indigo-100'
                      }`}
                    />
                    <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h5 className={`text-base font-black tracking-tight ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {activeArticle.author?.name || 'Salman Fidinillah'}
                    </h5>
                    <p className={`text-xs font-mono font-bold uppercase tracking-wider ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {activeArticle.author?.role || 'Fullstack Developer'}
                    </p>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {lang === 'ID' 
                        ? 'Halo! Saya Salman Fidinillah, seorang Fullstack Developer yang memiliki ketertarikan pada Web Development, Artificial Intelligence, dan Cloud Computing. Melalui blog ini saya mendokumentasikan perjalanan belajar, pengalaman mengikuti bootcamp, hackathon, serta proyek-proyek yang saya bangun sebagai bagian dari proses berkembang di dunia teknologi.' 
                        : 'Hello! I am Salman Fidinillah, a Fullstack Developer with an interest in Web Development, Artificial Intelligence, and Cloud Computing. Through this blog, I document my learning journey, bootcamps, hackathons, and projects I build as part of growing in the technology world.'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Back Controller */}
              <div className="mt-12 flex justify-start">
                <button
                  onClick={() => {
                    playClickSound();
                    setActivePostSlug(null);
                  }}
                  className={`inline-flex items-center gap-2 text-xs font-bold transition-all px-5 py-2.5 rounded-xl border cursor-pointer hover:shadow-md ${
                    darkMode 
                      ? 'border-white/15 bg-white/5 hover:border-cyan-500/30 text-gray-300 hover:text-white shadow-inner' 
                      : 'border-black/10 bg-white hover:border-indigo-600/30 text-gray-700 hover:text-black'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t.backToBlog}</span>
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
