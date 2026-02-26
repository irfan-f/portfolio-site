import mahjongIcon from '../assets/photos/mahjong-icon.svg';
import todateImage from '../assets/photos/todate-icon.svg';
import type { ProjectMeta } from '../types/project';

export const projects: ProjectMeta[] = [
  {
    id: 'todate',
    title: 'todate',
    subtitle: 'React timeline app',
    imageSrc: todateImage,
    imageAlt: 'todate calendar and checklist icon',
    description:
      'Timeline app with tags, school-year dates, and theme support. Built with React, Vite, and Tailwind v4.',
    url: 'https://irfan-f.github.io/todate/',
  },
  {
    id: 'mahjong',
    title: 'Mahjong with Friends',
    subtitle: 'A web and mobile game',
    imageSrc: mahjongIcon,
    imageAlt: 'Mahjong tile icon',
    description:
      "Web and mobile Mahjong for playing online with friends. Existing apps didn't fit our needs, so building our own—in active development.",
  },
  {
    id: 'hammerspoon',
    title: 'Hammerspoon Script',
    subtitle: 'MacOS Automations',
    imageSrc: {
      png: '/images/automationFigure.png',
      webp: '/images/automationFigure.webp',
      avif: '/images/automationFigure.avif',
    },
    imageAlt: 'Logo of a stick figure trying to spin a settings cog',
    description:
      'MacOS automation scripts with Hammerspoon. Learning Lua while tinkering with UI and automations. Cleaning up before pushing to GitHub.',
  },
];
