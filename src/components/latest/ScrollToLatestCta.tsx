import { FC, useCallback } from 'react';

const LABEL = 'Catch up on the latest things';
export const LATEST_SECTION_ID = 'latest-things';

type ScrollToLatestCtaProps = {
  /** Scroll target; defaults to home section id. */
  targetId?: string;
  className?: string;
};

function scrollToTarget(targetId: string) {
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  className = '',
}) => {
  const onClick = useCallback(() => scrollToTarget(targetId), [targetId]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`scroll-cta scroll-cta--beacon group ${className}`.trim()}
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
