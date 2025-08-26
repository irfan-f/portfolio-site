import { FC } from 'react';
import IntroText from '../components/IntroText';
import irfanHomeView from '../photos/irfan.png';
import SocialLinks from '../components/SocialLinks';

const Home: FC = () => {
  return (
    <div className="md:pt-32">
      <IntroText />
      <div className="flex w-full flex-col items-center">
        <div className="w-fit">
          <img
            className="max-h-[40svh] rounded-xl antialiased md:max-h-[30vh]"
            src={irfanHomeView.src}
            srcSet={irfanHomeView.srcSet}
            sizes=""
            alt={`Image`}
          />
        </div>
        <SocialLinks className="w-32 pt-8" />
      </div>
    </div>
  );
};

export default Home;
