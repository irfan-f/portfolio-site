export interface Image {
  src: string;
  width: number;
  height: number;
}

const DEFAULT_ASPECT = { width: 16, height: 9 };

function toImages(
  modules: Record<string, { default: string }>,
  folder: string,
): Image[] {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/${folder}/`))
    .map(([, mod]) => ({
      src: mod.default,
      ...DEFAULT_ASPECT,
    }));
}

const allModules = import.meta.glob<{ default: string }>(
  '../photos/*/*.{png,jpg,jpeg,webp}',
  { eager: true, query: '?url', import: 'default' },
);

export const rootImages: Image[] = toImages(
  allModules as Record<string, { default: string }>,
  'roots',
);
export const outdoorImages: Image[] = toImages(
  allModules as Record<string, { default: string }>,
  'outdoors',
);
export const bikingImages: Image[] = toImages(
  allModules as Record<string, { default: string }>,
  'biking',
);
export const gardenImages: Image[] = toImages(
  allModules as Record<string, { default: string }>,
  'gardening',
);
export const cookingImages: Image[] = toImages(
  allModules as Record<string, { default: string }>,
  'cooking',
);
export const placeHolderImages: Image[] = toImages(
  allModules as Record<string, { default: string }>,
  'placeholder',
);
