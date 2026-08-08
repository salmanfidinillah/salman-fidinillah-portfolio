import { ArrowRight, ArrowUpRight, Compass } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  lang: 'ID' | 'EN';
  darkMode: boolean;
  soundEnabled: boolean;
  setCurrentTab: (tab: string) => void;
}

export default function FeaturedProjects({
  onSelectProject,
  lang,
  darkMode,
  soundEnabled,
  setCurrentTab
}: FeaturedProjectsProps) {
  
  // Take first 3 projects as selected/featured works
  const featured = PROJECTS.slice(0, 3);

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

  const handleViewAll = () => {
    playClickSound();
    setCurrentTab('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="featured-projects-section"
      className="py-16 px-4 md:px-8 relative overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          
          <div className="space-y-3 text-left">
            {/* Top Badge */}
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              darkMode ? 'bg-white/5 text-gray-400' : 'bg-black/5 text-gray-600'
            }`}>
              <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>{lang === 'ID' ? 'SELECTED WORK' : 'SELECTED WORK'}</span>
            </div>
            
            {/* Heading */}
            <h2 className={`font-display text-3xl md:text-5xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {lang === 'ID' ? (
                <>
                  Karya <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Pilihan</span>
                </>
              ) : (
                <>
                  Selected <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Work</span>
                </>
              )}
            </h2>
            
            {/* Subtitle */}
            <p className={`text-sm md:text-base ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {lang === 'ID' ? 'Sejumlah proyek terbaru' : 'A selection of recent projects'}
            </p>
          </div>

          {/* CTA View All */}
          <div>
            <button
              onClick={handleViewAll}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold border transition-all duration-300 hover:scale-105 active:scale-95 ${
                darkMode 
                  ? 'border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-white bg-[#0c0c12]/50 backdrop-blur-md shadow-lg shadow-cyan-500/5' 
                  : 'border-black/10 hover:border-indigo-600/50 hover:bg-indigo-600/5 hover:text-white text-gray-700 bg-white shadow-md'
              }`}
            >
              <span>{lang === 'ID' ? 'Lihat semua proyek' : 'View all projects'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Project Grid */}
        <div 
          id="featured-projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {featured.map((proj) => (
            <div
              key={proj.id}
              id={`featured-card-${proj.id}`}
              onClick={() => {
                playClickSound();
                onSelectProject(proj);
              }}
              className={`group rounded-3xl border text-left overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between w-full max-w-sm ${
                darkMode 
                  ? 'bg-[#0c0c12]/40 border-white/5 hover:border-cyan-500/20 hover:shadow-cyan-500/5 hover:shadow-xl' 
                  : 'bg-white border-black/5 hover:border-indigo-600/20 hover:shadow-indigo-600/5 hover:shadow-xl shadow-md'
              }`}
            >
              {/* Card Top Media Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-all brightness-95 group-hover:brightness-100"
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
                
                <div className="space-y-3">
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

      </div>
    </section>
  );
}
