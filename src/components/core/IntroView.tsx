import { FC, useState } from 'react';
import homePageProfileImage from '../../photos/homepage_profile.jpg';
import clsx from 'clsx';

const h1Text = 'Irfan Filipovic';
const h2Text = 'Software Engineer';
const h3Text = 'Looking to expand my knowledge and indulge in my hobbies.';

const imgAlt = 'A photo of Irfan Filipovic smiling in front of some trees and nature';

/*
  * The IntroView component is the first thing that a user sees when they visit the website on the home page.
  * It is a simple component that displays a profile image of me and some text.
  */

const IntroView: FC = () => {
  const [alreadyLoaded, setAlreadyLoaded] = useState(false);

  return (
    <header className="relative mx-4vw flex items-center flex-col lg:flex-row justify-evenly lg:justify-center pt-24 pb-12 lg:pb-0 lg:mb-64">
      <div className='flex flex-col justify-center animate-slide-in-left pb-12 lg:pb-0 lg:w-1/2'>
        <div className="font-mulish">
          <h1 className="font-dosis font-bold text-center pb-1 text-5xl xl:text-6xl 2xl:text-7xl">{h1Text}</h1>
          <h2 className="font-libre font-semibold pb-8 text-3xl lg:text-4xl xl:text-5xl text-center text-secondary">{h2Text}</h2>
          <h3 className="text-center text-base lg:text-l xl:text-xl">{h3Text}</h3>
        </div>
      </div>
      <div className={clsx("lg:w-1/2 flex justify-center", { "animate-slide-in-right": !alreadyLoaded })}>
        <img
          className='introview-image rounded-full md:rounded-xl lg:rounded-lg'
          src={homePageProfileImage.src}
          alt={imgAlt}
          srcSet={homePageProfileImage.srcSet}
          sizes="(max-width: 300px) 100vw, (max-width: 705px) 50vw, (max-width: 1110px) 40vw, 30vw"
        />
      </div>
    </header>
  );
}

export default IntroView;
