import { FC, useEffect, useState } from 'react';
import ImageWithLoader from './ImageWithLoader';
import type { ProjectMeta, ProjectStats } from '../types/project';

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
      <ImageWithLoader
        src={imageSrc}
        alt={alt}
        containerClassName="h-full w-full"
        imgClassName={className}
        objectFit="contain"
        loading="lazy"
        width={16}
        height={9}
      />
    );
  }
  return (
    <ImageWithLoader
      src={imageSrc.png}
      alt={alt}
      webp={imageSrc.webp}
      avif={imageSrc.avif}
      containerClassName="h-full w-full"
      imgClassName={className}
      objectFit="contain"
      loading="lazy"
      width={16}
      height={9}
    />
  );
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [stats, setStats] = useState<ProjectStats | null>(null);

  useEffect(() => {
    if (!project.statsUrl) return;
    fetch(project.statsUrl)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('Stats failed'))))
      .then((data: ProjectStats) => setStats(data))
      .catch(() => {});
  }, [project.statsUrl]);

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
        <h2 className="font-mulish text-teal text-lg font-bold">
          {project.title}
        </h2>
        <p className="font-dosis text-primary dark:text-secondary text-sm font-semibold">
          {project.subtitle}
        </p>
        <p className="font-mulish text-on-surface text-sm">
          {project.description}
        </p>
        {stats && (
          <p className="font-mulish text-on-surface text-sm">
            {stats.users} users · {stats.lobbies} lobbies · {stats.games} games
          </p>
        )}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-teal font-libre text-teal hover:bg-teal/10 inline-flex w-fit items-center rounded-md border-2 px-3 py-1.5 text-sm font-medium"
              aria-label={`Open ${project.title}`}
            >
              Try it
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-teal font-libre text-teal hover:bg-teal/10 inline-flex w-fit items-center rounded-md border-2 px-3 py-1.5 text-sm font-medium"
              aria-label={`${project.title} on GitHub`}
              title={`${project.title} on GitHub`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
