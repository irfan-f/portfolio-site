import { FC } from 'react';
import type { ProjectImageRaster } from '../types/project';

function RasterPicture({
  raster,
  className,
  sizes,
  loading = 'lazy',
}: {
  raster: ProjectImageRaster;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}) {
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={raster.avif} />
      <source type="image/webp" srcSet={raster.webp} />
      <img
        src={raster.png}
        sizes={sizes}
        loading={loading}
        alt=""
        className="h-full w-full object-contain"
      />
    </picture>
  );
}

/** Light-mode asset (visible in dark theme) + dark-mode asset (visible in light theme). */
export const ThemeRasterPair: FC<{
  light: ProjectImageRaster;
  dark: ProjectImageRaster;
  sizes?: string;
}> = ({ light, dark, sizes = '36px' }) => (
  <>
    <RasterPicture
      raster={light}
      className="absolute top-0 left-0 h-full w-full object-contain opacity-0 dark:opacity-100"
      sizes={sizes}
    />
    <RasterPicture
      raster={dark}
      className="absolute top-0 left-0 h-full w-full object-contain opacity-100 dark:opacity-0"
      sizes={sizes}
    />
  </>
);

export default RasterPicture;
