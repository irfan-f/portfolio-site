import { FC, HtmlHTMLAttributes, lazy, Suspense } from 'react';
import clsx from 'clsx';

type OutlineCircleProps = {
  fillColor?: string | 'transparent';
  strokeColor?: string;
  outlineColor?: string;
  width?: number | 24;
  height?: number | 24;
  svgName: string;
} & HtmlHTMLAttributes<HTMLElement>;

const OutlineCircle: FC<OutlineCircleProps> = ({ width = 24, height = 24, svgName, fillColor }) => {
  const SvgComponent = lazy(() => import(`../svgs/${svgName}.svg`));
  const divHeight = `h-${height / 4}`;
  const divWidth = `w-${height / 4}`;

  const svgHeight = 24;
  const svgWidth = 24;
  return (
    <>
      <div className={clsx("outline-circle absolute z-10", divHeight, divWidth)}>
        <svg
          className="relative top-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          stroke="currentColor"
        >
          <circle
            className="svg-secondary base-outline-circle"
            cx={`${svgWidth / 2}`}
            cy={`${svgHeight / 2}`}
            r={`${(svgWidth - 2) / 2}`}
            strokeWidth="1"
          />
        <circle
            className="outline-circle"
            cx={`${svgWidth / 2}`}
            cy={`${svgHeight / 2}`}
            r={`${(svgWidth - 2) / 2}`}
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className={clsx("svg-in-outline-circle p-2 relative top-0 right-0 z-9", divWidth, divHeight )}>
        <Suspense fallback={<div />}>
          <SvgComponent className="fill-none svg-primary z-50" />
        </Suspense>
      </div>
    </>
  );
};

export default OutlineCircle;
