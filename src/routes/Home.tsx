import { FC } from 'react';
import IntroText from '../components/core/IntroText';
import MahjongHome from '../components/sections/Mahjong';
import HammerSpoon from '../components/sections/HammerSpoon';
import irfanHomeView from '../photos/irfan.png';

const sectionsComponents = [
  MahjongHome,
  HammerSpoon,
];

const Home: FC = () => {
  return (
    <div className='pt-32'>
      <IntroText />
      <div className="w-full flex flex-col items-center">
        <div className="w-fit">
          <img
              className="antialiased max-h-[30vh] rounded-xl"
              src={irfanHomeView.src}
              srcSet={irfanHomeView.srcSet}
              sizes=""
              alt={`Image`}
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
