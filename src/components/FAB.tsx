import React, { useState, lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { DraggableBounds } from 'react-draggable';
const Draggable = lazy(() => import('react-draggable'));
import { GiHamburgerMenu } from 'react-icons/gi';
const Tooltip = lazy(() => import('./Tooltip'));

type FABOptions = {
  axis?: 'x' | 'y' | 'both' | 'none';
  bounds?: string | false | DraggableBounds | undefined;
  defaultPosition?: { x: number, y: number };
  positionOffset?: { x: number, y: number };
  scale?: number;
  disabled?: boolean;
}

type FABProps = {
  onClick: () => void;
  children: React.ReactNode;
  options?: FABOptions;
}

const FAB = ({ onClick, children, options }: FABProps) => {
  const canDrag = options?.disabled ? false : true;

  // Logic to handle dragging state which is used to prevent click event when stopping a drag
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

  const fabRoot = document.getElementById('fab-root');

  // TODO Update icon below to match the desired icon and size with correct hitbox
  return fabRoot ? createPortal(
    <Suspense fallback={<></>}>
      <Draggable
        axis={options?.axis}
        bounds={options?.bounds}
        defaultPosition={options?.defaultPosition}
        positionOffset={options?.positionOffset}
        scale={options?.scale}
        disabled={options?.disabled}
        onDrag={handleOnDrag}
        onStop={handleOnStop}
        nodeRef={nodeRef}
      >
        <button
          ref={nodeRef}
          onClick={handleClick}
          className="fixed bottom-4 right-4 bg-accent text-inverse p-2 rounded-full shadow-lg hover:bg-accent-tint active:bg-accent-tint focus:outline-none"
        >
          <Tooltip tooltipText="Drag side to side" draggable={canDrag}>
            { /* Icon to display in the FAB TODO Tweak the size and hitbox */ }
            <GiHamburgerMenu className='cursor-e-w-resize' />
          </Tooltip>
          {children}
        </button>
      </Draggable>
    </Suspense>, fabRoot)
    : (<></>
  );
};

export default FAB;