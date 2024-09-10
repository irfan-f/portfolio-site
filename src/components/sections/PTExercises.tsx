import { FC } from 'react';
import mahjongImage from '../../photos/automationFigure.png';
import Button from '../interactive/Button';

const imgAlt = 'A logo of Mahjong with Friends';

const MahjongHome: FC = () => {
  return (
    <section
      className="flex flex-col justify-between px-4 mb-16 lg:grid lg:grid-cols-3"
    >
      <div className="flex flex-col lg:col-start-1 lg:col-end-2">
        <img
          className="order-1 m-auto mt-6 rounded-xl lg:order-3"
          src={mahjongImage.src}
          alt={imgAlt}
          srcSet={mahjongImage.srcSet}
          sizes="(max-width: 300px) 70vw, (max-width: 705px) 30vw, (max-width: 1110px) 20vw, 20vw"
        />
      </div>
      <div className="m-auto flex flex-col lg:col-start-2 lg:col-end-4">
        <h2 className="pb-1 text-center font-mulish text-2xl font-bold text-accent lg:text-3xl xl:text-4xl">
          Physical Therapy Exercises
        </h2>
        <h3 className="text-secondary pb-1 text-center font-dosis text-xl font-bold lg:text-2xl xl:text-3xl">
          Body Movements focused on the lower body and back
        </h3>
        {/* <Button /> */}
      </div>
    </section>
  );
};

export default MahjongHome;
