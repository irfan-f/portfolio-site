import { FC, useId } from 'react';
import { PROJECT_TAG_LABELS, type ProjectTag } from '../../data/latestPosts';
import { LATEST_FILTER_ALL, type LatestProjectFilter } from '../../utils/filterLatestPosts';

type LatestPostsControlsProps = {
  projectTags: ProjectTag[];
  selectedProject: LatestProjectFilter;
  onProjectChange: (project: LatestProjectFilter) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  resultCount: number;
  totalCount: number;
};

const LatestPostsControls: FC<LatestPostsControlsProps> = ({
  projectTags,
  selectedProject,
  onProjectChange,
  searchQuery,
  onSearchQueryChange,
  resultCount,
  totalCount,
}) => {
  const searchId = useId();
  const filterGroupId = useId();
  const hasActiveFilter =
    selectedProject !== LATEST_FILTER_ALL || searchQuery.trim().length > 0;

  return (
    <div className="latest-controls" role="search" aria-label="Filter and search updates">
      <input
        id={searchId}
        type="search"
        className="latest-controls__search-input font-mulish"
        placeholder="Search…"
        value={searchQuery}
        onChange={(e) => onSearchQueryChange(e.target.value)}
        autoComplete="off"
        spellCheck={false}
        aria-label="Search updates by title or summary"
        aria-describedby={hasActiveFilter ? `${filterGroupId}-status` : undefined}
      />

      <div
        className="latest-controls__chips"
        role="group"
        aria-label="Filter by project"
      >
        <button
          type="button"
          className="latest-controls__chip"
          aria-pressed={selectedProject === LATEST_FILTER_ALL}
          onClick={() => onProjectChange(LATEST_FILTER_ALL)}
        >
          All
        </button>
        {projectTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className="latest-controls__chip"
            aria-pressed={selectedProject === tag}
            onClick={() => onProjectChange(tag)}
          >
            {PROJECT_TAG_LABELS[tag]}
          </button>
        ))}
      </div>

      <p
        id={`${filterGroupId}-status`}
        className={`latest-controls__status font-mulish ${hasActiveFilter ? '' : 'sr-only'}`.trim()}
        aria-hidden={!hasActiveFilter}
      >
        {hasActiveFilter ? `${resultCount}/${totalCount}` : `${totalCount} updates`}
      </p>
    </div>
  );
};

export default LatestPostsControls;
