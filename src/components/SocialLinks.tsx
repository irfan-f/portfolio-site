import { FC, HTMLAttributes } from 'react';
import gitHubIconDark from '../icons/thirdParty/GitHub_Invertocat_Dark.png';
import gitHubIconLight from '../icons/thirdParty/GitHub_Invertocat_Light.png';
import linkedInDark from '../icons/thirdParty/InBug-Black.png';
import linkedInLight from '../icons/thirdParty/InBug-White.png';

const SocialLinks: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <div
      className={`m-auto flex h-6 min-w-16 flex-row items-center justify-center gap-10 ${className}`}
    >
      <a
        className="relative h-8 w-8 sm:h-9 sm:w-9"
        href="https://github.com/irfan-f"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <img
          className="absolute left-0 top-0 h-full w-full object-contain opacity-0 dark:opacity-100"
          src={gitHubIconLight}
          sizes="36px"
          loading="lazy"
          alt=""
        />
        <img
          className="absolute left-0 top-0 h-full w-full object-contain opacity-100 dark:opacity-0"
          src={gitHubIconDark}
          sizes="36px"
          loading="lazy"
          alt=""
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
        <img
          className="absolute left-0 top-0 h-full w-full object-contain opacity-0 dark:opacity-100"
          src={linkedInLight}
          sizes="36px"
          loading="lazy"
          alt=""
        />
        <img
          className="absolute left-0 top-0 h-full w-full object-contain opacity-100 dark:opacity-0"
          src={linkedInDark}
          sizes="36px"
          loading="lazy"
          alt=""
        />
      </a>
    </div>
  );
};

export default SocialLinks;
