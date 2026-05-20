import { FC, HTMLAttributes } from 'react';
import { ThemeRasterPair } from './ThemeRasterPicture';
import { rasterImageSet } from '../utils/rasterImage';

const SocialLinks: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <div
      className={`flex w-fit flex-col items-center justify-center gap-10 ${className ?? ''}`}
    >
      <a
        className="relative h-8 w-8 sm:h-9 sm:w-9"
        href="https://github.com/irfan-f"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <ThemeRasterPair
          light={rasterImageSet('GitHub_Invertocat_Light')}
          dark={rasterImageSet('GitHub_Invertocat_Dark')}
        />
      </a>
      <a
        className="relative h-8 w-8 sm:h-9 sm:w-9"
        href="https://www.linkedin.com/in/irfan-filipovic/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <ThemeRasterPair
          light={rasterImageSet('InBug-White')}
          dark={rasterImageSet('InBug-Black')}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
