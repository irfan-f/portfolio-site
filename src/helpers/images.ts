// utils/importImages.ts
export interface Image {
  src: string;
  srcSet: string;
  images: { path: string; width: number; height: number }[];
  width: number;
  height: number;
}

/**
 * Type guard to check if an object is an Image
 */
function isImage(obj: unknown): obj is Image {
  if (!obj || typeof obj !== 'object') return false;
  const img = obj as any;
  return (
    typeof img.src === 'string' &&
    typeof img.srcSet === 'string' &&
    Array.isArray(img.images) &&
    img.images.every(
      (i: any) =>
        i &&
        typeof i.path === 'string' &&
        typeof i.width === 'number' &&
        typeof i.height === 'number',
    ) &&
    typeof img.width === 'number' &&
    typeof img.height === 'number'
  );
}

/**
 * Dynamically import all images from a folder and filter to Image[]
 */
function importAll(r: __WebpackModuleApi.RequireContext): Image[] {
  return r
    .keys()
    .map((key) => r(key))
    .filter(isImage);
}

// Root images
export const rootImages: Image[] = importAll(
  require.context('../photos/roots', false, /\.(png|jpe?g|webp)$/),
);

// Outdoor images
export const outdoorImages: Image[] = importAll(
  require.context('../photos/outdoors', false, /\.(png|jpe?g|webp)$/),
);

// Biking images
export const bikingImages: Image[] = importAll(
  require.context('../photos/biking', false, /\.(png|jpe?g|webp)$/),
);

// Gardening images
export const gardenImages: Image[] = importAll(
  require.context('../photos/gardening', false, /\.(png|jpe?g|webp)$/),
);

// Cooking images
export const cookingImages: Image[] = importAll(
  require.context('../photos/cooking', false, /\.(png|jpe?g|webp)$/),
);

// Cooking images
export const placeHolderImages: Image[] = importAll(
  require.context('../photos/placeholder', false, /\.(png|jpe?g|webp)$/),
);
