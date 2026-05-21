import { FC, useLayoutEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useLocation, useOutlet } from 'react-router-dom';
import { routePagePresenceMotion } from '../motion/entranceVariants';
import { prepareHomeMainScroll, scrollMainContentToTop } from '../utils/homeScrollRestore';

const PageTransition: FC = () => {
  const location = useLocation();
  const outlet = useOutlet();
  const reducedMotionPreference = useReducedMotion();
  const reduceMotion = reducedMotionPreference === true;
  const pageMotion = routePagePresenceMotion(reduceMotion);

  useLayoutEffect(() => {
    const path = location.pathname;
    const isHome = path === '/' || path === '';
    const isAboutHash = path === '/me' && location.hash.length > 0;

    if (isHome) {
      prepareHomeMainScroll();
      return;
    }

    if (!isAboutHash) {
      scrollMainContentToTop();
    }
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        className="layout-shift-smooth relative flex min-h-0 flex-1 flex-col"
        {...pageMotion}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
