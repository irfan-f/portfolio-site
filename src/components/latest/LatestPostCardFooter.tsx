import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  postShowsReadMore,
  type LatestPost,
} from '../../data/latestPosts';
import LatestPostDetailLink from './LatestPostDetailLink';

type LatestPostCardFooterProps = {
  post: LatestPost;
};

const LatestPostCardFooter: FC<LatestPostCardFooterProps> = ({ post }) => {
  if (postShowsReadMore(post)) {
    return (
      <LatestPostDetailLink postId={post.id} className="latest-post__link">
        Read more<span className="sr-only"> about {post.title}</span>
        <span aria-hidden> →</span>
      </LatestPostDetailLink>
    );
  }

  const link = post.externalLink;
  if (!link) return null;

  const isExternal = link.href.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={link.href}
        className="latest-post__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
        <span className="sr-only"> (opens in a new tab)</span>
        <span aria-hidden> →</span>
      </a>
    );
  }

  return (
    <Link to={link.href} className="latest-post__link">
      {link.label}
      <span aria-hidden> →</span>
    </Link>
  );
};

export default LatestPostCardFooter;
