import { icons } from './icons';

const cache = new Map<string, string>();
let preloadPromise: Promise<void> | null = null;

function collectPaths(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (value && typeof value === 'object') {
    return Object.values(value).flatMap(collectPaths);
  }
  return [];
}

const ICON_PATHS = [...new Set(collectPaths(icons))];

export function preloadIcons(): Promise<void> {
  if (!preloadPromise) {
    preloadPromise = Promise.all(
      ICON_PATHS.map(async (path) => {
        const res = await fetch(path);
        if (!res.ok) {
          throw new Error(`Icon not found: ${path} (${res.status})`);
        }
        cache.set(path, await res.text());
      }),
    ).then(() => undefined);
  }
  return preloadPromise;
}

export function getIconMarkup(path: string): string {
  return cache.get(path) ?? '';
}
