import { FC, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import type { Variants } from 'motion/react';
import { motion } from 'motion/react';
import ScrollToLatestCta from './ScrollToLatestCta';
import {
  MAIN_CONTENT_ID,
  MAIN_CONTENT_SCROLL_SYNC,
} from '../../utils/homeScrollRestore';

const BEACON_SIZE_PX = 44;
const PIN_GAP_PX = 12;
const PIN_BOTTOM_PX = 20;
const PIN_RIGHT_MIN_PX = 16;

type PinPlacement = { top: number; right: number };

type HomeHeroScrollCtaProps = {
  variants?: Variants;
};

function pinOverlapsImage(
  rootRect: DOMRect,
  imgRect: DOMRect,
  rightPx: number,
  bottomPx: number,
): boolean {
  const pinLeft = rootRect.right - rightPx - BEACON_SIZE_PX;
  const pinBottom = rootRect.bottom - bottomPx;
  const pinTop = pinBottom - BEACON_SIZE_PX;
  const margin = 8;

  return !(
    pinLeft > imgRect.right + margin ||
    pinLeft + BEACON_SIZE_PX < imgRect.left - margin ||
    pinTop > imgRect.bottom + margin ||
    pinBottom < imgRect.top - margin
  );
}

function pinPlacement(root: HTMLElement): PinPlacement {
  const rootRect = root.getBoundingClientRect();
  const right = Math.max(PIN_RIGHT_MIN_PX, rootRect.width * 0.04);
  let bottom = PIN_BOTTOM_PX;

  const img = document.querySelector<HTMLElement>('.home-hero .hero-photo-img');
  if (img) {
    const imgRect = img.getBoundingClientRect();
    if (pinOverlapsImage(rootRect, imgRect, right, bottom)) {
      bottom = Math.max(PIN_GAP_PX, rootRect.bottom - imgRect.bottom - PIN_GAP_PX);
    }
  }

  return {
    top: root.scrollTop + root.clientHeight - BEACON_SIZE_PX - bottom,
    right,
  };
}

/** In-flow hero slot; portaled beacon tracks the visible bottom-right until the slot arrives. */
const HomeHeroScrollCta: FC<HomeHeroScrollCtaProps> = ({ variants }) => {
  const location = useLocation();
  const slotRef = useRef<HTMLDivElement>(null);
  const [placement, setPlacement] = useState<PinPlacement | null>(null);
  const [mainEl, setMainEl] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const slot = slotRef.current;
    const root = document.getElementById(MAIN_CONTENT_ID);
    setMainEl(root);
    if (!slot || !root) return;

    const update = () => {
      const { bottom: rootBottom } = root.getBoundingClientRect();
      const { bottom: slotBottom } = slot.getBoundingClientRect();
      setPlacement(
        slotBottom > rootBottom + 0.5 ? pinPlacement(root) : null,
      );
    };

    const scheduleUpdate = () => {
      update();
      requestAnimationFrame(update);
    };

    scheduleUpdate();
    root.addEventListener('scroll', update, { passive: true });
    window.addEventListener(MAIN_CONTENT_SCROLL_SYNC, scheduleUpdate);
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(slot);
    observer.observe(root);
    const img = document.querySelector<HTMLElement>('.home-hero .hero-photo-img');
    if (img) observer.observe(img);
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      root.removeEventListener('scroll', update);
      window.removeEventListener(MAIN_CONTENT_SCROLL_SYNC, scheduleUpdate);
      observer.disconnect();
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [location.pathname]);

  const pinned = placement !== null;

  return (
    <>
      <motion.div
        ref={slotRef}
        variants={variants}
        className="home-hero__scroll-cta layout-shift-smooth flex w-full shrink-0 justify-center pt-1 pb-1 sm:pt-2"
        aria-hidden={pinned}
      >
        <ScrollToLatestCta
          className={pinned ? 'invisible pointer-events-none' : undefined}
        />
      </motion.div>

      {pinned &&
        mainEl &&
        createPortal(
          <div
            className="home-hero__scroll-cta-pin"
            style={{ top: placement.top, right: placement.right }}
          >
            <ScrollToLatestCta compact />
          </div>,
          mainEl,
        )}
    </>
  );
};

export default HomeHeroScrollCta;
