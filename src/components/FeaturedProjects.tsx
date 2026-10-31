import ProjectCard from './ProjectCard';
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
    <section id="featured-projects-section" className="featured-section page-width">
      <div className="section-heading heading-row"><div><span className="eyebrow">SELECTED WORK</span><h2>{lang === 'ID' ? 'Karya Pilihan' : 'Selected Work'}</h2><p>{lang === 'ID' ? 'Sejumlah proyek terbaru' : 'A selection of recent projects'}</p></div><button className="ui-button" onClick={handleViewAll}>{lang === 'ID' ? 'Lihat semua proyek' : 'View all projects'} ↗</button></div>
      <div id="featured-projects-grid" className="projects-grid">{featured.map(project => <ProjectCard key={project.id} id={`featured-card-${project.id}`} project={project} lang={lang} onSelect={p => {playClickSound(); onSelectProject(p);}} />)}</div>
    </section>
  );
}
