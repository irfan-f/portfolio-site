import { FC } from 'react';
import automationImage from '../../photos/automationFigure.png';
import Button from '../interactive/Button';

const imgAlt = 'A logo of a stick figure trying to spin a settings cog';

const HammerSpoon: FC = () => {
  return (
    <section
      className="relative w-full flex flex-col justify-between px-4 mb-16 lg:grid lg:grid-cols-3"
    >
      <div className="flex flex-col lg:col-start-1 lg:col-end-2">
        <img
          className="order-1 m-auto mt-6 rounded-xl lg:order-3"
          src={automationImage.src}
          alt={imgAlt}
          srcSet={automationImage.srcSet}
          sizes="(max-width: 300px) 70vw, (max-width: 705px) 30vw, (max-width: 1110px) 20vw, 20vw"
        />
      </div>
      <div className="m-auto flex flex-col lg:col-start-2 lg:col-end-4">
        <h2 className="pb-1 text-center font-mulish text-2xl font-bold text-accent lg:text-3xl xl:text-4xl">
          Hammerspoon Script
        </h2>
        <h3 className="text-secondary pb-1 text-center font-dosis text-xl font-bold lg:text-2xl xl:text-3xl">
          MacOS Automations
        </h3>
        <p className="text-md text-center align-bottom font-libre lg:text-lg">
          This project aims to create a comprehensive set of scripts for the
          MacOS application Hammerspoon. The motivation behind this project is
          the lack of customizability in the MacOS interface, and the desire to
          control the computer with more precision. The project is currently set
          aside for other projects, but the scripts are being used.
        </p>
        <Button
          className="left-0 right-0 m-auto mt-6"
          message="Check It Out"
        />
      </div>
    </section>
  );
};

export default HammerSpoon;
