import { FC, HTMLAttributes } from 'react';
import gitHubIconDark from '../icons/thirdParty/GitHub_Invertocat_Dark.png';
import gitHubIconLight from '../icons/thirdParty/GitHub_Invertocat_Light.png';
import linkedInDark from '../icons/thirdParty/InBug-Black.png';
import linkedInLight from '../icons/thirdParty/InBug-White.png';

const SocialLinks: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <div
      className={`m-auto flex h-6 min-w-28 flex-row justify-around ${className}`}
    >
      {/* GitHub Logo + Link */}
      <a
        className="relative h-12 w-12"
        href="https://github.com/irfan-f"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img
          className="absolute left-0 top-0 opacity-0 dark:opacity-100"
          src={gitHubIconLight.src}
          srcSet={gitHubIconLight.srcSet}
          sizes="48px"
          loading='lazy'
        />
        <img
          className="absolute left-0 top-0 opacity-100 dark:opacity-0"
          src={gitHubIconDark.src}
          srcSet={gitHubIconDark.srcSet}
          sizes="48px"
          loading='lazy'
        />
      </a>
      {/* LinkedIn Logo + Link */}
      <a
        className="relative h-12 w-12"
        href="https://www.linkedin.com/in/irfan-filipovic/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img
          className="absolute right-0 top-0 opacity-0 dark:opacity-100"
          src={linkedInLight.src}
          srcSet={linkedInLight.srcSet}
          sizes="48px"
          loading='lazy'
        />
        <img
          className="absolute right-0 top-0 opacity-100 dark:opacity-0"
          src={linkedInDark.src}
          srcSet={linkedInDark.srcSet}
          sizes="48px"
          loading='lazy'
        />
      </a>
    </div>
  );
};

export default SocialLinks;
