import { FC, HtmlHTMLAttributes, lazy, Suspense } from 'react';

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

  return (
    <div className="">
      <div className="outline-circle">
        <svg
          className="absolute top-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          stroke="currentColor"
        >
          <circle
            className="svg-secondary base-outline-circle"
            cx={`${width / 2}`}
            cy={`${height / 2}`}
            r={`${(width - 2) / 2}`}
            strokeWidth="1"
          />
          <circle
            className="outline-circle"
            cx={`${width / 2}`}
            cy={`${height / 2}`}
            r={`${(width - 2) / 2}`}
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="p-2">
        <Suspense fallback={<div />}>
          <SvgComponent className="fill-none svg-primary z-50 hover:stroke-accent" />
        </Suspense>
      </div>
    </div>
  );
};

export default OutlineCircle;
