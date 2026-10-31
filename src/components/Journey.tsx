import { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WORK_EXPERIENCES, EDUCATIONS, CERTIFICATE_CATEGORIES } from '../data';
import { TranslationDict } from '../translations';

interface JourneyProps {
  lang: 'ID' | 'EN';
  darkMode: boolean;
  t: TranslationDict;
  soundEnabled: boolean;
}

export default function Journey({ lang, darkMode, t, soundEnabled }: JourneyProps) {
  const [expandedWork, setExpandedWork] = useState<Record<string, boolean>>(() => Object.fromEntries(WORK_EXPERIENCES.map(work => [work.id, true])));
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => Object.fromEntries(CERTIFICATE_CATEGORIES.map(cat => [cat.id, true])));

  const playClickSound = () => {
    if (soundEnabled) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, ctx.currentTime);
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } catch (e) {}
    }
  };

  const toggleExpand = (id: string) => {
    playClickSound();
    setExpandedWork(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleCategory = (categoryId: string) => {
    playClickSound();
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const renderCategoryLogo = (logoName: string, emoji: string) => {
    switch (logoName) {
      case 'microsoft':
        return (
          <div className="w-12 h-12 rounded-2xl bg-[var(--accent)] flex items-center justify-center border border-blue-500/20 shadow-none group-hover:scale-110 transition-transform duration-300 shrink-0">
            <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
              <div className="bg-red-500 rounded-xs" />
              <div className="bg-emerald-500 rounded-xs" />
              <div className="bg-[var(--accent)] rounded-xs" />
              <div className="bg-yellow-500 rounded-xs" />
            </div>
          </div>
        );
      case 'aws':
        return (
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shadow-none group-hover:scale-110 transition-transform duration-300 shrink-0">
            <span className="text-orange-500 font-black text-xs tracking-tighter">AWS</span>
          </div>
        );
      case 'google':
        return (
          <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 shadow-none group-hover:scale-110 transition-transform duration-300 shrink-0">
            <div className="relative flex items-center justify-center">
              <span className="text-yellow-500 font-extrabold text-lg leading-none">G</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            </div>
          </div>
        );
      case 'dicoding':
        return (
          <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 shadow-none group-hover:scale-110 transition-transform duration-300 shrink-0">
            <span className="text-red-500 font-extrabold text-sm leading-none">&lt;/&gt;</span>
          </div>
        );
      case 'ibm':
        return (
          <div className="w-12 h-12 rounded-2xl bg-[var(--accent)] flex items-center justify-center border border-purple-500/20 shadow-none group-hover:scale-110 transition-transform duration-300 shrink-0">
            <span className="text-[var(--accent-ink)] font-black text-[10px] tracking-widest">IBM</span>
          </div>
        );
      case 'salman':
        return (
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-none group-hover:scale-110 transition-transform duration-300 shrink-0">
            <span className="text-base leading-none">🕌</span>
          </div>
        );
      case 'workshop':
      default:
        return (
          <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 shadow-none group-hover:scale-110 transition-transform duration-300 shrink-0">
            <span className="text-lg leading-none">{emoji}</span>
          </div>
        );
    }
  };

  return (
    <section
      id="journey-section"
      className="py-24 relative overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Title and Header */}
        <div className="text-center space-y-4 mb-20">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase ${
            darkMode ? 'bg-[var(--surface)] text-[var(--muted)]' : 'bg-[var(--surface)] text-[var(--muted)]'
          }`}>
            {lang === 'ID' ? 'Perjalanan Karier' : 'My Road'}
          </div>
          <h2 className={`font-display text-3xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
          }`}>
            {lang === 'ID' ? 'Pengalaman & ' : 'Journey & '}<span className="   text-[var(--ink)]">Perjalanan</span>
          </h2>
          <p className={`text-sm md:text-base max-w-xl mx-auto ${
            darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
          }`}>
            {t.journeySubtitle}
          </p>
        </div>

        {/* WORK EXPERIENCE TIMELINE */}
        <div id="work-experience-section" className="space-y-12">

          <div className="flex items-center justify-center gap-2 mb-8">
            <Briefcase className="w-5 h-5 text-[var(--accent-ink)]" />
            <h3 className={`font-display text-xl md:text-2xl font-bold uppercase tracking-wider ${
              darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
            }`}>
              {t.workTimeline}
            </h3>
          </div>

          <div className="relative border-l border-[var(--line)] md:border-l-2 max-w-3xl mx-auto pl-6 md:pl-10 space-y-12 text-left">

            {WORK_EXPERIENCES.map((work) => {
              const isExpanded = expandedWork[work.id];
              return (
                <div
                  key={work.id}
                  id={`work-timeline-node-${work.id}`}
                  className="relative group"
                >

                  {/* Timeline point indicator */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full    border-2 border-[#08080c] group-hover:scale-125 transition-transform shadow-none shadow-cyan-500/25" />

                  {/* Card wrapper */}
                  <div className={`p-6 rounded-3xl border transition-all duration-300 ${
                    darkMode
                      ? 'bg-[var(--surface)] border-[var(--line)] hover:border-cyan-500/20 shadow-none'
                      : 'bg-[var(--surface)] border-[var(--line)] hover:border-indigo-600/20 shadow-none shadow-black/5'
                  }`}>

                    {/* Header Details */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className={`text-base md:text-lg font-bold font-display ${
                            darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
                          }`}>
                            {work.role}
                          </h4>
                          <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase border ${
                            work.type === 'Paruh Waktu'
                              ? 'bg-[var(--accent)] border-[var(--line)] text-[var(--accent-ink)]'
                              : ['Pelatihan', 'Bootcamp', 'Akademi', 'Kelas'].includes(work.type)
                                ? 'bg-[var(--accent)] border-purple-500/30 text-[var(--accent-ink)]'
                                : ['Hackathon', 'Datathon', 'Event'].includes(work.type)
                                  ? 'bg-amber-500/10 border-amber-500/30 text-[var(--accent-ink)]'
                                  : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          }`}>
                            {lang === 'ID'
                              ? work.type
                              : work.type === 'Paruh Waktu'
                                ? 'Part Time'
                                : work.type === 'Pelatihan'
                                  ? 'Training'
                                  : work.type === 'Akademi'
                                    ? 'Academy'
                                    : work.type === 'Kelas'
                                      ? 'Class'
                                      : work.type
                            }
                          </span>
                        </div>
                        <p className={`text-sm font-semibold flex items-center gap-1.5 ${
                          darkMode ? 'text-[var(--accent-ink)]' : 'text-[var(--accent-ink)]'
                        }`}>
                          🏢 {work.company}
                        </p>
                      </div>

                      {/* Meta dates and map */}
                      <div className={`text-xs space-y-1 font-medium ${
                        darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                      }`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {work.duration}
                        </span>
                        <span className="flex items-center gap-1 justify-end">
                          <MapPin className="w-3.5 h-3.5" /> {work.location}
                        </span>
                      </div>
                    </div>

                    {/* Content text description */}
                    <p className={`text-xs md:text-sm leading-relaxed ${
                      darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                    } ${isExpanded ? '' : 'line-clamp-2'}`}>
                      {work.description}
                    </p>

                    {/* Expand/Collapse dynamic triggers */}
                    <button
                      onClick={() => toggleExpand(work.id)}
                      className={`mt-4 inline-flex items-center gap-1 text-xs font-bold transition-colors ${
                        darkMode ? 'text-[var(--accent-ink)] hover:text-white' : 'text-[var(--accent-ink)] hover:text-black'
                      }`}
                    >
                      <span>{isExpanded ? t.readLess : t.readMore}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* EDUCATION SECTION */}
        <div id="education-experience-section" className="mt-28 space-y-12">

          <div className="flex items-center justify-center gap-2 mb-8">
            <GraduationCap className="w-5 h-5 text-[var(--accent-ink)]" />
            <h3 className={`font-display text-xl md:text-2xl font-bold uppercase tracking-wider ${
              darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
            }`}>
              {t.education}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {EDUCATIONS.map((edu) => (
              <div
                key={edu.id}
                id={`edu-card-${edu.id}`}
                className={`p-6 rounded-3xl border text-left flex flex-col justify-between relative group overflow-hidden ${
                  darkMode
                    ? 'bg-[var(--surface)] border-[var(--line)] hover:border-purple-500/20'
                    : 'bg-[var(--surface)] border-[var(--line)] hover:border-indigo-600/20 shadow-none shadow-black/5'
                }`}
              >
                {/* Decorative purple mesh dot */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[var(--accent)] rounded-full blur-xl group-hover:bg-purple-500/10 transition-colors" />

                <div className="space-y-4">

                  {/* Degree Degree Status */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h4 className={`text-base md:text-lg font-bold font-display ${
                        darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
                      }`}>
                        {edu.institution}
                      </h4>
                      <p className={`text-xs font-semibold ${
                        darkMode ? 'text-[var(--accent-ink)]' : 'text-[var(--accent-ink)]'
                      }`}>
                        {edu.degree}
                      </p>
                    </div>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase border ${
                      edu.status === 'Lulus' || edu.status === 'Santri'
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                    }`}>
                      {lang === 'ID'
                        ? edu.status
                        : edu.status === 'Lulus'
                          ? 'Graduated'
                          : edu.status === 'Santri'
                            ? 'Santri'
                            : 'Ongoing'
                      }
                    </span>
                  </div>

                  <p className={`text-xs md:text-sm leading-relaxed ${
                    darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                  }`}>
                    {edu.id === 'edu1' ? t.educationLevel : edu.description}
                  </p>

                </div>

                {/* Focus areas badges bottom */}
                <div className="mt-6 space-y-2">
                  <span className={`text-[9px] font-bold tracking-wider uppercase block ${
                    darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                  }`}>
                    {lang === 'ID' ? 'Fokus Utama' : 'Core Focus'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.highlights.map((h, index) => (
                      <span
                        key={index}
                        className={`text-[10px] px-2.5 py-1 rounded-full font-semibold border ${
                          darkMode
                            ? 'bg-[var(--surface)] border-[var(--line)] text-[var(--muted)]'
                            : 'bg-[var(--surface)] border-[var(--line)] text-[var(--muted)]'
                        }`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* CERTIFICATES SECTION */}
        <div id="certificates-section" className="mt-28 space-y-12">

          <div className="flex items-center justify-center gap-2 mb-8">
            <Award className="w-5 h-5 text-yellow-400" />
            <h3 className={`font-display text-xl md:text-2xl font-bold uppercase tracking-wider ${
              darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
            }`}>
              {t.certificates}
            </h3>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {CERTIFICATE_CATEGORIES.map((cat) => {
              const isExpanded = !!expandedCategories[cat.id];
              return (
                <div
                  key={cat.id}
                  id={`cert-category-${cat.id}`}
                  className={`p-6 md:p-8 rounded-3xl border text-left relative overflow-hidden transition-all duration-300 ${
                    darkMode
                      ? 'bg-[var(--surface)] border-[var(--line)] shadow-none'
                      : 'bg-[var(--surface)] border-[var(--line)] shadow-none shadow-black/5'
                  }`}
                >
                  {/* Category Card Header */}
                  <div
                    onClick={() => toggleCategory(cat.id)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer group"
                  >
                    {/* Colorful gradient mesh backing */}
                    <div className={`absolute inset-0  ${cat.badgeGradient} opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none`} />

                    <div className="flex items-start gap-4 flex-1 pointer-events-none">
                      {/* Logo container */}
                      {renderCategoryLogo(cat.logoName, cat.emoji)}

                      <div className="space-y-1.5 flex-1 text-left">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className={`text-base md:text-lg font-bold font-display tracking-tight ${
                            darkMode ? 'text-[var(--ink)] group-hover:text-cyan-400' : 'text-[var(--ink)] group-hover:text-indigo-600'
                          } transition-colors`}>
                            {cat.name}
                          </h4>
                          <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase border ${
                            darkMode
                              ? 'bg-[var(--accent)] border-[var(--line)] text-[var(--accent-ink)]'
                              : 'bg-[var(--accent)] border-[var(--line)] text-[var(--accent-ink)]'
                          }`}>
                            {cat.certificates.length} {lang === 'ID' ? 'Sertifikat' : 'Certificates'}
                          </span>
                        </div>
                        <p className={`text-xs md:text-sm leading-relaxed ${
                          darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                        }`}>
                          {lang === 'ID' ? cat.descriptionID : cat.descriptionEN}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCategory(cat.id);
                        }}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                          isExpanded
                            ? (darkMode ? 'bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)]' : 'bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)]')
                            : (darkMode ? 'bg-[var(--accent)] hover:bg-cyan-500/20 text-[var(--accent-ink)] border border-[var(--line)]' : 'bg-[var(--accent)] hover:bg-indigo-700 text-[var(--ink)] shadow-none')
                        }`}
                      >
                        <span>{isExpanded ? (lang === 'ID' ? 'Tutup' : 'Close') : (lang === 'ID' ? 'Lihat Sertifikat' : 'View Certificates')}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Certificates Grid */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3, ease: 'easeOut' },
                            opacity: { duration: 0.25, delay: 0.05 }
                          }
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.25, ease: 'easeIn' },
                            opacity: { duration: 0.15 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {cat.certificates.map((cert) => (
                            <motion.div
                              key={cert.id}
                              initial={{ y: 15, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              onClick={() => {
                                playClickSound();
                                if (cert.url && cert.url !== '#') window.open(cert.url, '_blank');
                              }}
                              className={`certificate-item p-5 rounded-2xl border text-left relative overflow-hidden group/cert cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-none ${
                                darkMode
                                  ? 'bg-[var(--surface)] border-[var(--line)] hover:border-yellow-500/20'
                                  : 'bg-[var(--surface)] border-[var(--line)] hover:border-indigo-600/20 shadow-none shadow-black/5'
                              }`}
                            >
                              <div className={`absolute inset-0  ${cert.badgeGradient} opacity-[0.03] group-hover/cert:opacity-[0.08] transition-opacity duration-300`} />
                              <div className={`absolute -right-8 -bottom-8 w-24 h-24  ${cert.badgeGradient} opacity-5 rounded-full blur-xl group-hover/cert:scale-125 transition-transform duration-500`} />

                              {cert.url?.startsWith('/certificates/') && <a href={cert.url} target="_blank" rel="noopener noreferrer" aria-label={cert.title} className="certificate-preview" onClick={e => e.stopPropagation()}><img src={cert.url} alt={cert.title} loading="lazy" width="600" height="420" /></a>}
                              <div className="relative z-10 space-y-2">
                                <div className="flex justify-between items-start gap-4">
                                  <span className="text-[9px] uppercase font-bold font-mono tracking-widest text-[var(--accent-ink)]">
                                    {cert.issuer}
                                  </span>
                                  {cert.url && cert.url !== '#' && (
                                    <ExternalLink className="w-3.5 h-3.5 text-[var(--muted)] group-hover/cert:text-cyan-400 transition-colors duration-300" />
                                  )}
                                </div>

                                <h5 className={`text-sm md:text-base font-bold font-display tracking-tight leading-snug group-hover/cert:text-cyan-400 transition-colors duration-300 ${
                                  darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
                                }`}>
                                  {cert.title}
                                </h5>
                              </div>

                              <div className="relative z-10 flex justify-between items-end border-t border-[var(--line)] pt-2.5 mt-3">
                                <span className={`text-[10px] font-semibold ${
                                  darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                                }`}>
                                  {lang === 'ID' ? `Tahun ${cert.year}` : `Year ${cert.year}`}
                                </span>
                                {cert.url && cert.url !== '#' && (
                                  <span className={`text-[11px] font-bold flex items-center gap-1 transition-transform group-hover/cert:translate-x-0.5 ${
                                    darkMode ? 'text-[var(--muted)] hover:text-white' : 'text-[var(--accent-ink)] hover:text-black'
                                  }`}>
                                    {lang === 'ID' ? 'Lihat sertifikat' : 'Verify'} →
                                  </span>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
