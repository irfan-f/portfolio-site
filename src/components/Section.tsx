import { FC } from 'react';
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
}

const Section: FC<SectionProps> = ({
  id,
  title,
  content,
  images,
  orientation: _orientation = 'left',
  imageFirst = true,
  style: _style = 'basic',
  placeholder = false,
}) => {
  const Content = (
    <div className="section-content">
      {title && (
        <h2 className="font-dosis text-accent text-3xl font-bold antialiased">
          {title}
        </h2>
      )}
      {content && (
        <p className="font-libre text-on-surface text-start leading-relaxed antialiased">
          {content}
        </p>
      )}
    </div>
  );

  const ImageEl =
    images && images.length > 0 ? (
      <div
        className="section-image"
        style={{ aspectRatio: `${images[0].width} / ${images[0].height}` }}
      >
        <ImageGallery
          images={images}
          objectFit={placeholder ? 'contain' : 'cover'}
        />
      </div>
    ) : null;

  const children = imageFirst ? [ImageEl, Content] : [Content, ImageEl];

  return (
    <div
      id={id}
      className="bg-opaque rounded-inherit w-auto py-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
    >
      <div className="depth bg-surface-panel relative mx-8 flex flex-col gap-y-4 overflow-hidden rounded-xl text-center">
        {children}
      </div>
    </div>
  );
};

export default Section;
