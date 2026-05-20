import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { updateDetailPath } from '../../data/latestPosts';
import { saveHomeMainScrollPosition } from '../../utils/homeScrollRestore';

type LatestPostDetailLinkProps = {
  postId: string;
  className?: string;
  children: ReactNode;
};

const LatestPostDetailLink: FC<LatestPostDetailLinkProps> = ({
  postId,
  className = '',
  children,
}) => (
  <Link
    to={updateDetailPath(postId)}
    className={className}
    onClick={saveHomeMainScrollPosition}
  >
    {children}
  </Link>
);

export default LatestPostDetailLink;
