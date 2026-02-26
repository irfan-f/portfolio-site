import { FC } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';
import { projects } from '../data/projects';

const ProjectsGrid: FC = () => {
  return (
    <main className="px-4 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
};

const ProjectDetailRoute: FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="px-4 py-8">
        <p className="text-on-surface">Project not found.</p>
      </main>
    );
  }

  return (
    <main className="px-4 py-8">
      <ProjectDetail project={project} />
    </main>
  );
};

const Projects: FC = () => {
  return (
    <Routes>
      <Route index element={<ProjectsGrid />} />
      <Route path=":id" element={<ProjectDetailRoute />} />
    </Routes>
  );
};

export default Projects;
