import { FC, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import ContentCard from '../ContentCard';
import { PROJECT_TAG_LABELS, type LatestPost } from '../../data/latestPosts';
import { latestPostsItemPresenceMotion } from '../../motion/entranceVariants';
import LatestPostCardFooter from './LatestPostCardFooter';

function CardFooter({ post }: { post: LatestPost }) {
  const action = <LatestPostCardFooter post={post} />;
  if (!action) return null;
  return <div className="content-card__footer">{action}</div>;
}

type LatestPostsEditorialProps = {
  posts: LatestPost[];
  reduceMotion: boolean;
};

const LatestPostsEditorial: FC<LatestPostsEditorialProps> = ({ posts, reduceMotion }) => {
  const itemMotion = useMemo(
    () => latestPostsItemPresenceMotion(reduceMotion),
    [reduceMotion],
  );

  return (
    <motion.ul
      layout
      className="latest-layout latest-layout--editorial"
      role="list"
      aria-label="Updates"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {posts.map((post, index) => {
          const isFeatured = index === 0;

          return (
            <motion.li
              key={post.id}
              layout="position"
              role="listitem"
              className={
                isFeatured ? 'latest-layout__cell latest-layout__cell--featured' : 'latest-layout__cell'
              }
              {...itemMotion}
            >
              <ContentCard
                variant="lifted"
                className="h-full"
                mediaClassName={
                  post.imageSrc && isFeatured ? 'content-card__media--cover' : undefined
                }
                media={
                  post.imageSrc ? (
                    <img
                      src={post.imageSrc}
                      alt=""
                      className={
                        post.imageSrc.endsWith('.svg')
                          ? 'mx-auto h-full w-full max-w-[40%] object-contain p-8'
                          : isFeatured
                            ? 'h-full w-full object-cover'
                            : 'mx-auto h-full w-full max-w-[55%] object-contain p-4 dark:invert dark:brightness-[0.7]'
                      }
                    />
                  ) : undefined
                }
              >
                <p className="latest-post__meta">
                  <span className="latest-post__tag">{PROJECT_TAG_LABELS[post.projectTag]}</span>
                  <time className="latest-post__date" dateTime={post.date}>
                    {post.date}
                  </time>
                </p>
                <h3 className={`content-card__title ${isFeatured ? 'content-card__title--featured' : ''}`}>
                  {post.title}
                </h3>
                <p className="content-card__text">{post.excerpt}</p>
                <CardFooter post={post} />
              </ContentCard>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </motion.ul>
  );
};

export default LatestPostsEditorial;
