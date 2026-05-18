const MAIN_CONTENT_ID = 'main-content';

/** Focus the app scroll region and reset its scroll position. */
export function skipToMainContent(): void {
  const main = document.getElementById(MAIN_CONTENT_ID);
  if (!main) return;
  main.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  main.tabIndex = -1;
  main.focus({ preventScroll: true });
  const onBlur = () => {
    main.removeAttribute('tabindex');
    main.removeEventListener('blur', onBlur);
  };
  main.addEventListener('blur', onBlur);
}
