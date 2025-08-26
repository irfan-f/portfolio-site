// import { FC, HTMLAttributes, useRef, RefObject } from 'react';
// import useIsVisible from '../../helpers/useIsVisible';

// // export type SectionProps = {
// //   slideDirection: 'left' | 'right' | 'top' | 'bottom' | 'none';
// // };

// const slideInAndMakeVisible = (side: 'left' | 'right' | 'top' | 'bottom') => {
//   return (entry: IntersectionObserverEntry, reference: RefObject<HTMLElement | null>) => {
//     if (entry.isIntersecting) {
//       reference.current?.classList.add(`animate-slide-in-${side}`);
//       reference.current?.classList.remove('invisible');
//     }
//   };
// }

// // ! Deprecated Component - Keeping in order to reference slide animation implementation

// const Section: FC<SectionProps & HTMLAttributes<HTMLElement>> = ({ children, className, slideDirection }) => {
//   let sectionClassName = className + ' ' + 'mt-12 mx-4vw lg:mx-10vw';
//   const ref = useRef<HTMLElement | null>(null);

//   if (slideDirection !== 'none') {
//     sectionClassName += ' invisible';
//     useIsVisible({ references: [ref], callback: slideInAndMakeVisible(slideDirection) });
//   }

//   return (
//     <section ref={ref} className={sectionClassName}>
//       {children}
//     </section>
//   );
// }

// export default Section;

export {};