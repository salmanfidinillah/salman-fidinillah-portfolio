import { useEffect, useRef, useState } from 'react';
import { Globe, Github, ArrowLeft, Calendar, ShieldCheck, Tag, Award, Cpu, AlertTriangle, Lightbulb, TrendingUp, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';
import { TranslationDict } from '../translations';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  lang: 'ID' | 'EN';
  darkMode: boolean;
  t: TranslationDict;
}

export default function ProjectDetail({ project, onBack, lang, darkMode, t }: ProjectDetailProps) {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const lightbox = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (activeImg) lightbox.current?.showModal();
  }, [activeImg]);
  return (
    <div id={`project-detail-view-${project.id}`} className="min-h-screen pt-24 pb-16 bg-grid-pattern text-left">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Back Button & Breadcrumbs row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={onBack}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border transition-all hover:scale-105 cursor-pointer ${
              darkMode
                ? 'border-[var(--line)] hover:bg-white/5 text-[var(--muted)] hover:text-white'
                : 'border-[var(--line)] hover:bg-black/5 text-[var(--muted)] hover:text-black'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToProjects}</span>
          </button>

          <div className={`text-xs font-semibold flex items-center gap-2 ${
            darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
          }`}>
            <span>{lang === 'ID' ? 'Beranda' : 'Home'}</span>
            <span>/</span>
            <span>{lang === 'ID' ? 'Proyek' : 'Projects'}</span>
            <span>/</span>
            <span className="text-[var(--accent-ink)] font-bold">{project.title}</span>
          </div>
        </div>

        {/* Hero Visual Mockup Grid */}
        <div className="relative w-full h-[280px] md:h-[450px] rounded-3xl overflow-hidden border border-[var(--line)] shadow-none mb-12">
          {/* Ambient colorful backing shadows */}
          <div className="absolute inset-0    to-transparent z-10" />
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700 hover:scale-105"
          />

          {/* Absolute floating category label */}
          <div className="absolute bottom-6 left-6 md:left-10 z-20 space-y-2 text-[var(--ink)]">
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 py-1 bg-[var(--accent)] rounded-full">
              {project.badgeText
                ? project.badgeText.toUpperCase()
                : lang === 'ID'
                  ? project.category.toUpperCase()
                  : project.category === 'Pengembangan Web'
                    ? 'WEB DEVELOPMENT'
                    : project.category === 'Aplikasi Seluler'
                      ? 'MOBILE APP'
                      : project.category === 'Desain UI/UX'
                        ? 'UI/UX DESIGN'
                        : 'OPEN SOURCE'
              }
            </span>
            <h1 className="font-display text-2xl md:text-5xl font-extrabold tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>

        <p className="project-description">{project.description}</p>
        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column: Pillars and Details */}
          <div className="lg:col-span-8 space-y-10">

            {/* The Three Pillars Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Challenge Pillar */}
              <div className={`p-6 rounded-2xl border ${
                darkMode ? 'bg-[var(--surface)] border-[var(--line)]' : 'bg-[var(--surface)] border-[var(--line)] shadow-none'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <h3 className={`text-base font-extrabold font-display mb-2 ${
                  darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
                }`}>
                  {t.challenge}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed ${
                  darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                }`}>
                  {project.challenge || project.description}
                </p>
              </div>

              {/* Solution Pillar */}
              <div className={`p-6 rounded-2xl border ${
                darkMode ? 'bg-[var(--surface)] border-[var(--line)]' : 'bg-[var(--surface)] border-[var(--line)] shadow-none'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)] flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5 text-[var(--accent-ink)]" />
                </div>
                <h3 className={`text-base font-extrabold font-display mb-2 ${
                  darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
                }`}>
                  {t.solution}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed ${
                  darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                }`}>
                  {project.solution || 'Kami merancang sistem dengan integrasi modern, arsitektur code-splitting, serta sinkronisasi state yang reaktif.'}
                </p>
              </div>

              {/* Business Impact Pillar */}
              <div className={`p-6 rounded-2xl border ${
                darkMode ? 'bg-[var(--surface)] border-[var(--line)]' : 'bg-[var(--surface)] border-[var(--line)] shadow-none'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)] flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-[var(--accent-ink)]" />
                </div>
                <h3 className={`text-base font-extrabold font-display mb-2 ${
                  darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
                }`}>
                  {t.businessImpact}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed ${
                  darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                }`}>
                  {project.businessImpact || 'Meningkatkan efisiensi pemrosesan data, mendigitalisasi workflow lama, serta mengurangi penundaan operasional secara drastis.'}
                </p>
              </div>

            </div>

            {/* Key Features Bullet list */}
            <div className="space-y-4">
              <h3 className={`text-xl font-bold font-display flex items-center gap-2 ${
                darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
              }`}>
                <Award className="w-5 h-5 text-[var(--accent-ink)]" />
                <span>{t.keyFeatures}</span>
              </h3>
              <ul className="space-y-3 pl-2">
                {(project.features || [
                  'Antarmuka adaptif responsif multi-device.',
                  'Sistem verifikasi data real-time.',
                  'Pelaporan analitik terintegrasi chart visual.'
                ]).map((feat, index) => (
                  <li key={index} className="flex items-start gap-3 text-xs md:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-[var(--accent-ink)] flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span className={darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Developer Highlights */}
            <div className="space-y-4 pt-4">
              <h3 className={`text-xl font-bold font-display flex items-center gap-2 ${
                darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
              }`}>
                <Cpu className="w-5 h-5 text-[var(--accent-ink)]" />
                <span>{t.coreHighlights}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(project.highlights || [
                  'Lazy Loading Media Asset',
                  'Reactive States Syncing',
                  'Optimized Database Queries'
                ]).map((high, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border flex flex-col justify-between ${
                      darkMode ? 'bg-[var(--surface)] border-[var(--line)]' : 'bg-[var(--surface)] border-[var(--line)] shadow-none'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-[var(--accent-ink)] font-bold mb-2">HIGHLIGHT #{index + 1}</span>
                    <span className={`text-xs font-bold leading-tight ${darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'}`}>{high}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar Meta details */}
          <div className="lg:col-span-4 space-y-6">

            {/* Meta Card details */}
            <div className={`p-6 rounded-3xl border space-y-6 text-left relative overflow-hidden ${
              darkMode ? 'bg-[var(--surface)] border-[var(--line)]' : 'bg-[var(--surface)] border-[var(--line)] shadow-none'
            }`}>

              <div className="space-y-1 border-b border-[var(--line)] pb-4">
                <span className="font-mono text-[9px] text-[var(--accent-ink)] font-bold uppercase tracking-widest">Client Metadata</span>
                <h4 className={`text-base font-extrabold ${darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'}`}>
                  {project.client || 'Personal Project'}
                </h4>
              </div>

              {/* Grid meta metrics */}
              <div className="space-y-4">

                <div className="flex justify-between gap-4 text-xs">
                  <span className="text-[var(--muted)] font-semibold flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" /> {lang === 'ID' ? 'Selesai' : 'Completed'}
                  </span>
                  <span className={`font-bold text-right ${darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'}`}>
                    {project.completionDate}
                  </span>
                </div>

                <div className="flex justify-between gap-4 text-xs">
                  <span className="text-[var(--muted)] font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> {lang === 'ID' ? 'Kategori' : 'Category'}
                  </span>
                  <span className={`font-bold text-right ${darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'}`}>
                    {project.category}
                  </span>
                </div>

              </div>

              {/* Technologies */}
              <div className="space-y-2 border-t border-[var(--line)] pt-4">
                <span className="text-[var(--muted)] font-semibold flex items-center gap-1.5 text-xs">
                  <Tag className="w-4 h-4" /> {lang === 'ID' ? 'Teknologi' : 'Technologies'}
                </span>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                        darkMode
                          ? 'bg-[var(--surface)] border-[var(--line)] text-[var(--muted)]'
                          : 'bg-[var(--surface)] border-[var(--line)] text-[var(--muted)]'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Visit/Source Code */}
              <div className="flex flex-col gap-2 border-t border-[var(--line)] pt-4">

                {project.visitUrl && (
                  <a
                    href={project.visitUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl    hover: hover: text-[var(--ink)] font-bold text-xs flex items-center justify-center gap-2 shadow-none shadow-cyan-500/10 cursor-pointer"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{t.visitSite}</span>
                  </a>
                )}

                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-3 px-4 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 cursor-pointer ${
                      darkMode
                        ? 'border-[var(--line)] hover:border-white/20 hover:bg-white/5 text-[var(--ink)] bg-[var(--surface)]'
                        : 'border-[var(--line)] hover:border-black/20 hover:bg-gray-50 text-[var(--ink)] bg-[var(--surface)]'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>{lang === 'ID' ? 'Lihat GitHub' : 'View GitHub'}</span>
                  </a>
                )}

              </div>

            </div>

            {/* Quick credentials card */}
            <div className={`p-6 rounded-3xl border flex items-center gap-4 text-left ${
              darkMode ? 'bg-[var(--surface)] border-[var(--line)]' : 'bg-[var(--surface)] border-[var(--line)]'
            }`}>
              <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--ink)] font-extrabold">
                S
              </div>
              <div className="space-y-0.5">
                <span className={`text-xs font-bold ${darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'}`}>Salman Fidinillah</span>
                <p className="text-[10px] text-[var(--muted)] uppercase tracking-widest font-mono font-bold">@salmansegf</p>
              </div>
            </div>

          </div>

        </div>

        {/* Project Gallery section */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16 space-y-6">
            <h3 className={`text-xl font-bold font-display flex items-center gap-2 ${
              darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
            }`}>
              <ImageIcon className="w-5 h-5 text-[var(--accent-ink)]" />
              <span>{t.projectGallery || 'Galeri Proyek'}</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  className="group relative h-36 md:h-48 rounded-2xl overflow-hidden border border-[var(--line)] shadow-none cursor-pointer bg-[var(--surface)]"
                  aria-label={`${lang === 'ID' ? 'Perbesar' : 'Enlarge'} ${project.title} ${idx + 1}`}
                  onClick={() => setActiveImg(img)}
                >
                  <img
                    src={img}
                    alt={`${project.title} Gallery ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[var(--surface)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-[var(--surface)] text-[var(--ink)] text-[10px] font-bold tracking-wider uppercase border border-[var(--line)]">
                      {lang === 'ID' ? 'Perbesar' : 'Zoom'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {activeImg && (
        <dialog ref={lightbox}
          aria-label={lang === 'ID' ? 'Galeri gambar proyek' : 'Project image gallery'}
          onCancel={() => setActiveImg(null)}
          className="project-lightbox fixed inset-0 z-50 flex items-center justify-center bg-[var(--surface)] p-4 backdrop-blur-sm transition-all cursor-pointer"
          onClick={() => setActiveImg(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden rounded-2xl border border-[var(--line)]" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label={lang === 'ID' ? 'Tutup gambar' : 'Close image'}
              onClick={() => setActiveImg(null)}
              className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-[var(--surface)] text-[var(--ink)] font-bold flex items-center justify-center border border-[var(--line)] hover:bg-black/80 transition-colors cursor-pointer"
            >
              ✕
            </button>
            <img
              src={activeImg}
              alt="Enlarged view"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </dialog>
      )}
    </div>
  );
}
