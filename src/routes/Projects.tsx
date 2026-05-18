import { FC, useMemo } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useProjectGridColumnCount } from '../hooks/useProjectGridColumnCount';
import {
  listStaggerOpacityOnlyForLayoutCells,
  projectGridLayoutTransition,
} from '../motion/entranceVariants';
import { SITE_URL } from '../data/site';

const Projects: FC = () => {
  const reducedMotionPreference = useReducedMotion();
  const reduceMotion = reducedMotionPreference === true;
  const { container, item } = useMemo(
    () => listStaggerOpacityOnlyForLayoutCells(reduceMotion),
    [reduceMotion],
  );
  const gridLayoutTransition = projectGridLayoutTransition(reduceMotion);
  const gridColumnCount = useProjectGridColumnCount();

  return (
    <>
      <Helmet>
        <title>Projects — Irfan Filipovic</title>
        <link rel="canonical" href={`${SITE_URL}/projects`} />
        <meta
          name="description"
          content="Software development projects by Irfan Filipovic, including Mahjong with Friends, Hammerspoon automations, and todate."
        />
        <meta property="og:title" content="Projects — Irfan Filipovic" />
        <meta
          property="og:description"
          content="Software development projects by Irfan Filipovic, including Mahjong with Friends, Hammerspoon automations, and todate."
        />
        <meta property="og:url" content={`${SITE_URL}/projects`} />
        <meta property="og:image" content={`${SITE_URL}/images/irfan.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects — Irfan Filipovic" />
        <meta
          name="twitter:description"
          content="Software development projects by Irfan Filipovic."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/irfan.webp`} />
      </Helmet>
      <h1 className="sr-only">Projects</h1>
      {/* CSS Grid (not flex-wrap): 1 col default, 2 from `md`, 3 from `lg` — see useProjectGridColumnCount breakpoints */}
      <motion.section
        aria-label="Project grid"
        variants={container}
        initial="hidden"
        animate="show"
        className="layout-shift-smooth mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layout
            layoutDependency={gridColumnCount}
            transition={gridLayoutTransition}
            variants={item}
            initial="hidden"
            animate="show"
            className="flex min-h-0 h-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.section>
    </>
  );
};

export default Projects;
