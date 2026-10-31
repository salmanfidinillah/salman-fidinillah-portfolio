import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface Props {
  project: Project;
  onSelect: (project: Project) => void;
  lang: 'ID' | 'EN';
  id?: string;
}

export default function ProjectCard({ project, onSelect, lang, id }: Props) {
  return (
    <article id={id} className="project-card">
      <span className="eyebrow">{project.badgeText || project.category}</span>
      <button className="project-image-button" onClick={() => onSelect(project)} aria-label={`${lang === 'ID' ? 'Lihat detail' : 'View details'} ${project.title}`}>
        <img src={project.image} alt={project.title} loading="lazy" width="600" height="360" />
      </button>
      <h3><button className="project-title-button" onClick={() => onSelect(project)}>{project.title}</button></h3>
      <p>{project.description}</p>
      <p className="project-tech">{project.tech.join(' · ')}</p>
      <div className="project-actions">
        <button className="ui-button ui-primary" onClick={() => onSelect(project)}>{lang === 'ID' ? 'Lihat detail' : 'View details'} <ArrowUpRight size={15} /></button>
        {project.visitUrl && <a className="ui-button" href={project.visitUrl} target="_blank" rel="noopener noreferrer">Live Build</a>}
        {project.sourceUrl && <a className="ui-button project-source" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">{lang === 'ID' ? 'Kode Sumber' : 'Source Code'} <ArrowUpRight size={15} /></a>}
      </div>
    </article>
  );
}
