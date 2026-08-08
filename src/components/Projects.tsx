import { useState } from 'react';
import { Search, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { TranslationDict } from '../translations';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  lang: 'ID' | 'EN';
  darkMode: boolean;
  t: TranslationDict;
  soundEnabled: boolean;
}

type FilterCategory = 'All' | 'Pengembangan Web' | 'Aplikasi Seluler' | 'Desain UI/UX' | 'Sumber Terbuka';

export default function Projects({ onSelectProject, lang, darkMode, t, soundEnabled }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const playClickSound = () => {
    if (soundEnabled) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } catch (e) {}
    }
  };

  const categories: { id: FilterCategory; label: string }[] = [
    { id: 'All', label: t.categories.all },
    { id: 'Pengembangan Web', label: t.categories.web },
    { id: 'Aplikasi Seluler', label: t.categories.mobile },
    { id: 'Desain UI/UX', label: t.categories.uiux },
    { id: 'Sumber Terbuka', label: t.categories.openSource }
  ];

  const handleCategoryChange = (cat: FilterCategory) => {
    playClickSound();
    setActiveCategory(cat);
  };

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = activeCategory === 'All' || proj.category === activeCategory;
    
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      proj.title.toLowerCase().includes(query) ||
      proj.description.toLowerCase().includes(query) ||
      proj.tech.some(t => t.toLowerCase().includes(query)) ||
      (proj.client && proj.client.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="projects-section"
      className="py-24 relative overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase ${
            darkMode ? 'bg-white/5 text-gray-400' : 'bg-black/5 text-gray-600'
          }`}>
            {lang === 'ID' ? 'Karya Pilihan' : 'Portfolio'}
          </div>
          <h2 className={`font-display text-3xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {lang === 'ID' ? 'Proyek ' : 'Selected '}<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Pilihan</span>
          </h2>
          <p className={`text-sm md:text-base max-w-xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {t.projectsSubtitle}
          </p>
        </div>

        {/* Search and Filters Arena Bar */}
        <div 
          id="projects-filter-bar"
          className="flex flex-col lg:flex-row items-center justify-between gap-6 max-w-5xl mx-auto mb-16"
        >
          {/* Dynamic Search Input with icon */}
          <div className="relative w-full lg:max-w-xs group">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 transition-colors ${
              darkMode ? 'text-gray-500 group-focus-within:text-cyan-400' : 'text-gray-400 group-focus-within:text-indigo-600'
            }`} />
            <input
              type="text"
              id="project-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className={`w-full pl-11 pr-4 py-3 rounded-full text-sm font-medium border outline-none transition-all ${
                darkMode 
                  ? 'bg-[#0c0c12]/80 border-white/5 focus:border-cyan-500/50 text-white focus:ring-1 focus:ring-cyan-500/10 shadow-inner' 
                  : 'bg-white border-black/10 focus:border-indigo-600/50 text-gray-900 focus:ring-1 focus:ring-indigo-600/10 shadow-sm'
              }`}
            />
          </div>

          {/* Category Pill Filters */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 overflow-x-auto no-scrollbar">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-pill-${cat.id}`}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4.5 py-2.5 rounded-full font-sans text-xs font-bold transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-500/10'
                      : darkMode
                        ? 'bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                        : 'bg-black/5 border border-black/5 text-gray-600 hover:text-black hover:bg-black/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Lists */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <span className="text-3xl">🔍</span>
            <p className={`text-sm font-semibold ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              {lang === 'ID' ? 'Tidak ada proyek yang sesuai.' : 'No projects match your query.'}
            </p>
          </div>
        ) : (
          <div 
            id="projects-display-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          >
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                id={`project-card-${proj.id}`}
                onClick={() => {
                  playClickSound();
                  onSelectProject(proj);
                }}
                className={`group rounded-3xl border text-left overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between max-w-sm ${
                  darkMode 
                    ? 'bg-[#0c0c12]/40 border-white/5 hover:border-cyan-500/20 hover:shadow-cyan-500/5 hover:shadow-xl' 
                    : 'bg-white border-black/5 hover:border-indigo-600/20 hover:shadow-indigo-600/5 hover:shadow-xl shadow-md'
                }`}
              >
                {/* Card Top Media Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 duration-500 transition-all"
                  />
                  {/* Floating category banner top-right */}
                  <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 bg-black/60 backdrop-blur-md text-cyan-400 rounded-full border border-cyan-400/25">
                    {proj.badgeText 
                      ? proj.badgeText.toUpperCase()
                      : lang === 'ID' 
                        ? proj.category.toUpperCase()
                        : proj.category === 'Pengembangan Web'
                          ? 'WEB DEVELOPMENT'
                          : proj.category === 'Aplikasi Seluler'
                            ? 'MOBILE APP'
                            : proj.category === 'Desain UI/UX'
                              ? 'UI/UX DESIGN'
                              : 'OPEN SOURCE'
                    }
                  </span>
                </div>

                {/* Card Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                  
                  <div className="space-y-2">
                    {/* Header line */}
                    <div className="flex items-center justify-between gap-2">
                      <h3 className={`text-lg font-bold font-display tracking-tight group-hover:text-cyan-400 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {proj.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/5 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                    
                    <p className={`text-xs md:text-sm leading-relaxed line-clamp-3 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech and Link footer section */}
                  <div className="space-y-4 pt-4 border-t border-white/5 text-left">
                    {/* Tech stack dot separated */}
                    <div className={`text-xs font-medium tracking-wide ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {proj.tech.map((t, idx) => (
                        <span key={idx}>
                          {t === 'Tailwind CSS' ? 'Tailwind' : t}
                          {idx < proj.tech.length - 1 && <span className="mx-1.5 text-gray-600/50">•</span>}
                        </span>
                      ))}
                    </div>

                    {/* Links Row */}
                    <div className="flex items-center gap-6 text-xs font-bold pt-1">
                      {proj.visitUrl && (
                        <a
                          href={proj.visitUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className={`inline-flex items-center gap-1 transition-colors ${
                            darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-indigo-600'
                          }`}
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                          <span>Live Build</span>
                        </a>
                      )}
                      {proj.sourceUrl && (
                        <a
                          href={proj.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className={`inline-flex items-center gap-1 transition-colors ${
                            darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-indigo-600'
                          }`}
                        >
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
