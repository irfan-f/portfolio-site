import { FC } from 'react';
import ContentCard from './ContentCard';
import ImageGallery from './Image';
import { Image } from '../utils/images';

export interface SectionProps {
  id: string;
  title?: string;
  content?: string;
  images?: Image[];
  orientation?: 'left' | 'right';
  imageFirst?: boolean;
  style?: 'secondary' | 'tertiary' | 'bonus' | 'basic';
  placeholder?: boolean;
  imageLoading?: 'lazy' | 'eager';
  /** When true, title and copy render above the gallery (better deep-link scroll). */
  textFirst?: boolean;
}

const Section: FC<SectionProps> = ({
  id,
  title,
  content,
  images,
  orientation: _orientation = 'left',
  imageFirst: _imageFirst = true,
  style: _style = 'basic',
  placeholder: _placeholder = false,
  imageLoading = 'lazy',
  textFirst = false,
}) => {
  const hasImages = (images?.length ?? 0) > 0;
  const isCarousel = (images?.length ?? 0) > 1;

  const media =
    hasImages && images ? (
      <div
        className={`section-image section-image--contain${isCarousel ? ' section-image--carousel' : ''}`}
        style={
          !isCarousel
            ? { aspectRatio: `${images[0].width} / ${images[0].height}` }
            : undefined
        }
      >
        <ImageGallery
          images={images}
          objectFit="contain"
          loading={imageLoading}
        />
      </div>
    ) : null;

  return (
    <ContentCard
      className="layout-shift-smooth"
      textFirst={textFirst}
      media={media}
      mediaClassName={hasImages ? 'content-card__media--contain' : undefined}
    >
      {title && (
        <h2 id={id} className="content-card__title layout-shift-typography">
          {title}
        </h2>
      )}
      {content && <p className="content-card__text layout-shift-typography">{content}</p>}
    </ContentCard>
  );
};

export default Section;
