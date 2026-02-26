import { FC } from 'react';
import ImageWithLoader from './ImageWithLoader';
import { Image } from '../utils/images';

export interface ImageGallery {
  images: Image[];
  objectFit: 'cover' | 'contain';
}

const ImageGallery: FC<ImageGallery> = ({ images, objectFit = 'cover' }) => {
  if (images.length === 0) return null;

  const img = images[0];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="aspect-video w-full max-w-2xl overflow-hidden">
        <ImageWithLoader
          src={img.src}
          alt={img.alt ?? 'Section image'}
          webp={img.webp}
          avif={img.avif}
          objectFit={objectFit}
          containerClassName="h-full w-full"
          loading="lazy"
          width={16}
          height={9}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
