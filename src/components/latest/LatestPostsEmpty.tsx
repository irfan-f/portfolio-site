import { FC } from 'react';

type LatestPostsEmptyProps = {
  onClearFilters: () => void;
};

const LatestPostsEmpty: FC<LatestPostsEmptyProps> = ({ onClearFilters }) => (
  <div className="latest-empty" role="status">
    <p className="font-dosis latest-empty__title">No updates match</p>
    <p className="font-mulish latest-empty__text">
      Try another project tag or a different search term.
    </p>
    <button type="button" className="latest-controls__chip latest-empty__clear" onClick={onClearFilters}>
      Clear filters
    </button>
  </div>
);

export default LatestPostsEmpty;
