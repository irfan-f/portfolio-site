import { FC, HTMLAttributes, Suspense, lazy } from "react";
import clsx from 'clsx';
const SvgComponent = lazy(() => import(`../../svg/svgs/menu.svg`));

const MenuToggle: FC<HTMLAttributes<HTMLElement>> = ({ className}) => {
  const handleClick = () => {
    // Handle opening and closing of the menu
  };

  return (
    <button className={clsx("cursor-pointer h-12 w-12", className)} onClick={handleClick}>
      <div className="p-2 relative top-0 right-0 z-9 h-12 w-12 flex justify-center items-center">
        <Suspense fallback={<div />}>
          <SvgComponent className="fill-accent svg-primary" />
        </Suspense>
      </div>
    </button>
  );
};

export default MenuToggle;
