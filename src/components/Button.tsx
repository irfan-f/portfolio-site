import { FC, lazy } from 'react';
import clsx from 'clsx';
const ForwardArrowComponent = lazy(
  () => import(`../svg/svgs/forwardArrow.svg`),
);

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  message: string;
}

const Button: FC<ButtonProps> = ({ className, message, onClick }) => {
  return (
    <button
      className={clsx(
        'button lg:text-md flex w-fit items-center justify-between rounded-md border-2 border-accent p-1 pr-0 text-center font-libre text-sm',
        className,
      )}
      onClick={onClick}
    >
      <div className="flex flex-grow justify-center">{message}</div>
      <ForwardArrowComponent className="svg-primary relative right-0 z-50 h-4 w-8 fill-accent hover:stroke-accent" />
    </button>
  );
};

export default Button;
