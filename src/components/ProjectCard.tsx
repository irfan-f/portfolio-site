import { FC } from 'react';
import { Link } from 'react-router-dom';
import type { ProjectMeta } from '../types/project';

interface ProjectCardProps {
  project: ProjectMeta;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="depth flex flex-col overflow-hidden rounded-xl bg-opaque transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 px-4 py-3">
        <h2 className="font-mulish text-lg font-bold text-accent">{project.title}</h2>
        <p className="font-dosis text-sm font-semibold text-primary dark:text-secondary">
          {project.subtitle}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
