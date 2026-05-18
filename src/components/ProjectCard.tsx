import { FC, useEffect, useState } from 'react';
import { icons } from '../icons';
import ContentCard from './ContentCard';
import ImageWithLoader from './ImageWithLoader';
import Icon from './Icon';
import type { ProjectMeta, ProjectStats } from '../types/project';

const IMG = '/images';

function GitHubMark({ className }: { className?: string }) {
  const lightSrc = `${IMG}/GitHub_Invertocat_Light.png`;
  const darkSrc = `${IMG}/GitHub_Invertocat_Dark.png`;
  const lightWebp = lightSrc.replace(/\.png$/, '.webp');
  const lightAvif = lightSrc.replace(/\.png$/, '.avif');
  const darkWebp = darkSrc.replace(/\.png$/, '.webp');
  const darkAvif = darkSrc.replace(/\.png$/, '.avif');
  return (
    <span className={`relative block ${className ?? 'h-7 w-7'}`}>
      <picture className="absolute inset-0 opacity-0 dark:opacity-100">
        <source type="image/avif" srcSet={lightAvif} />
        <source type="image/webp" srcSet={lightWebp} />
        <img src={lightSrc} alt="" className="h-full w-full object-contain" loading="lazy" />
      </picture>
      <picture className="absolute inset-0 opacity-100 dark:opacity-0">
        <source type="image/avif" srcSet={darkAvif} />
        <source type="image/webp" srcSet={darkWebp} />
        <img src={darkSrc} alt="" className="h-full w-full object-contain" loading="lazy" />
      </picture>
    </span>
  );
}

const projectCardLinkClass =
  'inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md px-3 py-2 font-mulish text-sm font-medium text-on-surface outline-none transition-[background-color,color] duration-200 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-surface-panel';

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

  const cardImageClass = project.imageNoDarkFilter
    ? 'block h-full w-full object-contain object-center'
    : 'block h-full w-full object-contain object-center dark:[filter:invert(1)_brightness(0.7)]';

  return (
    <ContentCard
      className="layout-shift-smooth h-full w-full"
      mediaClassName="content-card__media--cover"
      media={
        <ProjectImage
          imageSrc={project.imageSrc}
          alt={project.imageAlt}
          className={cardImageClass}
        />
      }
    >
      <h2 className="content-card__title">{project.title}</h2>
      <p className="content-card__text">{project.description}</p>
      {stats && (
        <p className="content-card__text content-card__text--emphasis">
          {stats.users} users · {stats.lobbies} lobbies · {stats.games} games
        </p>
      )}
      <div className="content-card__footer">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={projectCardLinkClass}
            aria-label={`${project.title} on GitHub`}
            title={`${project.title} on GitHub`}
          >
            <GitHubMark className="h-5 w-5 shrink-0" />
            <span>GitHub</span>
          </a>
        ) : (
          <span />
        )}
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={projectCardLinkClass}
            aria-label={`Try it: ${project.title}`}
            title={`Try it: ${project.title}`}
          >
            <span>Try it</span>
            <Icon
              src={icons.forwardArrow}
              className="flex h-5 w-5 shrink-0 text-on-surface [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
              aria-hidden
            />
          </a>
        ) : null}
      </div>
    </ContentCard>
  );
};

export default ProjectCard;
