const HOME_SCROLL_STORAGE_KEY = 'portfolio-home-main-scroll';

export const MAIN_CONTENT_ID = 'main-content';

export const MAIN_CONTENT_SCROLL_SYNC = 'portfolio-main-scroll-sync';

/** Wait for route/layout before hash scroll; one eased pass (no instant jumps). */
const HASH_SCROLL_DELAY_MS = 550;
const HASH_SCROLL_CORRECTION_MS = 1300;
const HASH_SCROLL_DURATION_MS = 1000;

let hashScrollFrame: number | null = null;

/** Prefer the section title so hash links land on the heading, not hero media. */
function resolveScrollTarget(element: HTMLElement): HTMLElement {
  const title = element.querySelector<HTMLElement>('.content-card__title');
  return title ?? element;
}

function scrollOffsetInMain(main: HTMLElement, target: HTMLElement): number {
  const anchor = resolveScrollTarget(target);
  return (
    main.scrollTop +
    anchor.getBoundingClientRect().top -
    main.getBoundingClientRect().top
  );
}

function measureScrollTopForTarget(targetId: string): number | null {
  const main = document.getElementById(MAIN_CONTENT_ID);
  const target = document.getElementById(targetId);
  if (!main || !target) return null;
  const top = Math.max(0, scrollOffsetInMain(main, target));
  const maxTop = main.scrollHeight - main.clientHeight;
  return Math.min(top, maxTop);
}

function cancelHashScrollAnimation(): void {
  if (hashScrollFrame != null) {
    cancelAnimationFrame(hashScrollFrame);
    hashScrollFrame = null;
  }
}

/** Eased scroll on `#main-content` (duration-controlled; not native `smooth`). */
export function animateMainContentScrollTo(
  top: number,
  durationMs = HASH_SCROLL_DURATION_MS,
): () => void {
  const main = document.getElementById(MAIN_CONTENT_ID);
  if (!main) return () => {};

  cancelHashScrollAnimation();

  const startTop = main.scrollTop;
  const delta = top - startTop;
  if (Math.abs(delta) < 1) {
    notifyMainContentScrollSync();
    return () => {};
  }

  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / durationMs);
    const eased = 1 - (1 - t) ** 3;
    main.scrollTop = startTop + delta * eased;
    if (t < 1) {
      hashScrollFrame = requestAnimationFrame(tick);
    } else {
      hashScrollFrame = null;
      notifyMainContentScrollSync();
    }
  };

  hashScrollFrame = requestAnimationFrame(tick);
  return cancelHashScrollAnimation;
}

/** Let portaled UI (hero scroll CTA) re-measure after programmatic scroll. */
export function notifyMainContentScrollSync(): void {
  window.dispatchEvent(new Event(MAIN_CONTENT_SCROLL_SYNC));
}

function hasPendingHomeScrollRestore(): boolean {
  return sessionStorage.getItem(HOME_SCROLL_STORAGE_KEY) != null;
}

/**
 * Scroll `#main-content` so `targetId` is aligned to the top of the scrollport.
 * Waits for layout, then one eased animation (no intermediate jumps).
 */
export function scrollMainContentToTarget(
  targetId: string,
  options: { reduceMotion?: boolean; durationMs?: number } = {},
): () => void {
  const reduceMotion = options.reduceMotion === true;
  const durationMs = options.durationMs ?? HASH_SCROLL_DURATION_MS;
  let cancelled = false;
  let lastAnimatedTop: number | null = null;

  const run = (allowCorrection: boolean) => {
    if (cancelled) return;
    const top = measureScrollTopForTarget(targetId);
    if (top == null) return;

    if (
      !allowCorrection &&
      lastAnimatedTop != null &&
      Math.abs(top - lastAnimatedTop) < 2
    ) {
      return;
    }

    if (
      allowCorrection &&
      lastAnimatedTop != null &&
      Math.abs(top - lastAnimatedTop) < 2
    ) {
      return;
    }

    lastAnimatedTop = top;

    if (reduceMotion) {
      const main = document.getElementById(MAIN_CONTENT_ID);
      main?.scrollTo({ top, behavior: 'instant' });
      notifyMainContentScrollSync();
      return;
    }

    animateMainContentScrollTo(top, durationMs);
  };

  const initialTimer = window.setTimeout(() => run(false), HASH_SCROLL_DELAY_MS);
  const correctionTimer = window.setTimeout(
    () => run(true),
    HASH_SCROLL_CORRECTION_MS,
  );

  return () => {
    cancelled = true;
    clearTimeout(initialTimer);
    clearTimeout(correctionTimer);
    cancelHashScrollAnimation();
  };
}

/** Reset `#main-content` scroll to the top (e.g. opening an update detail page). */
export function scrollMainContentToTop(): void {
  const main = document.getElementById(MAIN_CONTENT_ID);
  if (!main) return;
  main.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

export function saveHomeMainScrollPosition(): void {
  const main = document.getElementById(MAIN_CONTENT_ID);
  if (!main) return;
  sessionStorage.setItem(HOME_SCROLL_STORAGE_KEY, String(main.scrollTop));
}

/** Restore scroll on `#main-content` after returning from an update detail page. */
export function restoreHomeMainScrollPosition(): boolean {
  const raw = sessionStorage.getItem(HOME_SCROLL_STORAGE_KEY);
  if (raw == null) return false;

  sessionStorage.removeItem(HOME_SCROLL_STORAGE_KEY);
  const main = document.getElementById(MAIN_CONTENT_ID);
  if (!main) return false;

  const top = Number(raw);
  if (!Number.isFinite(top)) return false;

  const apply = () => main.scrollTo({ top, behavior: 'auto' });
  apply();
  requestAnimationFrame(apply);
  return true;
}

/** Home route without a pending update-detail restore — start at the top. */
export function prepareHomeMainScroll(): void {
  if (hasPendingHomeScrollRestore()) return;
  scrollMainContentToTop();
  notifyMainContentScrollSync();
}
