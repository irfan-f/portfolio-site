import { FC, useState } from 'react';
import BalancedImageGallery from './Image';
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

// Still a work in progress

const Section: FC<SectionProps> = ({
  id,
  title,
  content,
  images,
  orientation = 'left',
  imageFirst = true,
  style = 'basic',
  placeholder = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  // Content block
  const Content = (
    <div className="section-content flex flex-1 flex-col items-start gap-y-2 px-4 pb-4">
      {title && (
        <h2 className="font-dosis text-3xl font-bold text-primary antialiased">
          {title}
        </h2>
      )}
      {content && (
        <p className="text-start font-libre leading-relaxed text-black antialiased">
          {content}
        </p>
      )}
    </div>
  );

  // Image block
  const ImageEl =
    images && images.length > 0 ? (
      <div
        className="section-image relative max-h-[30vh] w-full flex-1 overflow-hidden"
        style={{ aspectRatio: `${images[0].width} / ${images[0].height}` }}
      >
        <BalancedImageGallery
          setImageLoaded={setImageLoaded}
          images={images}
          objectFit={placeholder ? 'contain' : 'cover'}
        />
      </div>
    ) : null;

  // Order depends on `imageFirst`
  const children = imageFirst ? [ImageEl, Content] : [Content, ImageEl];

  // Classes that vary by orientation
  const sectionClasses = [
    '',
    `section-${orientation}`,
    `section-${style}`,
    'xl:bg-none',
    'gap-y-4',
  ].join(' ');
  return (
    <div
      id={id}
      className={`bg-opaque py-4 xl:section-${style} rounded-inherit w-auto md:w-1/2 2xl:w-1/3`}
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
