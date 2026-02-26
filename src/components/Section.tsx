import { FC, useState } from 'react';
import ImageGallery from './Image';
import { Image } from '../helpers/images';

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
  style = 'basic',
  placeholder = false,
}) => {
  const [, setImageLoaded] = useState(false);
  const Content = (
    <div className="section-content">
      {title && (
        <h2 className="font-dosis text-3xl font-bold text-primary antialiased">
          {title}
        </h2>
      )}
      {content && (
        <p className="text-start font-libre leading-relaxed text-on-surface antialiased">
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
          setImageLoaded={setImageLoaded}
          images={images}
          objectFit={placeholder ? 'contain' : 'cover'}
        />
      </div>
    )     : null;

  const children = imageFirst ? [ImageEl, Content] : [Content, ImageEl];

  const styleMap = {
    secondary: 'xl:section-secondary',
    tertiary: 'xl:section-tertiary',
    bonus: 'xl:section-bonus',
    basic: 'xl:section-basic',
  } as const;
  const sectionClasses = ['section-' + style, 'xl:bg-none', 'gap-y-4'].join(
    ' ',
  );
  return (
    <div
      id={id}
      className={`bg-opaque py-4 ${styleMap[style]} rounded-inherit w-auto md:w-1/2 2xl:w-1/3`}
    >
      <div
        className={`depth relative mx-8 flex flex-col overflow-hidden rounded-xl text-center ${sectionClasses}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
