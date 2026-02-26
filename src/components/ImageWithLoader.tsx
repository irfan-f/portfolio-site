import { FC, useState, ImgHTMLAttributes } from 'react';

interface ImageWithLoaderProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webp?: string;
  avif?: string;
  containerClassName?: string;
  imgClassName?: string;
  objectFit?: 'cover' | 'contain';
}

const ImageWithLoader: FC<ImageWithLoaderProps> = ({
  src,
  alt,
  webp,
  avif,
  containerClassName = '',
  imgClassName = '',
  objectFit = 'cover',
  ...imgProps
}) => {
  const [loaded, setLoaded] = useState(false);
  const fitClass =
    objectFit === 'cover' ? 'object-cover' : 'object-contain object-center';

  const img = (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full antialiased transition-opacity duration-300 ${fitClass} ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
      onLoad={() => setLoaded(true)}
      {...imgProps}
    />
  );

  const picture =
    webp && avif ? (
      <picture>
        <source type="image/avif" srcSet={avif} />
        <source type="image/webp" srcSet={webp} />
        {img}
      </picture>
    ) : (
      img
    );

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {!loaded && <div className="image-loader" aria-hidden />}
      {picture}
    </div>
  );
};

export default ImageWithLoader;
