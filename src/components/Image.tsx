import { FC } from 'react';
import ImageWithLoader from './ImageWithLoader';
import ImageCarousel from './ImageCarousel';
import { Image } from '../utils/images';

export interface ImageGalleryProps {
  images: Image[];
  objectFit: 'cover' | 'contain';
  loading?: 'lazy' | 'eager';
}

const ImageGallery: FC<ImageGalleryProps> = ({
  images,
  objectFit = 'contain',
  loading = 'lazy',
}) => {
  if (images.length === 0) return null;

  if (images.length > 1) {
    return (
      <ImageCarousel
        images={images}
        objectFit={objectFit}
        loading={loading}
      />
    );
  }

  const img = images[0];

  return (
    <div className="section-image__gallery h-full w-full">
      <ImageWithLoader
        src={img.src}
        alt={img.alt ?? 'Section image'}
        webp={img.webp}
        avif={img.avif}
        responsiveBase={img.responsiveBase}
        responsiveWidths={img.responsiveWidths}
        sizes={img.sizes}
        objectFit={objectFit}
        containerClassName="h-full w-full"
        loading={loading}
        width={img.width}
        height={img.height}
      />
    </div>
  );
};

export default ImageGallery;
