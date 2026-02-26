export interface Image {
  src: string;
  webp?: string;
  avif?: string;
  width: number;
  height: number;
  alt?: string;
}

const IMG = '/images';
const DEFAULT_ASPECT = { width: 16, height: 9 };

function toImage(base: string, alt?: string): Image {
  return {
    src: `${IMG}/${base}.png`,
    webp: `${IMG}/${base}.webp`,
    avif: `${IMG}/${base}.avif`,
    ...DEFAULT_ASPECT,
    ...(alt && { alt }),
  };
}

export const rootImages: Image[] = [toImage('1family', 'Family photo')];
export const outdoorImages: Image[] = [toImage('1redwoods', 'Redwood forest')];
export const bikingImages: Image[] = [toImage('1dahlia_bike', 'Biking')];
export const gardenImages: Image[] = [
  toImage('embroidery', 'Garden embroidery'),
];
export const cookingImages: Image[] = [
  toImage('backpacking', 'Backpacking cooking'),
];
export const placeHolderImages: Image[] = [
  toImage('irfancartoon', 'Placeholder'),
];
