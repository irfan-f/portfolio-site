import { FC } from 'react';
import automationImage from '../photos/automationFigure.png';

const imgAlt = 'A logo of a stick figure trying to spin a settings cog';

const HammerSpoon: FC = () => {
  return (
    <section className="mb-16 flex flex-col justify-between px-4 lg:grid lg:grid-cols-3">
      <div className="flex flex-col justify-between lg:col-start-2 lg:col-end-1">
        <img
          className="order-1 m-auto rounded-xl lg:order-3"
          src={automationImage.src}
          alt={imgAlt}
          srcSet={automationImage.srcSet}
          sizes="(max-width: 300px) 70vw, (max-width: 705px) 30vw, (max-width: 1110px) 20vw, 20vw"
        />
      </div>
      <div className="m-auto flex h-full flex-col justify-evenly text-center lg:col-start-2 lg:col-end-4 lg:text-left">
        <div>
          <h2 className="pb-1 font-mulish text-2xl font-bold text-accent lg:text-3xl xl:text-4xl">
            Hammerspoon Script
          </h2>
          <h3 className="pb-1 font-dosis text-xl font-bold text-primary dark:text-secondary lg:text-2xl xl:text-3xl">
            MacOS Automations
          </h3>
        </div>
        <p className="text-md pt-4 align-bottom font-libre lg:pt-0 lg:text-lg">
          This project aims to create a comprehensive set of scripts for the
          MacOS application Hammerspoon. I'm learning Lua as well as having a
          blast experimenting with UI elements and fun automations. Code is
          being cleaned and then will be pushed and linked on GitHub.
        </p>
      </div>
    </section>
  );
};

export default HammerSpoon;
