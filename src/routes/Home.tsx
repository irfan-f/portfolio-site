import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import ImageWithLoader from '../components/ImageWithLoader';
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
      <div className="px-4vw flex min-h-0 w-full max-w-7xl flex-1 flex-col items-center justify-start gap-2 pt-2 pb-4 sm:gap-4 sm:pt-4 md:mx-auto md:flex-row md:items-center md:justify-between md:gap-6 md:pt-6">
        <div className="flex flex-1 flex-col items-center justify-center md:min-h-0 md:self-stretch">
          <IntroText />
        </div>
        <div className="flex flex-shrink-0 flex-row items-center justify-between gap-2 sm:gap-4 md:justify-between">
          <div className="w-8 shrink-0 sm:w-9" aria-hidden />
          <div className="flex flex-1 justify-center">
            <div className="aspect-[3/4] w-full max-w-[20rem] overflow-hidden rounded-xl shadow-md md:max-w-[22rem]">
              <ImageWithLoader
                src="/images/irfan.png"
                alt="Irfan Filipović"
                webp="/images/irfan.webp"
                avif="/images/irfan.avif"
                containerClassName="h-full w-full"
                sizes="(max-width: 768px) 85vw, 42vw"
                fetchPriority="high"
                loading="eager"
                width={3}
                height={4}
              />
            </div>
          </div>
          <SocialLinks className="flex flex-col" />
        </div>
      </div>
    </>
  );
};

export default Home;
