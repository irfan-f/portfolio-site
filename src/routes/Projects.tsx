import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';
import { projects } from '../data/projects';

const SITE_URL = 'https://irfan-f.com';

const ProjectsGrid: FC = () => {
  return (
    <>
      <Helmet>
        <title>Projects — Irfan Filipovic</title>
        <meta
          name="description"
          content="Software development projects by Irfan Filipovic, including todate, Mahjong with Friends, and Hammerspoon automations."
        />
        <meta property="og:title" content="Projects — Irfan Filipovic" />
        <meta
          property="og:description"
          content="Software development projects by Irfan Filipovic, including todate, Mahjong with Friends, and Hammerspoon automations."
        />
        <meta property="og:url" content={`${SITE_URL}/#/projects`} />
        <meta property="og:image" content={`${SITE_URL}/images/irfan.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects — Irfan Filipovic" />
        <meta
          name="twitter:description"
          content="Software development projects by Irfan Filipovic."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/irfan.png`} />
      </Helmet>
      <main className="px-4 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </>
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
    <>
      <Helmet>
        <title>{project.title} — Irfan Filipovic</title>
        <meta name="description" content={project.description} />
        <meta
          property="og:title"
          content={`${project.title} — Irfan Filipovic`}
        />
        <meta property="og:description" content={project.description} />
        <meta
          property="og:url"
          content={`${SITE_URL}/#/projects/${project.id}`}
        />
        <meta property="og:image" content={`${SITE_URL}/images/irfan.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${project.title} — Irfan Filipovic`}
        />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={`${SITE_URL}/images/irfan.png`} />
      </Helmet>
      <main className="px-4 py-8">
        <ProjectDetail project={project} />
      </main>
    </>
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
