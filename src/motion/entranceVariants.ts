import type { HTMLMotionProps, Transition, Variants } from 'motion/react';

const easeOutSoft = [0.22, 1, 0.36, 1] as const;

const routePageDuration = 0.28;
const tabSwapDuration = 0.22;
const layoutResizeDuration = 0.34;

/** `useReducedMotion() === true` — skip spatial motion and duration. */
export function listStaggerVariants(reduceMotion: boolean): {
  container: Variants;
  item: Variants;
} {
  if (reduceMotion) {
    return {
      container: {
        hidden: {},
        show: {
          transition: { staggerChildren: 0, delayChildren: 0 },
        },
      },
      item: {
        hidden: { opacity: 1, y: 0 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0 },
        },
      },
    };
  }

  return {
    container: {
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.07,
          delayChildren: 0.04,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 10 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.32, ease: easeOutSoft },
      },
    },
  };
}

/**
 * Staggered list entrance without `y` — safe on the same node as `layout`
 * (layout projection uses transform; variant `y` would fight it).
 */
export function listStaggerOpacityOnlyForLayoutCells(reduceMotion: boolean): {
  container: Variants;
  item: Variants;
} {
  const { container } = listStaggerVariants(reduceMotion);
  if (reduceMotion) {
    return {
      container,
      item: {
        hidden: { opacity: 1 },
        show: { opacity: 1, transition: { duration: 0 } },
      },
    };
  }
  return {
    container,
    item: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          opacity: { duration: 0.28, ease: easeOutSoft },
        },
      },
    },
  };
}

/** Layout tween when project cards reflow in the CSS grid (viewport / breakpoint). */
export function projectGridLayoutTransition(reduceMotion: boolean): Transition {
  if (reduceMotion) {
    return { layout: { duration: 0 } };
  }
  return {
    layout: { type: 'spring', stiffness: 380, damping: 34, mass: 0.9 },
  };
}

/** Layout-only tween when `layout` is used (container resize, `popLayout` handoff). */
export function layoutResizeTransition(reduceMotion: boolean): Transition {
  if (reduceMotion) {
    return { layout: { duration: 0 } };
  }
  return {
    layout: { duration: layoutResizeDuration, ease: easeOutSoft },
  };
}

/** Enter / exit for full-page route swaps (`AnimatePresence` + `useOutlet`, typically `mode="wait"`). */
export function routePagePresenceMotion(
  reduceMotion: boolean,
): Pick<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'exit' | 'transition'> {
  if (reduceMotion) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 1, y: 0 },
      transition: { duration: 0, ...layoutResizeTransition(true) },
    };
  }
  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: {
      duration: routePageDuration,
      ease: easeOutSoft,
      ...layoutResizeTransition(false),
    },
  };
}

/** In-page tab / panel content swaps (e.g. coursework topic) with `layout` + `popLayout`. */
export function tabPanelPresenceMotion(
  reduceMotion: boolean,
): Pick<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'exit' | 'transition'> {
  if (reduceMotion) {
    return {
      initial: { opacity: 1, x: 0 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 1, x: 0 },
      transition: { duration: 0, ...layoutResizeTransition(true) },
    };
  }
  return {
    initial: { opacity: 0, x: 16 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -16 },
    transition: {
      opacity: { duration: tabSwapDuration, ease: easeOutSoft },
      x: { duration: tabSwapDuration, ease: easeOutSoft },
      ...layoutResizeTransition(false),
    },
  };
}

/**
 * Direction-aware tab content swap with staggered children — heading lands first,
 * bullets cascade in. `direction === 1` slides in from the right, `-1` from the left.
 */
export function courseContentMotion(
  reduceMotion: boolean,
  direction: 1 | -1,
): { container: Variants; item: Variants } {
  if (reduceMotion) {
    return {
      container: {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
      },
      item: {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
      },
    };
  }
  const slide = direction * 24;
  return {
    container: {
      initial: { opacity: 0, x: slide },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          opacity: { duration: 0.24, ease: easeOutSoft },
          x: { duration: 0.32, ease: easeOutSoft },
          staggerChildren: 0.035,
          delayChildren: 0.04,
        },
      },
      exit: {
        opacity: 0,
        x: -slide,
        transition: {
          opacity: { duration: 0.16, ease: easeOutSoft },
          x: { duration: 0.18, ease: easeOutSoft },
        },
      },
    },
    item: {
      initial: { opacity: 0, y: 8 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.28, ease: easeOutSoft },
      },
    },
  };
}

/** Spring used for the `layoutId` indicator that slides between active tab icons. */
export function tabIndicatorTransition(reduceMotion: boolean): Transition {
  return reduceMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 420, damping: 34, mass: 0.7 };
}

export function drawerBackdropTransition(reduceMotion: boolean): Transition {
  return reduceMotion ? { duration: 0 } : { duration: 0.22, ease: 'easeOut' };
}

export function drawerPanelTransition(reduceMotion: boolean): Transition {
  return reduceMotion
    ? { duration: 0 }
    : { type: 'tween', duration: 0.34, ease: easeOutSoft };
}

