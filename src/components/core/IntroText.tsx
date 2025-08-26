import { FC } from 'react';
import TypeWriter from '../interactive/TypeWriter';

const h1Text = 'Irfan Filipović';
const h2Text = 'eer-FAHN';
const h3Text = '';

/*
  * The IntroView component is the first thing that a user sees when they visit the website on the home page.
  * It is a simple component that displays a profile image of me and some text.
*/

const IntroText: FC = () => {
  return (
      <div className='m-auto flex flex-col px-4 gap-y-4 w-fit'>
        <h1 className="font-dosis pb-0 text-3xl md:text-6xl text-primary dark:text-secondary pl-1">Hi I'm,</h1>
        <h1 className="font-bold pb-1 text-5xl md:text-9xl m-auto">{h1Text}</h1>
        <TypeWriter className='font-bold font-mulish text-primary dark:text-secondary text-3xl md:text-6xl m-auto mt-4' text={h2Text} />
        <h3 className="text-center text-basic lg:text-l xl:text-xl align-middle">{h3Text}</h3>
      </div>
  );
}

export default IntroText;
