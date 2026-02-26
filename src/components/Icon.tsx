interface IconProps {
  src: string;
  className?: string;
  'aria-hidden'?: boolean;
}
const Icon = ({
  src,
  className,
  'aria-hidden': ariaHidden = true,
}: IconProps) => (
  <span
    className={className}
    aria-hidden={ariaHidden}
    dangerouslySetInnerHTML={{ __html: src }}
  />
);

export default Icon;
