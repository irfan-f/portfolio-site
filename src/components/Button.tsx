import { FC } from 'react';
import Icon from './Icon';
import { icons } from '../icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  message: string;
}

const Button: FC<ButtonProps> = ({
  className,
  message,
  onClick,
  type = 'button',
  ...rest
}) => (
  <button
    type={type}
    className={`button border-accent font-libre flex w-fit items-center justify-between rounded-md border-2 p-1 pr-0 text-center text-sm lg:text-base ${className ?? ''}`}
    onClick={onClick}
    {...rest}
  >
    <div className="flex flex-grow justify-center">{message}</div>
    <Icon
      src={icons.forwardArrow}
      className="svg-primary fill-accent hover:stroke-accent relative right-0 z-50 h-4 w-8"
    />
  </button>
);

export default Button;
