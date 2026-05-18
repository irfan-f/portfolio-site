import { useEffect, useState } from 'react';

/** Above-the-fold families — load before first text entrance to avoid swap mid-animation. */
const CRITICAL_FONTS = [
  '1rem "Dosis Variable"',
  '600 1rem "Mulish Variable"',
  '400 1rem "Mulish Variable"',
  '700 1rem "Mulish Variable"',
] as const;

export function useFontsReady(): boolean {
  const [ready, setReady] = useState(
    () => document.documentElement.classList.contains('fonts-ready'),
  );

  useEffect(() => {
    if (document.documentElement.classList.contains('fonts-ready')) {
      setReady(true);
      return;
    }

    let cancelled = false;

    async function loadFonts() {
      const timeout = new Promise<void>((resolve) => {
        window.setTimeout(resolve, 2500);
      });

      try {
        if (document.fonts) {
          await Promise.race([
            Promise.all(CRITICAL_FONTS.map((spec) => document.fonts.load(spec))),
            timeout,
          ]);
          await Promise.race([document.fonts.ready, timeout]);
        }
      } catch {
        // Use fallbacks if Font Loading API fails
      }
      if (!cancelled) {
        document.documentElement.classList.add('fonts-ready');
        setReady(true);
      }
    }

    void loadFonts();

    return () => {
      cancelled = true;
    };
  }, []);

  return ready;
}
