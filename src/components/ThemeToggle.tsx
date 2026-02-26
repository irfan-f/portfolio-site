import { useState, useRef } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import type { Theme } from '../helpers/useTheme';
import SunIcon from '../svg/svgs/sun.svg?react';
import MoonIcon from '../svg/svgs/moon.svg?react';
import SystemIcon from '../svg/svgs/system.svg?react';

const LABELS: Record<Theme, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
};

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === 'light') return <SunIcon className="svg-primary h-6 w-6 sm:h-5 sm:w-5" aria-hidden />;
  if (theme === 'dark') return <MoonIcon className="svg-primary h-6 w-6 sm:h-5 sm:w-5" aria-hidden />;
  return <SystemIcon className="svg-primary h-6 w-6 sm:h-5 sm:w-5" aria-hidden />;
}

export default function ThemeToggle({
  theme,
  setTheme,
  className,
}: {
  theme: Theme;
  setTheme: (t: Theme) => void;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false), open);

  const listboxId = 'theme-listbox';

  return (
    <div ref={ref} className={`relative ${className ?? ''}`}>
      <button
        type="button"
        id="theme-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={open ? listboxId : undefined}
        aria-label={`Theme: ${LABELS[theme]}`}
        title={`Theme: ${LABELS[theme]}`}
        className="btn-nav-header min-h-[44px] min-w-[44px]"
      >
        <ThemeIcon theme={theme} />
      </button>
      {open && (
        <div
          id={listboxId}
          role="listbox"
          aria-label="Theme options"
          className="absolute right-0 top-full mt-1 py-1 min-w-32 rounded-lg bg-surface-panel border border-border shadow-lg z-50"
        >
          {(['light', 'dark', 'system'] as const).map((t) => (
            <button
              key={t}
              role="option"
              aria-selected={theme === t}
              type="button"
              onClick={() => {
                setTheme(t);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-secondary/50 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded cursor-pointer"
            >
              {LABELS[t]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
