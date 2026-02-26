import mahjongImage from '../photos/mahjong-logo.png';
import automationImage from '../photos/automationFigure.png';
import type { ProjectMeta } from '../types/project';

export const projects: ProjectMeta[] = [
  {
    id: 'mahjong',
    title: 'Mahjong with Friends',
    subtitle: 'A web and mobile game',
    imageSrc: mahjongImage,
    imageAlt: 'Logo of Mahjong with Friends',
    description:
      'This project aims to create a comprehensive mobile and web interface for playing Mahjong, a traditional Chinese tile game, online. The motivation behind this project is the lack of existing applications that fully meet the needs of the project creator and their friends. The project is currently in active development, focusing on delivering a seamless and enjoyable experience for Mahjong enthusiasts.',
  },
  {
    id: 'hammerspoon',
    title: 'Hammerspoon Script',
    subtitle: 'MacOS Automations',
    imageSrc: automationImage,
    imageAlt: 'Logo of a stick figure trying to spin a settings cog',
    description:
      "This project aims to create a comprehensive set of scripts for the MacOS application Hammerspoon. I'm learning Lua as well as having a blast experimenting with UI elements and fun automations. Code is being cleaned and then will be pushed and linked on GitHub.",
  },
];
