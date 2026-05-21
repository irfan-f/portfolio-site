import imageMeta from '../data/image-meta.json';

export interface Image {
  src: string;
  webp?: string;
  avif?: string;
  responsiveBase?: string;
  responsiveWidths?: number[];
  width: number;
  height: number;
  sizes?: string;
  alt?: string;
}

const IMG = '/images';
const GALLERY_RESPONSIVE_WIDTHS = [480, 720, 960, 1280] as const;
const GALLERY_SIZES = '(max-width: 768px) 100vw, 42rem';

type MetaEntry = { width: number; height: number };

function dimensions(base: string): { width: number; height: number } {
  const entry = (imageMeta as Record<string, MetaEntry>)[base];
  if (entry) return entry;
  return { width: 16, height: 9 };
}

function deliverySrc(base: string, responsiveWidths: number[]): string {
  if (responsiveWidths.length > 0) {
    const largest = Math.max(...responsiveWidths);
    return `${IMG}/${base}-${largest}.webp`;
  }
  return `${IMG}/${base}.webp`;
}

function toImage(base: string, alt?: string): Image {
  const { width, height } = dimensions(base);
  const responsiveWidths = GALLERY_RESPONSIVE_WIDTHS.filter((w) => w <= width);
  const src = deliverySrc(base, responsiveWidths);
  return {
    src,
    webp: src,
    avif:
      responsiveWidths.length > 0
        ? `${IMG}/${base}-${Math.max(...responsiveWidths)}.avif`
        : `${IMG}/${base}.avif`,
    responsiveBase: `${IMG}/${base}`,
    ...(responsiveWidths.length > 0 && { responsiveWidths: [...responsiveWidths] }),
    width,
    height,
    sizes: GALLERY_SIZES,
    ...(alt && { alt }),
  };
}

export const rootImages: Image[] = [toImage('1family', 'Family photo')];
export const outdoorImages: Image[] = [toImage('1redwoods', 'Redwood forest')];
export const bikingImages: Image[] = [toImage('1dahlia_bike', 'Biking')];
export const gardenImages: Image[] = [
  toImage('garden1', 'Garden bed'),
  toImage('garden2', 'Garden harvest'),
  toImage('garden3', 'Garden vegetables'),
  toImage('garden4', 'Backyard garden'),
];
export const cookingImages: Image[] = [
  toImage('backpacking', 'Backpacking cooking'),
];
export const placeHolderImages: Image[] = [
  toImage('irfancartoon', 'Cartoon illustration of Irfan'),
];
