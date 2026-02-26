import { FC } from 'react';
import { Link } from 'react-router-dom';
import type { ProjectMeta } from '../types/project';

interface ProjectDetailProps {
  project: ProjectMeta;
}

const ProjectDetail: FC<ProjectDetailProps> = ({ project }) => {
  return (
    <section className="project-section">
      <div className="flex flex-col justify-between lg:col-start-1 lg:col-end-2">
        <img
          className="project-image"
          src={project.imageSrc}
          alt={project.imageAlt}
          sizes="(max-width: 300px) 70vw, (max-width: 705px) 30vw, (max-width: 1110px) 20vw, 20vw"
          loading="lazy"
        />
      </div>
      <div className="project-content">
        <div>
          <h2 className="project-title">{project.title}</h2>
          <h3 className="project-subtitle">{project.subtitle}</h3>
        </div>
        <p className="project-paragraph">{project.description}</p>
        <Link
          to="/projects"
          className="font-libre text-primary dark:text-secondary hover:underline"
        >
          Back to projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetail;
