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
  const { fetchPriority, ...restImgProps } = imgProps as ImgHTMLAttributes<HTMLImageElement> & {
    fetchPriority?: 'high' | 'low' | 'auto';
  };
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const fitClass =
    objectFit === 'cover' ? 'object-cover' : 'object-contain object-center';
  const sizeClass =
    objectFit === 'cover'
      ? 'h-full w-full'
      : 'mx-auto block h-auto w-auto max-h-full max-w-full';
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

  /** Picture/srcset + scrollport layouts may not fire `load` on mobile; decode + complete check. */
  useEffect(() => {
    if (useSvgObject) return;
    const el = imgRef.current;
    if (!el) return;

    let cancelled = false;
    const revealIfReady = () => {
      if (cancelled) return;
      if (el.complete && el.naturalWidth > 0) setLoaded(true);
    };

    revealIfReady();
    el.addEventListener('load', revealIfReady);
    el.addEventListener('error', revealIfReady);

    void (async () => {
      try {
        if (typeof el.decode === 'function') await el.decode();
      } catch {
        /* decode can reject for broken URLs; error handler covers it */
      }
      revealIfReady();
    })();

    const raf = requestAnimationFrame(revealIfReady);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      el.removeEventListener('load', revealIfReady);
      el.removeEventListener('error', revealIfReady);
    };
  }, [src, avifSrcSet, webpSrcSet, useSvgObject]);

  const svgLoaderLayout =
    objectFit === 'contain'
      ? 'flex items-center justify-center'
      : '';

  if (useSvgObject) {
    return (
      <div
        className={`relative overflow-hidden ${svgLoaderLayout} ${containerClassName}`.trim()}
      >
        {!loaded && <div className="image-loader" aria-hidden />}
        <object
          data={src}
          type="image/svg+xml"
          className={`pointer-events-none antialiased ${sizeClass} ${fitClass} ${opacityClass} ${imgClassName}`}
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
      className={`antialiased ${sizeClass} ${opacityClass} ${fitClass} ${imgClassName}`}
      onLoad={() => setLoaded(true)}
      onError={() => {
        if (imgRef.current?.naturalWidth === 0) setLoaded(true);
      }}
      {...restImgProps}
      {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
    />
  );

  const picture =
    avifSrcSet && webpSrcSet ? (
      <picture>
        <source type="image/avif" srcSet={avifSrcSet} sizes={restImgProps.sizes} />
        <source type="image/webp" srcSet={webpSrcSet} sizes={restImgProps.sizes} />
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

  const loaderLayout =
    objectFit === 'contain'
      ? 'flex items-center justify-center'
      : '';

  return (
    <div
      className={`relative overflow-hidden ${loaderLayout} ${containerClassName}`.trim()}
    >
      {!loaded && <div className="image-loader" aria-hidden />}
      {picture}
    </div>
  );
};

export default ImageWithLoader;
