const HOME_SCROLL_STORAGE_KEY = 'portfolio-home-main-scroll';

export function saveHomeMainScrollPosition(): void {
  const main = document.getElementById('main-content');
  if (!main) return;
  sessionStorage.setItem(HOME_SCROLL_STORAGE_KEY, String(main.scrollTop));
}

/** Restore scroll on `#main-content` after returning from an update detail page. */
export function restoreHomeMainScrollPosition(): boolean {
  const raw = sessionStorage.getItem(HOME_SCROLL_STORAGE_KEY);
  if (raw == null) return false;

  sessionStorage.removeItem(HOME_SCROLL_STORAGE_KEY);
  const main = document.getElementById('main-content');
  if (!main) return false;

  const top = Number(raw);
  if (!Number.isFinite(top)) return false;

  const apply = () => main.scrollTo({ top, behavior: 'auto' });
  apply();
  requestAnimationFrame(apply);
  return true;
}
