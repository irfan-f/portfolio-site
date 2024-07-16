import { FC, lazy } from 'react';
import clsx from 'clsx';
const ForwardArrowComponent = lazy(() => import(`../svg/svgs/forwardArrow.svg`));


interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  message: string;
}

const Button: FC<ButtonProps> = ({ className, message, onClick }) => {
  return (
    <button
      className={clsx(
        "button border-accent text-sm w-fit rounded-md border-2 p-1 pr-0 text-center font-libre lg:text-md flex justify-between items-center",
        className,
      )}
      onClick={onClick}
    >
      <div className="flex-grow flex justify-center">
        {message}
      </div>
      <ForwardArrowComponent className="relative right-0 w-8 h-4 fill-accent svg-primary z-50 hover:stroke-accent" />
    </button>
  );
};

export default Button;