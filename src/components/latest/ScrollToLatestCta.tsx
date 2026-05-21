import { FC, useCallback } from 'react';
import { useReducedMotion } from 'motion/react';
import {
  animateMainContentScrollTo,
  MAIN_CONTENT_ID,
  notifyMainContentScrollSync,
} from '../../utils/homeScrollRestore';

const LABEL = 'Catch up on the latest things';
export const LATEST_SECTION_ID = 'latest-things';

type ScrollToLatestCtaProps = {
  /** Scroll target; defaults to home section id. */
  targetId?: string;
  /** Beacon only (no caption); used for the portaled thumb-zone pin. */
  compact?: boolean;
  className?: string;
};

function scrollToTarget(targetId: string, reduceMotion: boolean) {
  const main = document.getElementById(MAIN_CONTENT_ID);
  const target = document.getElementById(targetId);
  if (!main || !target) return;

  const top =
    main.scrollTop +
    target.getBoundingClientRect().top -
    main.getBoundingClientRect().top;

  if (reduceMotion) {
    main.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
    notifyMainContentScrollSync();
    return;
  }

  animateMainContentScrollTo(Math.max(0, top));
}

const ChevronDown: FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

const ScrollToLatestCta: FC<ScrollToLatestCtaProps> = ({
  targetId = LATEST_SECTION_ID,
  compact = false,
  className = '',
}) => {
  const reduceMotion = useReducedMotion() === true;
  const onClick = useCallback(
    () => scrollToTarget(targetId, reduceMotion),
    [targetId, reduceMotion],
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className={`scroll-cta scroll-cta--beacon group ${compact ? 'scroll-cta--compact' : ''} ${className}`.trim()}
      aria-label={LABEL}
      title={LABEL}
    >
      <span className="scroll-cta__beacon-ring" aria-hidden />
      <span className="scroll-cta__beacon-core">
        <ChevronDown className="scroll-cta__chevron" />
      </span>
      <span className="scroll-cta__beacon-label font-mulish">{LABEL}</span>
    </button>
  );
};

export default ScrollToLatestCta;
