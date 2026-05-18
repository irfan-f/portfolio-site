import { FC, useMemo, useRef, useState, useEffect, ImgHTMLAttributes } from 'react';

function buildWidthSrcSet(basePath: string, ext: 'avif' | 'webp', widths: number[]) {
  return widths.map((w) => `${basePath}-${w}.${ext} ${w}w`).join(', ');
}

interface ImageWithLoaderProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webp?: string;
  avif?: string;
  /** Path without extension, e.g. `/images/irfan` → `irfan-480.avif` … (run `npm run generate-images`). */
  responsiveBase?: string;
  /** Width descriptors; must be paired with `sizes` on the img. */
  responsiveWidths?: number[];
  containerClassName?: string;
  imgClassName?: string;
  objectFit?: 'cover' | 'contain';
}

const ImageWithLoader: FC<ImageWithLoaderProps> = ({
  src,
  alt,
  webp,
  avif,
  responsiveBase,
  responsiveWidths,
  containerClassName = '',
  imgClassName = '',
  objectFit = 'cover',
  ...imgProps
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const fitClass =
    objectFit === 'cover' ? 'object-cover' : 'object-contain object-center';

  const avifSrcSet = useMemo(() => {
    if (!responsiveBase || !responsiveWidths?.length) return null;
    return buildWidthSrcSet(responsiveBase, 'avif', responsiveWidths);
  }, [responsiveBase, responsiveWidths]);

  const webpSrcSet = useMemo(() => {
    if (!responsiveBase || !responsiveWidths?.length) return null;
    return buildWidthSrcSet(responsiveBase, 'webp', responsiveWidths);
  }, [responsiveBase, responsiveWidths]);

  useEffect(() => {
    const el = imgRef.current;
    if (el?.complete && el.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src, avifSrcSet, webpSrcSet]);

  const img = (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`h-full w-full antialiased transition-opacity duration-300 ${fitClass} ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
      onLoad={() => setLoaded(true)}
      {...imgProps}
    />
  );

  const picture =
    avifSrcSet && webpSrcSet ? (
      <picture>
        <source type="image/avif" srcSet={avifSrcSet} sizes={imgProps.sizes} />
        <source type="image/webp" srcSet={webpSrcSet} sizes={imgProps.sizes} />
        {img}
      </picture>
    ) : webp && avif ? (
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
