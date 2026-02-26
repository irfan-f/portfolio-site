import { FC } from 'react';
import type { ProjectMeta } from '../types/project';

interface ProjectCardProps {
  project: ProjectMeta;
}

function ProjectImage({
  imageSrc,
  alt,
  className,
}: {
  imageSrc: ProjectMeta['imageSrc'];
  alt: string;
  className: string;
}) {
  if (typeof imageSrc === 'string') {
    return (
      <img
        src={imageSrc}
        alt={alt}
        width={16}
        height={9}
        className={className}
        loading="lazy"
      />
    );
  }
  return (
    <picture>
      <source type="image/avif" srcSet={imageSrc.avif} />
      <source type="image/webp" srcSet={imageSrc.webp} />
      <img
        src={imageSrc.png}
        alt={alt}
        width={16}
        height={9}
        className={className}
        loading="lazy"
      />
    </picture>
  );
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="depth bg-surface-panel mx-auto flex max-w-md flex-col overflow-hidden rounded-xl">
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-t-xl">
        <ProjectImage
          imageSrc={project.imageSrc}
          alt={project.imageAlt}
          className="block h-full w-full object-contain object-center dark:[filter:invert(1)_brightness(0.7)]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 px-4 py-3">
        <h2 className="font-mulish text-accent text-lg font-bold">
          {project.title}
        </h2>
        <p className="font-dosis text-primary dark:text-secondary text-sm font-semibold">
          {project.subtitle}
        </p>
        <p className="font-mulish text-on-surface text-sm">
          {project.description}
        </p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-accent font-libre text-accent hover:bg-accent/10 mt-2 inline-flex w-fit items-center rounded-md border-2 px-3 py-1.5 text-sm font-medium"
            aria-label={`Open ${project.title}`}
          >
            View live site
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
