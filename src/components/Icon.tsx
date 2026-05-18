import { getIconMarkup } from '../iconCache';

interface IconProps {
  /** Path under `public/icons/`, e.g. `/icons/sun.svg`. */
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
    dangerouslySetInnerHTML={{ __html: getIconMarkup(src) }}
  />
);

export default Icon;
