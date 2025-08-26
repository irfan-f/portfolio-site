import { FC, useState } from 'react';
import mahjongImage from '../../photos/mahjong-logo.png';
import Button from '../interactive/Button';

const imgAlt = 'A logo of Mahjong with Friends';

interface MahjongProps extends React.HTMLAttributes<HTMLElement> {
  showDetails?: boolean;
};

const Mahjong: FC<MahjongProps> = ({ showDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let AdditionalDetails;
  showDetails = false;

  if (showDetails) {
    AdditionalDetails = (
        <ul className="text-md text-center align-bottom font-libre lg:text-lg">
          <li>TypeScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>Redux Toolkit</li>
          <li>Node.JS</li>
          <li>Firebase</li>
        </ul>
      );
  }

  return (
    <section
      className="flex flex-col justify-between px-4 mb-16 lg:grid lg:grid-cols-3"
    >
      <div className="flex flex-col justify-between lg:col-start-1 lg:col-end-2">
        <img
          className="order-1 m-auto rounded-xl lg:order-3"
          src={mahjongImage.src}
          alt={imgAlt}
          srcSet={mahjongImage.srcSet}
          sizes="(max-width: 300px) 70vw, (max-width: 705px) 30vw, (max-width: 1110px) 20vw, 20vw"
        />
      </div>
      <div className="h-full m-auto flex flex-col justify-evenly lg:col-start-2 lg:col-end-4 text-center lg:text-left">
        <div>
          <h2 className="pb-1 font-mulish text-2xl font-bold text-accent lg:text-3xl xl:text-4xl">
            Mahjong with Friends
          </h2>
          <h3 className="text-primary dark:text-secondary pb-1 font-dosis text-xl font-bold lg:text-2xl xl:text-3xl">
            A web and mobile game
          </h3>
        </div>
        <p className="text-md align-bottom font-libre lg:text-lg pt-4 lg:pt-0">
          This project aims to create a comprehensive mobile and web interface
          for playing Mahjong, a traditional Chinese tile game, online. The
          motivation behind this project is the lack of existing applications
          that fully meet the needs of the project creator and their friends.
          The project is currently in active development, focusing on delivering
          a seamless and enjoyable experience for Mahjong enthusiasts.
        </p>
        {
          showDetails &&
          AdditionalDetails
        }
      </div>
    </section>
  );
};

export default Mahjong;
