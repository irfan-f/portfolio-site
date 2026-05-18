import {
  FC,
  HTMLAttributes,
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import type { Theme } from '../hooks/useTheme';
import { SITE_FEEDBACK_ARIA_LABEL, SITE_FEEDBACK_TITLE } from '../data/site';
import Icon from './Icon';
import { icons } from '../icons';
import { Nav } from '../types/nav';
import ThemeToggle from './ThemeToggle';
import {
  drawerBackdropTransition,
  drawerPanelTransition,
  navMenuIconMorphVariants,
} from '../motion/entranceVariants';

interface MenuToggleProps {
  /** Bottom edge of the header shell — menu panel opens directly beneath it. */
  anchorRef: RefObject<HTMLElement | null>;
  navs: Nav[];
  theme: Theme;
  setTheme: (t: Theme) => void;
  /** GitHub “new issue” template picker URL for this site (shown in the mobile drawer). */
  feedbackIssuesHref?: string;
  /** Header layout breakpoint — morphs the menu glyph in/out with nav collapse. */
  layoutChrome?: 'expanded' | 'collapsed';
  /** Primary links + desktop actions — syncs icon morph delay with chrome exit. */
  chromeItemCount?: number;
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `inline-flex w-fit max-w-full rounded-md px-4 py-2.5 text-base font-medium transition-colors ${isActive ? 'text-teal bg-secondary/30' : 'text-on-surface hover:bg-secondary/20'}`;

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function listFocusable(dialog: HTMLElement): HTMLElement[] {
  return Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (el) => {
      const style = window.getComputedStyle(el);
      return style.visibility !== 'hidden' && style.display !== 'none';
    },
  );
}

const MenuToggle: FC<MenuToggleProps & HTMLAttributes<HTMLElement>> = ({
  anchorRef,
  navs,
  theme,
  setTheme,
  feedbackIssuesHref,
  layoutChrome = 'collapsed',
  chromeItemCount = 2,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const reducedMotionPreference = useReducedMotion();
  const reduceMotion = reducedMotionPreference === true;
  const backdropTransition = drawerBackdropTransition(reduceMotion);
  const panelTransition = drawerPanelTransition(reduceMotion);
  const menuIconMorphVariants = navMenuIconMorphVariants(reduceMotion, chromeItemCount);

  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((o) => !o), []);

  const updateMenuTop = useCallback(() => {
    const el = anchorRef.current;
    if (!el) return;
    setMenuTop(el.getBoundingClientRect().bottom);
  }, [anchorRef]);

  useLayoutEffect(() => {
    updateMenuTop();
    const el = anchorRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => updateMenuTop());
    ro.observe(el);
    window.addEventListener('resize', updateMenuTop);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateMenuTop);
    };
  }, [anchorRef, updateMenuTop]);

  useEffect(() => {
    if (!isOpen) return;
    updateMenuTop();
  }, [isOpen, updateMenuTop]);

  useEffect(() => {
    if (!isOpen) return;
    const main = document.getElementById('main-content');
    const prev = main?.style.overflow;
    if (main) main.style.overflow = 'hidden';
    return () => {
      if (main) main.style.overflow = prev ?? '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const main = document.getElementById('main-content');
    if (!main) return;
    main.setAttribute('inert', '');
    return () => {
      main.removeAttribute('inert');
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  useLayoutEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const first = listFocusable(dialog)[0];
    first?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const list = listFocusable(dialog);
      if (list.length === 0) return;
      const first = list[0]!;
      const last = list[list.length - 1]!;
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (active === first || (active && !dialog.contains(active))) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last || (active && !dialog.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown, true);
    return () => document.removeEventListener('keydown', onKeyDown, true);
  }, [isOpen]);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      toggleButtonRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  const panelMaxHeight = `calc(100dvh - ${menuTop}px)`;

  return (
    <>
      <button
        ref={toggleButtonRef}
        data-drawer-target="menu-sidebar"
        data-drawer-toggle="menu-sidebar"
        aria-controls="menu-sidebar"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        title={isOpen ? 'Close menu' : 'Open menu'}
        type="button"
        className={`relative z-[110] h-11 w-11 shrink-0 cursor-pointer ${className ?? ''}`}
        onClick={toggle}
      >
        <span className="absolute inset-0 flex items-center justify-center p-2" aria-hidden>
          <motion.span
            className="absolute inset-2 flex origin-center items-center justify-center"
            aria-hidden
            initial={false}
            variants={menuIconMorphVariants}
            animate={
              isOpen ? { scale: 1, rotate: 0, opacity: 0 } : layoutChrome
            }
          >
            <Icon src={icons.menu} className="menu-hamburger h-full w-full" aria-hidden />
          </motion.span>
          <motion.span
            className="absolute inset-2 flex items-center justify-center"
            aria-hidden
            initial={false}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={backdropTransition}
          >
            <Icon src={icons.close} className="menu-hamburger h-full w-full" aria-hidden />
          </motion.span>
        </span>
        <div className="absolute inset-0 rounded-md hover:bg-black/6 dark:hover:bg-white/8" />
      </button>
      <motion.div
        id="menu-sidebar"
        style={{ top: menuTop }}
        aria-hidden={!isOpen}
        className={`fixed right-0 left-0 bottom-0 z-[95] bg-black/40 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={backdropTransition}
        onClick={close}
      >
        <div
          className="h-full min-h-0 overflow-hidden"
          style={{ maxHeight: panelMaxHeight }}
        >
          <motion.div
            className="border-border bg-surface-panel flex w-full max-w-none flex-col border-x border-b-2 border-t border-border/80 ring-1 ring-border"
            initial={false}
            animate={{ y: isOpen ? 0 : '-100%' }}
            transition={panelTransition}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              {...(!isOpen ? ({ inert: '' as const } satisfies { inert: '' }) : {})}
              onClick={(e) => e.stopPropagation()}
              className="flex h-full min-h-0 w-full flex-col"
            >
              <nav
                aria-label="Mobile"
                className="flex min-h-0 flex-1 flex-col items-center gap-1 overflow-y-auto px-4 py-3"
              >
                <NavLink className={navLinkClass} onClick={close} to="/">
                  Home
                </NavLink>
                {navs.map((stack) => (
                  <NavLink
                    key={stack.id}
                    to={stack.id}
                    className={navLinkClass}
                    onClick={close}
                  >
                    {stack.name}
                  </NavLink>
                ))}
              </nav>
              <div className="border-border flex shrink-0 flex-col items-center gap-2 border-t px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                <ThemeToggle theme={theme} setTheme={setTheme} alwaysShowLabel />
                {feedbackIssuesHref && (
                  <a
                    href={feedbackIssuesHref}
                    className="font-libre text-on-surface hover:bg-secondary/20 inline-flex w-fit max-w-full rounded-md px-4 py-2.5 text-center text-base font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={SITE_FEEDBACK_ARIA_LABEL}
                    title={SITE_FEEDBACK_TITLE}
                    onClick={close}
                  >
                    Report feedback
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default MenuToggle;
