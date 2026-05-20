import { FC, useEffect, useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import {
  PROJECT_TAG_LABELS,
  getLatestPostById,
  updateDetailPath,
} from '../data/latestPosts';
import { SITE_URL } from '../data/site';
import { routePagePresenceMotion } from '../motion/entranceVariants';

const UpdateDetail: FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = postId ? getLatestPostById(postId) : undefined;
  const reduceMotion = useReducedMotion() === true;
  const pageMotion = useMemo(() => routePagePresenceMotion(reduceMotion), [reduceMotion]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    titleRef.current?.focus({ preventScroll: true });
  }, [postId]);

  if (!postId || !post) {
    return <Navigate to="/" replace />;
  }

  const canonical = `${SITE_URL}${updateDetailPath(post.id)}`;
  const isExternal = post.externalLink?.href.startsWith('http') ?? false;

  return (
    <>
      <Helmet>
        <title>{`${post.title} — Irfan Filipovic`}</title>
        <link rel="canonical" href={canonical} />
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} — Irfan Filipovic`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonical} />
        {post.imageSrc && !post.imageSrc.endsWith('.svg') ? (
          <meta property="og:image" content={`${SITE_URL}${post.imageSrc}`} />
        ) : (
          <meta property="og:image" content={`${SITE_URL}/images/irfan.webp`} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} — Irfan Filipovic`} />
        <meta name="twitter:description" content={post.excerpt} />
      </Helmet>

      <motion.article
        aria-labelledby="update-detail-title"
        className="update-detail layout-shift-smooth"
        {...pageMotion}
      >
        <nav className="update-detail__nav" aria-label="Update navigation">
          <Link to="/" className="update-detail__back font-mulish">
            <span aria-hidden>← </span>
            Back to latest updates
          </Link>
        </nav>

        <header className="update-detail__header">
          <p className="update-detail__meta">
            <span className="latest-post__tag">{PROJECT_TAG_LABELS[post.projectTag]}</span>
            <time className="latest-post__date" dateTime={post.date}>
              {post.date}
            </time>
          </p>
          <h1
            id="update-detail-title"
            ref={titleRef}
            tabIndex={-1}
            className="update-detail__title font-dosis"
          >
            {post.title}
          </h1>
          <p className="update-detail__lede font-mulish">{post.excerpt}</p>
          {post.externalLink ? (
            <div className="update-detail__actions">
              {isExternal ? (
                <a
                  href={post.externalLink.href}
                  className="update-detail__action update-detail__action--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.externalLink.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <Link
                  to={post.externalLink.href}
                  className="update-detail__action update-detail__action--primary"
                >
                  {post.externalLink.label}
                </Link>
              )}
            </div>
          ) : null}
        </header>

        {post.imageSrc ? (
          <figure className="update-detail__hero">
            <img
              src={post.imageSrc}
              alt=""
              className={
                post.imageSrc.endsWith('.svg')
                  ? 'update-detail__hero-img update-detail__hero-img--icon'
                  : 'update-detail__hero-img'
              }
            />
          </figure>
        ) : null}

        <div className="update-detail__body">
          {post.body.map((paragraph, index) => (
            <p key={index} className="update-detail__paragraph font-mulish">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.article>
    </>
  );
};

export default UpdateDetail;
