import { FC } from 'react';
import IntroView from '../components/core/IntroView';
import MahjongHome from '../components/sections/Mahjong';
import HammerSpoon from '../components/sections/HammerSpoon';
// import UnderDevelopment from '../components/misc/UnderDevelopment';

const sectionsComponents = [
  MahjongHome,
  HammerSpoon,
];

// !--> Check out how to make the front page look good on large and little screen. Just make sure things line up well

const Home: FC = () => {
  return (
    <>
      <IntroView />
      <main>
        {/* <div>
          <h1 className="font-dosis font-bold text-center mb-32 text-3xl lg:text-4xl xl:text-5xl">What's Going On</h1>
        </div> */}
        {/* {
          sectionsComponents.map((SectionComponent, index) => <SectionComponent key={index} />)
        } */}
      </main>
    </>
  );
}

export default Home;
