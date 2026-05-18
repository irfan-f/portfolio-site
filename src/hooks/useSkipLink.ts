import { useEffect } from 'react';
import { skipToMainContent } from '../utils/skipToMain';

/** Wires the static skip control in index.html (must stay first in tab order). */
export function useSkipLink(): void {
  useEffect(() => {
    const skip = document.querySelector<HTMLButtonElement>('.skip-link');
    if (!skip) return;

    const onActivate = (event: Event) => {
      event.preventDefault();
      skipToMainContent();
    };

    skip.addEventListener('click', onActivate);
    return () => skip.removeEventListener('click', onActivate);
  }, []);
}
