import { useId } from 'react';
import type { Theme } from '../hooks/useTheme';
import Icon from './Icon';
import { icons } from '../icons';

const NEXT_THEME: Record<Theme, Theme> = {
  light: 'dark',
  dark: 'system',
  system: 'light',
};

/** Shown next to the icon: the theme that will apply after this control is pressed. */
const SWITCH_TO_PHRASE: Record<Theme, string> = {
  light: 'Switch to dark mode',
  dark: 'Switch to system theme',
  system: 'Switch to light mode',
};

function CurrentThemeIcon({ theme, size }: { theme: Theme; size: 'header' | 'menu' }) {
  const iconClass =
    size === 'menu'
      ? 'svg-primary h-5 w-5 shrink-0 sm:h-6 sm:w-6'
      : 'svg-primary h-6 w-6 shrink-0 sm:h-5 sm:w-5';
  if (theme === 'light')
    return <Icon src={icons.sun} className={iconClass} aria-hidden />;
  if (theme === 'dark')
    return <Icon src={icons.moon} className={iconClass} aria-hidden />;
  return <Icon src={icons.defaultMode} className={iconClass} aria-hidden />;
}

export default function ThemeToggle({
  theme,
  setTheme,
  className,
  alwaysShowLabel = false,
}: {
  theme: Theme;
  setTheme: (t: Theme) => void;
  className?: string;
  /** Menu layout: centered row (icon + label), larger copy, icon = active theme. */
  alwaysShowLabel?: boolean;
}) {
  const uid = useId();
  const phrase = SWITCH_TO_PHRASE[theme];

  const labelClass = alwaysShowLabel
    ? 'font-mulish text-on-surface max-w-[min(100%,20rem)] text-left text-sm font-semibold leading-snug sm:text-base'
    : 'font-mulish hidden max-w-[10.5rem] truncate text-left text-xs font-semibold xl:inline';

  const buttonClass = alwaysShowLabel
    ? `btn-nav-header theme-toggle-menu inline-flex w-fit max-w-full min-w-0 flex-row items-center justify-center gap-2 rounded-lg px-3 py-2 ${className ?? ''}`
    : `btn-nav-header inline-flex min-h-[44px] min-w-[44px] items-center gap-2 px-2 sm:min-w-0 sm:px-3 ${className ?? ''}`;

  return (
    <button
      type="button"
      id={`theme-toggle-${uid}`}
      onClick={() => setTheme(NEXT_THEME[theme])}
      aria-label={phrase}
      title={phrase}
      className={buttonClass}
    >
      <CurrentThemeIcon theme={theme} size={alwaysShowLabel ? 'menu' : 'header'} />
      <span className={labelClass}>{phrase}</span>
    </button>
  );
}
