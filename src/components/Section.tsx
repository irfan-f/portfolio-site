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
}

const Section: FC<SectionProps> = ({
  id,
  title,
  content,
  images,
  orientation: _orientation = 'left',
  imageFirst: _imageFirst = true,
  style: _style = 'basic',
  placeholder = false,
  imageLoading = 'lazy',
}) => {
  const useContain = placeholder;

  const media =
    images && images.length > 0 ? (
      <div
        className="section-image"
        style={{ aspectRatio: `${images[0].width} / ${images[0].height}` }}
      >
        <ImageGallery
          images={images}
          objectFit={useContain ? 'contain' : 'cover'}
          loading={imageLoading}
        />
      </div>
    ) : null;

  return (
    <ContentCard
      id={id}
      className="layout-shift-smooth [content-visibility:auto]"
      media={media}
      mediaClassName={
        useContain ? 'content-card__media--contain' : 'content-card__media--intrinsic'
      }
    >
      {title && <h2 className="content-card__title layout-shift-typography">{title}</h2>}
      {content && <p className="content-card__text layout-shift-typography">{content}</p>}
    </ContentCard>
  );
};

export default Section;
