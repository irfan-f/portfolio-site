import { FC } from 'react';
import TypeWriter from './TypeWriter';

const h1Text = 'Irfan Filipović';
const h2Text = 'eer-FAHN';
const h3Text = '';

/*
 * The IntroView component is the first thing that a user sees when they visit the website on the home page.
 * It is a simple component that displays a profile image of me and some text.
 */

const IntroText: FC = () => {
  return (
    <div className="m-auto flex w-fit flex-col gap-y-4 px-4">
      <h1 className="pb-0 pl-1 font-dosis text-3xl text-primary dark:text-secondary md:text-6xl">
        Hi I'm,
      </h1>
      <h1 className="m-auto pb-1 text-5xl font-bold md:text-9xl">{h1Text}</h1>
      <TypeWriter
        className="m-auto font-mulish text-3xl font-bold text-primary dark:text-secondary md:mt-4 md:text-6xl"
        text={h2Text}
      />
      <h3 className="lg:text-l text-center align-middle text-basic xl:text-xl">
        {h3Text}
      </h3>
    </div>
  );
};

export default IntroText;
