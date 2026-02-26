import { FC } from 'react';
import ForwardArrowComponent from '../svg/svgs/forwardArrow.svg?react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  message: string;
}

const Button: FC<ButtonProps> = ({ className, message, onClick }) => {
  return (
    <button
      className={`button lg:text-base flex w-fit items-center justify-between rounded-md border-2 border-accent p-1 pr-0 text-center font-libre text-sm ${className ?? ''}`}
      onClick={onClick}
    >
      <div className="flex flex-grow justify-center">{message}</div>
      <ForwardArrowComponent className="svg-primary relative right-0 z-50 h-4 w-8 fill-accent hover:stroke-accent" />
    </button>
  );
};

export default Button;