export const navBrandIconDuration = 1;

const navLinkDuration = 0.5;
const navLinkStagger = 0.06;

/** Nav grid — stagger children after fonts are ready. */
export function navShellVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: {},
      show: { transition: { staggerChildren: 0, delayChildren: 0 } },
    };
  }
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: navLinkStagger, delayChildren: 0.08 },
    },
  };
}

/** Logo slides inside `.nav-brand-reveal` clip (percentage = fully outside clip). */
export function navBrandIconVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: { x: 0 },
      show: { x: 0, transition: { duration: 0 } },
    };
  }
  return {
    hidden: { x: '-100%' },
    show: {
      x: 0,
      transition: { duration: navBrandIconDuration, ease: easeOutSoft },
    },
  };
}

export function navBrandTextVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1 },
      show: { opacity: 1, transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.4, ease: easeOutSoft, delay: 0.1 },
    },
  };
}

export function navPrimaryLinkVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      show: { opacity: 1, y: 0, transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0, y: -6 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: navLinkDuration, ease: easeOutSoft },
    },
  };
}

export function navActionsVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1 },
      show: { opacity: 1, transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.45, ease: easeOutSoft },
    },
  };
}

const navCollapseExpandDuration = 0.72;
const navCollapseOutDuration = 0.94;
const navCollapseStagger = 0.07;
const navCollapseOutStagger = 0.085;
const navChromeCollapseX = 22;

/** Layout shell for primary links + desktop actions (no cluster opacity — items animate individually). */
export function navChromeClusterVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return { expanded: {}, collapsed: {} };
  }
  return { expanded: {}, collapsed: {} };
}

/**
 * Per-item collapse toward the menu control. Index follows DOM order (links, then actions).
 * Expand: right → left; collapse: right → left (toward the menu).
 */
export function navChromeItemVariants(
  reduceMotion: boolean,
  index: number,
  total: number,
): Variants {
  if (reduceMotion) {
    return {
      expanded: { opacity: 1, x: 0 },
      collapsed: { opacity: 1, x: 0 },
    };
  }
  const expandDelay = 0.03 + (total - 1 - index) * navCollapseStagger;
  const collapseDelay = 0.04 + (total - 1 - index) * navCollapseOutStagger;

  return {
    expanded: {
      opacity: 1,
      x: 0,
      transition: {
        duration: navCollapseExpandDuration * 0.9,
        ease: easeOutSoft,
        delay: expandDelay,
      },
    },
    collapsed: {
      opacity: 0,
      x: navChromeCollapseX,
      transition: {
        duration: navCollapseOutDuration * 0.92,
        ease: easeOutSoft,
        delay: collapseDelay,
      },
    },
  };
}

function navMenuRevealDelay(reduceMotion: boolean, chromeItemCount: number): number {
  if (reduceMotion) return 0;
  return (
    0.04 + chromeItemCount * navCollapseOutStagger + navCollapseOutDuration * 0.28
  );
}

/** Menu control shell — stays visible while the glyph rotates, then hides on desktop. */
export function navMenuToggleVariants(
  reduceMotion: boolean,
  _chromeItemCount: number,
): Variants {
  if (reduceMotion) {
    return {
      expanded: { opacity: 1, pointerEvents: 'none' as const, visibility: 'hidden' as const },
      collapsed: { opacity: 1, pointerEvents: 'auto' as const, visibility: 'visible' as const },
    };
  }
  return {
    expanded: {
      opacity: 1,
      pointerEvents: 'none' as const,
      visibility: 'hidden' as const,
      transition: {
        visibility: { delay: navMenuIconMorphDuration, duration: 0 },
      },
    },
    collapsed: {
      opacity: 1,
      pointerEvents: 'auto' as const,
      visibility: 'visible' as const,
      transition: { visibility: { duration: 0 } },
    },
  };
}

const navMenuIconMorphDuration = 0.72;

/** Hamburger glyph — 90° rotate in/out in sync with chrome (no opacity pop-in). */
export function navMenuIconMorphVariants(
  reduceMotion: boolean,
  chromeItemCount: number,
): Variants {
  if (reduceMotion) {
    return {
      expanded: { scale: 1, rotate: 0, opacity: 1 },
      collapsed: { scale: 1, rotate: 0, opacity: 1 },
    };
  }
  const morphOutDelay = navMenuRevealDelay(reduceMotion, chromeItemCount);
  return {
    expanded: {
      rotate: 90,
      scale: 0.85,
      opacity: 1,
      transition: {
        rotate: { duration: navMenuIconMorphDuration, ease: easeOutSoft, delay: 0.03 },
        scale: { duration: navMenuIconMorphDuration, ease: easeOutSoft, delay: 0.03 },
      },
    },
    collapsed: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        rotate: { duration: navMenuIconMorphDuration, ease: easeOutSoft, delay: morphOutDelay },
        scale: { duration: navMenuIconMorphDuration, ease: easeOutSoft, delay: morphOutDelay },
      },
    },
  };
}
