import { FC, HTMLAttributes } from 'react';

const IMG = '/images';

function SocialIcon({
  lightSrc,
  darkSrc,
}: {
  lightSrc: string;
  darkSrc: string;
}) {
  const lightWebp = lightSrc.replace(/\.png$/, '.webp');
  const lightAvif = lightSrc.replace(/\.png$/, '.avif');
  const darkWebp = darkSrc.replace(/\.png$/, '.webp');
  const darkAvif = darkSrc.replace(/\.png$/, '.avif');
  return (
    <>
      <picture className="absolute top-0 left-0 h-full w-full object-contain opacity-0 dark:opacity-100">
        <source type="image/avif" srcSet={lightAvif} />
        <source type="image/webp" srcSet={lightWebp} />
        <img
          src={lightSrc}
          sizes="36px"
          loading="lazy"
          alt=""
          className="h-full w-full object-contain"
        />
      </picture>
      <picture className="absolute top-0 left-0 h-full w-full object-contain opacity-100 dark:opacity-0">
        <source type="image/avif" srcSet={darkAvif} />
        <source type="image/webp" srcSet={darkWebp} />
        <img
          src={darkSrc}
          sizes="36px"
          loading="lazy"
          alt=""
          className="h-full w-full object-contain"
        />
      </picture>
    </>
  );
}

const SocialLinks: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <div
      className={`m-auto flex h-6 min-w-16 flex-row items-center justify-center gap-10 ${className ?? ''}`}
    >
      <a
        className="relative h-8 w-8 sm:h-9 sm:w-9"
        href="https://github.com/irfan-f"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <SocialIcon
          lightSrc={`${IMG}/GitHub_Invertocat_Light.png`}
          darkSrc={`${IMG}/GitHub_Invertocat_Dark.png`}
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
        <SocialIcon
          lightSrc={`${IMG}/InBug-White.png`}
          darkSrc={`${IMG}/InBug-Black.png`}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
