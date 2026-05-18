import { useReducedMotion } from 'motion/react';
import { useMemo } from 'react';
import { listStaggerVariants } from './entranceVariants';

export function useListEntranceVariants() {
  const reducedMotionPreference = useReducedMotion();
  const reduceMotion = reducedMotionPreference === true;

  return useMemo(() => listStaggerVariants(reduceMotion), [reduceMotion]);
}
