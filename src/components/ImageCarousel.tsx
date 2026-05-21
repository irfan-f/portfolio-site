import { FC, useCallback, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import ImageWithLoader from './ImageWithLoader';
import { Image } from '../utils/images';
import { gallerySlidePresenceMotion } from '../motion/entranceVariants';

export interface ImageCarouselProps {
  images: Image[];
  objectFit: 'cover' | 'contain';
  loading?: 'lazy' | 'eager';
}

const ImageCarousel: FC<ImageCarouselProps> = ({
  images,
  objectFit = 'cover',
  loading = 'lazy',
}) => {
  const reduceMotion = useReducedMotion() === true;
  const slideMotion = gallerySlidePresenceMotion(reduceMotion);
  const [index, setIndex] = useState(0);
  const count = images.length;
  const current = images[index];

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  return (
    <div
      className={`image-carousel${objectFit === 'contain' ? ' image-carousel--contain' : ''}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          className="image-carousel__slide"
          {...slideMotion}
        >
          <ImageWithLoader
            src={current.src}
            alt={current.alt ?? 'Section image'}
            webp={current.webp}
            avif={current.avif}
            responsiveBase={current.responsiveBase}
            responsiveWidths={current.responsiveWidths}
            sizes={current.sizes}
            objectFit={objectFit}
            containerClassName="h-full w-full"
            loading={loading}
            width={current.width}
            height={current.height}
          />
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <>
          <button
            type="button"
            className="image-carousel__control image-carousel__control--prev"
            onClick={goPrev}
            aria-label="Previous photo"
            title="Previous photo"
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            type="button"
            className="image-carousel__control image-carousel__control--next"
            onClick={goNext}
            aria-label="Next photo"
            title="Next photo"
          >
            <span aria-hidden>›</span>
          </button>
          <div
            className="image-carousel__dots"
            role="tablist"
            aria-label="Photo gallery"
          >
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Photo ${i + 1} of ${count}`}
                className={`image-carousel__dot${i === index ? ' image-carousel__dot--active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
