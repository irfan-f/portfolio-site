import { FC } from 'react';
import IntroText from '../components/IntroText';
import irfanHomeView from '../photos/irfan.png';
import SocialLinks from '../components/SocialLinks';

const Home: FC = () => {
  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-start gap-2 px-4vw pt-2 pb-4 sm:gap-4 sm:pt-4 md:flex-row md:gap-6 md:pt-6">
      <div className="flex w-full max-w-7xl flex-col items-center gap-2 sm:gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex flex-1 flex-col items-center justify-center md:min-h-0 md:self-stretch">
          <IntroText />
        </div>
        <div className="flex flex-shrink-0 flex-col items-center gap-2 sm:gap-4 md:justify-center">
          <img
            className="max-h-[42svh] w-auto max-w-full rounded-xl shadow-md antialiased sm:max-h-[48svh] md:max-h-[55vh]"
            src={irfanHomeView}
            sizes="(max-width: 768px) 85vw, 42vw"
            alt="Irfan Filipović"
            loading="lazy"
          />
          <SocialLinks className="w-28" />
        </div>
      </div>
    </div>
  );
};

export default Home;
