import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { animate, useReducedMotion } from 'motion/react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  /** When false, typing is paused and the display is cleared. */
  active?: boolean;
}

const TypeWriter: FC<TypeWriterProps & HTMLAttributes<HTMLDivElement>> = ({
  className,
  text,
  delay = 240,
  active = true,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(0);
  const caretRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!active) {
      setVisibleCount(0);
      return;
    }

    if (reduceMotion === true) {
      setVisibleCount(text.length);
      return;
    }

    if (text.length === 0) {
      setVisibleCount(0);
      return;
    }

    setVisibleCount(0);
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const schedule = (nextCount: number) => {
      if (cancelled || nextCount > text.length) return;
      timeoutId = window.setTimeout(() => {
        setVisibleCount(nextCount);
        schedule(nextCount + 1);
      }, delay);
    };

    schedule(1);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [active, delay, reduceMotion, text]);

  useEffect(() => {
    const el = caretRef.current;
    if (!el || reduceMotion === true) return;

    el.style.opacity = '1';
    const controls = animate(
      el,
      { opacity: [1, 0, 1] },
      {
        repeat: Infinity,
        duration: 0.85,
        ease: 'easeInOut',
      },
    );

    return () => {
      controls.stop();
    };
  }, [reduceMotion]);

  const visibleSlice = text
    .slice(0, visibleCount)
    .replace(/ /g, '\u00A0');

  return (
    <div className={`${className} relative inline-grid justify-items-start`} {...rest}>
      <p className="sr-only">{text}</p>
      <span className="invisible col-start-1 row-start-1 whitespace-pre" aria-hidden>
        {text}
      </span>
      <span className="col-start-1 row-start-1 inline-flex items-center gap-0.5 self-start whitespace-pre" aria-hidden>
        <span>{visibleSlice}</span>
        <span
          ref={caretRef}
          className="inline-block h-[1cap] w-[0.09em] max-w-[3px] shrink-0 self-center rounded-[1px] bg-current"
        />
      </span>
    </div>
  );
};

export default TypeWriter;
