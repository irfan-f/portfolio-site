import React, { useState, useRef, useEffect, ReactNode } from 'react';

type TooltipProps = {
  children: React.ReactElement | ReactNode;
  tooltipText: string;
  draggable?: boolean;
}

const parsePixelValue = (value: string): number => {
  return parseFloat(value.substring(0, value.length - 2));
}

const Tooltip = ({ children, tooltipText, draggable = false }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setShowTooltip(true);
    }, 500); // 500ms delay
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setShowTooltip(false);
  };

  useEffect(() => {
    if (showTooltip && tooltipRef.current) {
      const tooltip = tooltipRef.current;
      requestAnimationFrame(() => {
        const rect = tooltip.getBoundingClientRect();
        const leftValue = parsePixelValue(tooltip.style.left);
        if (rect.right > window.innerWidth) {
          const overflow = rect.right - window.innerWidth;
          tooltip.style.left = `${leftValue - overflow}px`;
        } else if (rect.left < 0) {
          tooltip.style.left = `${leftValue - rect.left}px`;
        } else if (leftValue !== 0 && (rect.left > 0 || rect.right < window.innerWidth)) {
          const shiftDirection = leftValue > 0 ? 'left' : 'right';
          let newLeftValue: number;
          switch (shiftDirection) {
            case 'left':
              newLeftValue = Math.max(leftValue - rect.left, 0);
              tooltip.style.left = `${newLeftValue}px`;
              break;
            case 'right':
              const space = rect.right - window.innerWidth;
              newLeftValue = Math.min(leftValue - space, 0);
              tooltip.style.left = `${newLeftValue}px`;
              break;

          }
        }
      });
    }

    if (draggable) {
      const handleMouseMove = (e: MouseEvent) => {
        if (showTooltip && tooltipRef.current) {
          const tooltip = tooltipRef.current;
          requestAnimationFrame(() => {
            const rect = tooltip.getBoundingClientRect();
            const leftValue = parsePixelValue(tooltip.style.left);
            if (rect.right > window.innerWidth) {
              const overflow = rect.right - window.innerWidth;
              tooltip.style.left = `${leftValue - overflow}px`;
            } else if (rect.left < 0) {
              tooltip.style.left = `${leftValue - rect.left}px`;
            } else if (leftValue !== 0 && (rect.left > 0 || rect.right < window.innerWidth)) {
              const shiftDirection = leftValue > 0 ? 'left' : 'right';
              let newLeftValue: number;
              switch (shiftDirection) {
                case 'left':
                  newLeftValue = Math.max(leftValue - rect.left, 0);
                  tooltip.style.left = `${newLeftValue}px`;
                  break;
                case 'right':
                  const space = rect.right - window.innerWidth;
                  newLeftValue = Math.min(leftValue - space, 0);
                  tooltip.style.left = `${newLeftValue}px`;
                  break;

              }
            }
          });
        }
      };

      document.addEventListener('mousemove', handleMouseMove);
      if (!showTooltip) {
        document.removeEventListener('mousemove', handleMouseMove);
      }
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [showTooltip]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div ref={tooltipRef} className="absolute bottom-full mb-2 w-fit whitespace-nowrap text-center p-2 bg-black text-white text-xs rounded" style={{ left: '0px', transform: 'translateX(-40.5%)' }}>
          {tooltipText}
          <div className="absolute w-0 h-0 border-black border-l-2 border-t-2 border-r-2 bottom-full left-1/2 transform -translate-x-1/2" style={{borderColor: 'transparent transparent black transparent'}}></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;