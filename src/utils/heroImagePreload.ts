export const HERO_IMAGE_BASE = '/images/irfan';

/** Widths emitted by `npm run generate-images` for the `irfan` master. */
export const HERO_IMAGE_WIDTHS = [480, 720, 960, 1280] as const;

/** `<img src>` fallback and OG/Twitter default — must exist under `public/images/`. */
export const HERO_IMAGE_FALLBACK_SRC = `${HERO_IMAGE_BASE}-1280.webp`;

/** Matches Home hero `responsiveWidths` and `sizes` on ImageWithLoader. */
export const HERO_IMAGE_SRCSET =
  '/images/irfan-480.avif 480w, /images/irfan-720.avif 720w, /images/irfan-960.avif 960w, /images/irfan-1280.avif 1280w';

export const HERO_IMAGE_SIZES =
  '(max-width: 768px) min(92vw, 20rem), min(40vw, 28rem)';

export function isHomePath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return normalized === '/';
}

/** Early preload for direct visits to `/`; safe to call more than once. */
export function injectHeroImagePreload(): void {
  if (document.querySelector('link[data-hero-preload]')) return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.setAttribute('data-hero-preload', '');
  link.setAttribute('imagesrcset', HERO_IMAGE_SRCSET);
  link.setAttribute('imagesizes', HERO_IMAGE_SIZES);
  document.head.appendChild(link);
}
