import React, { useState, useEffect, lazy, Suspense } from 'react';
import { DraggableBounds } from 'react-draggable';
const Draggable = lazy(() => import('react-draggable'));
const Tooltip = lazy(() => import('../../detail/Tooltip'));

type ScrollToTopOptions = {
  axis?: 'x' | 'y' | 'both' | 'none';
  bounds?: string | false | DraggableBounds | undefined;
  disabled?: boolean;
}

const ScrollToTop = () => {
  // State to track if the page is at the top
  const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);
  const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const options: ScrollToTopOptions = {
    axis: 'x',
    bounds: 'parent',
    disabled: false,
  }

  // Effect to check if the page can scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Logic to handle dragging state which is used to prevent click event when stopping a drag
  const canDrag = options?.disabled ? false : true;
  const [isDragging, setIsDragging] = useState(false);
  // Handlers for dragging events
  const handleOnDrag = () => {
    setIsDragging(true);
  }
  const handleOnStop = () => {
    setTimeout(() => setIsDragging(false), 200);
  }

  // Handler for click event, only triggers if not dragging
  const handleClick = () => {
    if (!isDragging) {
      onClick();
    }
  }

  const nodeRef = React.useRef(null);

  if (isAtTop) {
    return null;
  }

  return (
    <Suspense fallback={<></>}>
      <Draggable
        bounds={'parent'}
        onDrag={handleOnDrag}
        onStop={handleOnStop}
        nodeRef={nodeRef}
      >
        <button
          ref={nodeRef}
          onClick={handleClick}
          className="scroll-to-top fixed bottom-4 right-4 bg-accent text-inverse px-1 py-2 rounded-lg shadow-lg"
          id="ScrollToTop"
        >
          <Tooltip tooltipText="Scroll to top" draggable={canDrag}>
            <svg className='size-4 md:size-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 10l7-7m0 0l7 7m-7-7v18' />
            </svg>
          </Tooltip>
        </button>
      </Draggable>
    </Suspense>
  );
};

export default ScrollToTop;