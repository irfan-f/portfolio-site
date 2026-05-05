import mahjongIcon from '../assets/photos/mahjong-icon.svg';
import todateImage from '../assets/photos/todate-icon.svg';
import type { ProjectMeta } from '../types/project';

export const projects: ProjectMeta[] = [
  {
    id: 'mahjong',
    title: 'Mahjong with Friends',
    subtitle: 'A web and mobile game',
    imageSrc: mahjongIcon,
    imageAlt: 'Mahjong tile icon',
    description:
      'Real-time multiplayer Mahjong in the browser. Full-stack app with Firebase auth, Express API, and live game stats.',
    url: 'https://irfan-f.github.io/mahjong-frontend/',
    statsUrl: 'https://irfquake.tech/api/stats',
    githubUrl: 'https://github.com/irfan-f/mahjong-frontend',
  },
  {
    id: 'hammerspoon',
    title: 'Hammerspoon',
    subtitle: 'macOS automation',
    imageSrc: '/images/automationFigure.png',
    imageAlt: 'Stick figure pushing a gear',
    description:
      'Lua Hammerspoon config and Spoons: windows, keybinds, displays, menubar helpers, OCR, and a light filter.',
    githubUrl: 'https://github.com/irfan-f/Hammerspoon',
  },
  {
    id: 'todate',
    title: 'todate',
    subtitle: 'React timeline app',
    imageSrc: todateImage,
    imageAlt: 'todate calendar and checklist icon',
    description:
      'Timeline app with tags, school-year dates, and theme support. Built with React, Vite, and Tailwind v4.',
    url: 'https://irfan-f.github.io/todate/',
    githubUrl: 'https://github.com/irfan-f/todate',
  },
];
