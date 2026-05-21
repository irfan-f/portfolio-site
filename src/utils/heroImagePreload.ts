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
