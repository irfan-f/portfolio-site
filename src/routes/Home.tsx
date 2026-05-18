import { FC } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import ImageWithLoader from '../components/ImageWithLoader';
import IntroText from '../components/IntroText';
import SocialLinks from '../components/SocialLinks';
import { useListEntranceVariants } from '../motion/useListEntranceVariants';
import { useFontsReady } from '../hooks/useFontsReady';
import { SITE_URL } from '../data/site';

const Home: FC = () => {
  const fontsReady = useFontsReady();
  const { container, item } = useListEntranceVariants();

  return (
    <>
      <Helmet>
        <title>Irfan Filipovic</title>
        <link rel="canonical" href={`${SITE_URL}/`} />
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
        <meta property="og:image" content={`${SITE_URL}/images/irfan.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Irfan Filipovic" />
        <meta
          name="twitter:description"
          content="Site for Irfan Filipovic, detailing software development projects and various other interests."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/irfan.webp`} />
      </Helmet>
      <motion.div
        layout
        className="layout-shift-smooth isolate px-4vw flex min-h-0 w-full max-w-7xl flex-1 flex-col items-center justify-start gap-3 pt-2 pb-6 sm:gap-4 sm:pt-4 md:mx-auto md:flex-row md:items-center md:justify-between md:gap-6 md:pt-6 [@media(min-width:768px)_and_(max-height:560px))]:md:items-start [@media(max-height:560px)]:gap-y-4"
        variants={container}
        initial="hidden"
        animate={fontsReady ? 'show' : 'hidden'}
      >
        <motion.div
          layout
          variants={item}
          className="layout-shift-smooth relative z-20 flex min-h-0 w-full flex-none shrink-0 flex-col items-center justify-center md:min-w-0 md:flex-1 md:shrink md:self-stretch"
        >
          <IntroText />
        </motion.div>
        <motion.div
          layout
          variants={item}
          className="layout-shift-smooth relative z-[1] mt-0 flex min-h-0 min-w-0 shrink flex-row items-center justify-between gap-2 sm:gap-4 md:mt-0 md:justify-between [@media(max-height:560px)]:mt-2"
        >
          <div className="w-8 shrink-0 sm:w-9" aria-hidden />
          <div className="flex min-h-0 min-w-0 flex-1 justify-center md:items-center">
            <div className="flex min-h-0 w-full items-center justify-center md:w-auto">
              <div className="layout-shift-smooth inline-block max-w-[min(100%,16rem)] overflow-hidden rounded-xl ring-1 ring-border sm:max-w-[min(100%,17.5rem)] md:max-w-[min(28rem,40vw)]">
                <ImageWithLoader
                  src="/images/irfan.webp"
                  alt="Irfan Filipović"
                  webp="/images/irfan.webp"
                  avif="/images/irfan.avif"
                  responsiveBase="/images/irfan"
                  responsiveWidths={[480, 720, 960, 1280]}
                  containerClassName="block leading-none"
                  imgClassName="hero-photo-img !h-auto !w-auto block max-w-full object-contain"
                  sizes="(max-width: 768px) min(90vw, 16rem), min(40vw, 28rem)"
                  objectFit="contain"
                  fetchPriority="high"
                  loading="eager"
                  width={720}
                  height={960}
                />
              </div>
            </div>
          </div>
          <SocialLinks className="flex flex-col" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
