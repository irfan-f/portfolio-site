import { FC } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useLocation, useOutlet } from 'react-router-dom';
import { routePagePresenceMotion } from '../motion/entranceVariants';

const PageTransition: FC = () => {
  const location = useLocation();
  const outlet = useOutlet();
  const reducedMotionPreference = useReducedMotion();
  const reduceMotion = reducedMotionPreference === true;
  const pageMotion = routePagePresenceMotion(reduceMotion);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        layout
        className="layout-shift-smooth relative flex min-h-0 flex-1 flex-col"
        {...pageMotion}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
