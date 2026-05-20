import { FC, useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { latestPosts } from '../../data/latestPosts';
import {
  inViewRevealMotion,
  latestFilterPanelPresenceMotion,
} from '../../motion/entranceVariants';
import {
  filterLatestPosts,
  getProjectTagsFromPosts,
  LATEST_FILTER_ALL,
  type LatestProjectFilter,
} from '../../utils/filterLatestPosts';
import LatestPostsControls from './LatestPostsControls';
import LatestPostsEditorial from './LatestPostsEditorial';
import LatestPostsEmpty from './LatestPostsEmpty';

type LatestThingsSectionProps = {
  className?: string;
};

const LatestThingsSection: FC<LatestThingsSectionProps> = ({ className = '' }) => {
  const reduceMotion = useReducedMotion() === true;
  const headerMotion = useMemo(() => inViewRevealMotion(reduceMotion), [reduceMotion]);
  const panelMotion = useMemo(
    () => latestFilterPanelPresenceMotion(reduceMotion),
    [reduceMotion],
  );
  const [selectedProject, setSelectedProject] = useState<LatestProjectFilter>(LATEST_FILTER_ALL);
  const [searchQuery, setSearchQuery] = useState('');

  const projectTags = useMemo(() => getProjectTagsFromPosts(latestPosts), []);
  const filteredPosts = useMemo(
    () => filterLatestPosts(latestPosts, { project: selectedProject, searchQuery }),
    [selectedProject, searchQuery],
  );

  const resultsLabel = useMemo(() => {
    const hasFilter =
      selectedProject !== LATEST_FILTER_ALL || searchQuery.trim().length > 0;
    if (!hasFilter) return `${latestPosts.length} updates`;
    return `Showing ${filteredPosts.length} of ${latestPosts.length} updates`;
  }, [filteredPosts.length, searchQuery, selectedProject]);

  const clearFilters = useCallback(() => {
    setSelectedProject(LATEST_FILTER_ALL);
    setSearchQuery('');
  }, []);

  const showEmpty = filteredPosts.length === 0;

  return (
    <section
      id="latest-things"
      className={`latest-section ${className}`.trim()}
      aria-labelledby="latest-things-heading"
    >
      <div className="latest-section__top">
        <motion.header className="latest-section__header" {...headerMotion}>
          <p className="font-mulish text-muted text-sm font-semibold uppercase tracking-wide">
            Updates
          </p>
          <h2
            id="latest-things-heading"
            className="font-dosis text-teal text-2xl font-bold sm:text-3xl"
          >
            Catch up on the latest things
          </h2>
          <p className="font-mulish text-muted max-w-2xl text-sm leading-relaxed sm:text-base">
            Project launches, site changes, and notes from whatever I am building next.
          </p>
        </motion.header>

        <LatestPostsControls
          projectTags={projectTags}
          selectedProject={selectedProject}
          onProjectChange={setSelectedProject}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          resultCount={filteredPosts.length}
          totalCount={latestPosts.length}
        />
      </div>

      <div
        className="latest-section__results"
        role="region"
        aria-label="Update results"
        aria-live="polite"
        aria-relevant="additions removals"
      >
        <p className="sr-only">{resultsLabel}</p>

        <div className="latest-section__content">
          <AnimatePresence mode="wait" initial={false}>
            {showEmpty ? (
              <motion.div
                key="latest-empty"
                className="latest-section__panel"
                {...panelMotion}
              >
                <LatestPostsEmpty onClearFilters={clearFilters} />
              </motion.div>
            ) : (
              <div key="latest-editorial" className="latest-section__panel">
                <LatestPostsEditorial posts={filteredPosts} reduceMotion={reduceMotion} />
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LatestThingsSection;
