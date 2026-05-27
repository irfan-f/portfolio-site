import type { ProjectMeta } from '../types/project';
import { rasterImageSet } from '../utils/rasterImage';

export const projects: ProjectMeta[] = [
  {
    id: 'cyclepdx',
    title: 'CyclePDX',
    imageSrc: '/images/cyclepdx-og.svg',
    imageAlt: 'CyclePDX — Portland bike navigation with GPS turn-by-turn',
    imageNoDarkFilter: true,
    description:
      'Bike navigation for Portland with route planning, GPS turn-by-turn, GPX overlays, and route sharing. React, TypeScript, MapLibre.',
    url: 'https://cyclepdx.irfan-f.com',
  },
  {
    id: 'mahjong',
    title: 'Mahjong with Friends',
    imageSrc: '/images/mahjong-og.svg',
    imageAlt: 'Mahjong with Friends — play Mahjong online with friends',
    imageNoDarkFilter: true,
    description:
      'Real-time multiplayer Hong Kong Mahjong in the browser. Firebase auth, Express API, and live game sync.',
    url: 'https://mahjong.irfan-f.com',
    githubUrl: 'https://github.com/irfan-f/mahjong-frontend',
  },
  {
    id: 'hammerspoon',
    title: 'Mac Scripts',
    imageSrc: rasterImageSet('automationFigure'),
    imageNoDarkFilter: true,
    imageAlt: 'Stick figure pushing a gear',
    description:
      'Hammerspoon config and Spoons: windows, keybinds, displays, menubar helpers, OCR, and a light filter.',
    githubUrl: 'https://github.com/irfan-f/Hammerspoon',
  },
  {
    id: 'todate',
    title: 'todate',
    imageSrc: '/images/todate-og.svg',
    imageAlt: 'Todate — timeline for dates, tags, and school years',
    imageNoDarkFilter: true,
    description:
      'Timeline app with tags, school-year dates, and theme support. React, Vite, and Tailwind v4.',
    url: 'https://todate.irfan-f.com',
    githubUrl: 'https://github.com/irfan-f/todate',
  },
];
