import { FC } from 'react';
import { Image } from '../utils/images';

export interface ImageGallery {
  images: Image[];
  objectFit: 'cover' | 'contain';
}

const ImageGallery: FC<ImageGallery> = ({ images, objectFit = 'cover' }) => {
  if (images.length === 0) return null;

  const img = images[0];
  const objectFitCSS =
    objectFit === 'cover' ? 'object-cover' : 'object-contain';
  const imgEl =
    img.webp && img.avif ? (
      <picture>
        <source type="image/avif" srcSet={img.avif} />
        <source type="image/webp" srcSet={img.webp} />
        <img
          className={`h-full w-full antialiased ${objectFitCSS}`}
          src={img.src}
          alt={img.alt ?? 'Section image'}
          width={16}
          height={9}
          loading="lazy"
        />
      </picture>
    ) : (
      <img
        className={`h-full w-full antialiased ${objectFitCSS}`}
        src={img.src}
        alt={img.alt ?? 'Section image'}
        width={16}
        height={9}
        loading="lazy"
      />
    );

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="aspect-video w-full max-w-2xl overflow-hidden">
        {imgEl}
      </div>
    </div>
  );
};

export default ImageGallery;
