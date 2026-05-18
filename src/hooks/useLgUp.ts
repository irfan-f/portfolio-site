import { useSyncExternalStore } from 'react';

/** Tailwind default `lg` — must match `lg:` utilities in the navbar. */
export const LG_MIN_WIDTH_PX = 1024;

function getSnapshot(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(`(min-width: ${LG_MIN_WIDTH_PX}px)`).matches;
}

function subscribe(onStoreChange: () => void): () => void {
  if (typeof window === 'undefined') return () => {};

  const mq = window.matchMedia(`(min-width: ${LG_MIN_WIDTH_PX}px)`);
  mq.addEventListener('change', onStoreChange);
  return () => mq.removeEventListener('change', onStoreChange);
}

/** `true` when viewport is at or above the Tailwind `lg` breakpoint (1024px). */
export function useLgUp(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
