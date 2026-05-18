import { useSyncExternalStore } from 'react';

/** Tailwind default `md` — must match `md:grid-cols-*` on the projects grid. */
export const PROJECT_GRID_MD_MIN_PX = 768;
/** Tailwind default `lg` — must match `lg:grid-cols-*` on the projects grid. */
export const PROJECT_GRID_LG_MIN_PX = 1024;

/** Same column count the CSS grid uses for `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`. */
export function projectGridColumnCountFromViewport(): 1 | 2 | 3 {
  if (typeof window === 'undefined') return 1;
  const w = window.innerWidth;
  if (w >= PROJECT_GRID_LG_MIN_PX) return 3;
  if (w >= PROJECT_GRID_MD_MIN_PX) return 2;
  return 1;
}

function subscribe(onStoreChange: () => void): () => void {
  if (typeof window === 'undefined') return () => {};

  let last = projectGridColumnCountFromViewport();
  const emitIfColumnsChanged = () => {
    const next = projectGridColumnCountFromViewport();
    if (next !== last) {
      last = next;
      onStoreChange();
    }
  };

  const mqMd = window.matchMedia(`(min-width: ${PROJECT_GRID_MD_MIN_PX}px)`);
  const mqLg = window.matchMedia(`(min-width: ${PROJECT_GRID_LG_MIN_PX}px)`);
  mqMd.addEventListener('change', emitIfColumnsChanged);
  mqLg.addEventListener('change', emitIfColumnsChanged);
  window.addEventListener('resize', emitIfColumnsChanged);

  return () => {
    mqMd.removeEventListener('change', emitIfColumnsChanged);
    mqLg.removeEventListener('change', emitIfColumnsChanged);
    window.removeEventListener('resize', emitIfColumnsChanged);
  };
}

export function useProjectGridColumnCount(): 1 | 2 | 3 {
  return useSyncExternalStore(
    subscribe,
    projectGridColumnCountFromViewport,
    () => 1,
  );
}
