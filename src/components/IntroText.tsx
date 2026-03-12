import { FC } from 'react';
import TypeWriter from './TypeWriter';

const h1Text = 'Irfan Filipović';
const h2Text = 'eer-FAHN';

const IntroText: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-1 text-center sm:gap-y-2 md:min-w-0 md:!items-center md:!text-center">
      <p className="font-dosis text-teal text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Hi I'm,
      </p>
      <h1 className="font-mulish text-on-surface text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        {h1Text}
      </h1>
      <TypeWriter
        className="font-mulish text-teal text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl"
        text={h2Text}
      />
    </div>
  );
};

export default IntroText;
