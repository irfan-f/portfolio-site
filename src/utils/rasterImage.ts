import type { ProjectImageRaster } from '../types/project';

const IMG = '/images';

/** PNG + generated WebP/AVIF under `public/images/` (see `npm run generate-images`). */
export function rasterImageSet(base: string): ProjectImageRaster {
  return {
    png: `${IMG}/${base}.png`,
    webp: `${IMG}/${base}.webp`,
    avif: `${IMG}/${base}.avif`,
  };
}

export function rasterPathsFromPng(png: string): ProjectImageRaster {
  return {
    png,
    webp: png.replace(/\.png$/i, '.webp'),
    avif: png.replace(/\.png$/i, '.avif'),
  };
}
