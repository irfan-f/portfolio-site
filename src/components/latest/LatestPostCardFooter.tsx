import { FC } from 'react';
import {
  postShowsReadMore,
  type LatestPost,
} from '../../data/latestPosts';
import ExternalReferenceLink from '../ExternalReferenceLink';
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

  return <ExternalReferenceLink href={link.href} label={link.label} />;
};

export default LatestPostCardFooter;
