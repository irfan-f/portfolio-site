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

const isSvgSrc = (path: string) => path.toLowerCase().endsWith('.svg');

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
  const opacityClass = `transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`;

  const avifSrcSet = useMemo(() => {
    if (!responsiveBase || !responsiveWidths?.length) return null;
    return buildWidthSrcSet(responsiveBase, 'avif', responsiveWidths);
  }, [responsiveBase, responsiveWidths]);

  const webpSrcSet = useMemo(() => {
    if (!responsiveBase || !responsiveWidths?.length) return null;
    return buildWidthSrcSet(responsiveBase, 'webp', responsiveWidths);
  }, [responsiveBase, responsiveWidths]);

  const useSvgObject =
    isSvgSrc(src) && !avifSrcSet && !webp && !avif;

  useEffect(() => {
    setLoaded(false);
  }, [src, useSvgObject]);

  useEffect(() => {
    if (useSvgObject) return;
    const el = imgRef.current;
    if (el?.complete && el.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src, avifSrcSet, webpSrcSet, useSvgObject]);

  if (useSvgObject) {
    return (
      <div className={`relative overflow-hidden ${containerClassName}`}>
        {!loaded && <div className="image-loader" aria-hidden />}
        <object
          data={src}
          type="image/svg+xml"
          className={`pointer-events-none block h-full w-full antialiased ${fitClass} ${opacityClass} ${imgClassName}`}
          aria-label={alt}
          onLoad={() => setLoaded(true)}
        />
      </div>
    );
  }

  const img = (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`h-full w-full antialiased ${opacityClass} ${fitClass} ${imgClassName}`}
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
