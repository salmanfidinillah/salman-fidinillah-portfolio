import { useState } from 'react';
import { Search } from 'lucide-react';
import ProjectCard from './ProjectCard';
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

export default function Projects({ onSelectProject, lang, t, soundEnabled }: ProjectsProps) {
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
    <section id="projects-section" className="editorial-page page-width">
      <div className="section-heading"><span className="eyebrow">{lang === 'ID' ? 'Karya Pilihan' : 'Portfolio'}</span><h1>{t.projectsTitle}</h1><p>{t.projectsSubtitle}</p></div>
      <div id="projects-filter-bar" className="project-filters">
        <div className="search-field"><Search size={18}/><input type="search" id="project-search-input" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder={t.searchPlaceholder} aria-label={t.searchPlaceholder}/></div>
        <div className="filter-buttons">{categories.map(cat => <button key={cat.id} id={`filter-pill-${cat.id}`} onClick={() => handleCategoryChange(cat.id)} aria-pressed={activeCategory === cat.id} className="ui-button filter-button">{cat.label}</button>)}</div>
      </div>
      {filteredProjects.length === 0 ? <p className="empty-results">🔍 {lang === 'ID' ? 'Tidak ada proyek yang sesuai.' : 'No projects match your query.'}</p> : <div id="projects-display-grid" className="projects-grid">{filteredProjects.map(project => <ProjectCard key={project.id} id={`project-card-${project.id}`} project={project} lang={lang} onSelect={p => {playClickSound(); onSelectProject(p);}} />)}</div>}
    </section>
  );
}
