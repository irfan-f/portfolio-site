import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import IntroText from '../components/IntroText';
import SocialLinks from '../components/SocialLinks';

const SITE_URL = 'https://irfan-f.com';

const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>Irfan Filipovic</title>
        <meta
          name="description"
          content="Site for Irfan Filipovic, detailing software development projects and various other interests."
        />
        <meta property="og:title" content="Irfan Filipovic" />
        <meta
          property="og:description"
          content="Site for Irfan Filipovic, detailing software development projects and various other interests."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${SITE_URL}/images/irfan.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Irfan Filipovic" />
        <meta
          name="twitter:description"
          content="Site for Irfan Filipovic, detailing software development projects and various other interests."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/irfan.png`} />
      </Helmet>
      <div className="px-4vw flex min-h-0 flex-1 flex-col items-center justify-start gap-2 pt-2 pb-4 sm:gap-4 sm:pt-4 md:flex-row md:gap-6 md:pt-6">
        <div className="flex w-full max-w-7xl flex-col items-center gap-2 sm:gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex flex-1 flex-col items-center justify-center md:min-h-0 md:self-stretch">
            <IntroText />
          </div>
          <div className="flex flex-shrink-0 flex-col items-center gap-2 sm:gap-4 md:justify-center">
            <div className="aspect-[3/4] w-full max-w-[20rem] overflow-hidden rounded-xl shadow-md md:max-w-[22rem]">
              <picture>
                <source type="image/avif" srcSet="/images/irfan.avif" />
                <source type="image/webp" srcSet="/images/irfan.webp" />
                <img
                  className="h-full w-full object-cover object-center antialiased"
                  src="/images/irfan.png"
                  sizes="(max-width: 768px) 85vw, 42vw"
                  alt="Irfan Filipović"
                  width={3}
                  height={4}
                  fetchPriority="high"
                  loading="eager"
                />
              </picture>
            </div>
            <SocialLinks className="w-28" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
