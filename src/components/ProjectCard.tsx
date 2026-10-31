import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import type { MouseEvent } from 'react';
import { getProjectPath } from '../seo';

interface Props {
  project: Project;
  onSelect: (project: Project) => void;
  lang: 'ID' | 'EN';
  id?: string;
}

export default function ProjectCard({ project, onSelect, lang, id }: Props) {
  const href = getProjectPath(project.id);
  const navigate = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); onSelect(project);
  };
  return (
    <article id={id} className="project-card">
      <span className="eyebrow">{project.badgeText || project.category}</span>
      <a href={href} className="project-image-button" onClick={navigate} aria-label={`${lang === 'ID' ? 'Lihat detail' : 'View details'} ${project.title}`}>
        <img src={project.image} alt={project.title} loading="lazy" width="600" height="360" />
      </a>
      <h3><a href={href} className="project-title-button" onClick={navigate}>{project.title}</a></h3>
      <p>{project.description}</p>
      <p className="project-tech">{project.tech.join(' · ')}</p>
      <div className="project-actions">
        <a href={href} className="ui-button ui-primary" onClick={navigate}>{lang === 'ID' ? 'Lihat detail' : 'View details'} <ArrowUpRight size={15} /></a>
        {project.visitUrl && <a className="ui-button" href={project.visitUrl} target="_blank" rel="noopener noreferrer">Live Build</a>}
        {project.sourceUrl && <a className="ui-button project-source" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">{lang === 'ID' ? 'Kode Sumber' : 'Source Code'} <ArrowUpRight size={15} /></a>}
      </div>
    </article>
  );
}
