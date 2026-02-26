import { useState, useRef, useCallback } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import type { Theme } from '../hooks/useTheme';
import Icon from './Icon';
import { icons } from '../icons';

const LABELS: Record<Theme, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
};

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === 'light')
    return (
      <Icon
        src={icons.sun}
        className="svg-primary h-6 w-6 sm:h-5 sm:w-5"
        aria-hidden
      />
    );
  if (theme === 'dark')
    return (
      <Icon
        src={icons.moon}
        className="svg-primary h-6 w-6 sm:h-5 sm:w-5"
        aria-hidden
      />
    );
  return (
    <Icon
      src={icons.defaultMode}
      className="svg-primary h-6 w-6 sm:h-5 sm:w-5"
      aria-hidden
    />
  );
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
  const handleClose = useCallback(() => setOpen(false), []);

  useClickOutside(ref, handleClose, open);

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
          className="bg-surface-panel border-border absolute top-full right-0 z-50 mt-1 min-w-32 rounded-lg border py-1 shadow-lg"
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
              className="text-on-surface hover:bg-secondary/50 focus-visible:ring-primary w-full cursor-pointer rounded px-4 py-2 text-left text-sm focus:outline-none focus-visible:ring-1"
            >
              {LABELS[t]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
