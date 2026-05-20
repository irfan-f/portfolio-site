export type ProjectTag = 'mahjong' | 'portfolio' | 'todate' | 'hammerspoon' | 'misc';

export const PROJECT_TAG_LABELS: Record<ProjectTag, string> = {
  mahjong: 'Mahjong',
  portfolio: 'Portfolio',
  todate: 'todate',
  hammerspoon: 'Mac Scripts',
  misc: 'Other',
};

export type LatestPostExternalLink = {
  label: string;
  href: string;
};

export type LatestPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  /** Project slug for filtering; display label from PROJECT_TAG_LABELS. */
  projectTag: ProjectTag;
  /** Full update copy — one string per paragraph. */
  body: string[];
  /** Optional image for the card and detail page; omit unless you add one. */
  imageSrc?: string;
  /** Optional CTA on the detail page (live app, repo, related route). */
  externalLink?: LatestPostExternalLink;
  /**
   * When false, the card skips “Read more” (excerpt is enough).
   * Omit to show Read more when the detail view adds substantial copy.
   */
  showReadMore?: boolean;
};

/** Detail page is worth opening from the card teaser. */
export function postShowsReadMore(post: LatestPost): boolean {
  if (post.showReadMore === false) return false;
  if (post.showReadMore === true) return true;

  const excerptWords = post.excerpt.split(/\s+/).length;
  const bodyWords = post.body.join(' ').split(/\s+/).length;
  return post.body.length >= 3 && bodyWords >= Math.max(90, Math.round(excerptWords * 1.45));
}

export const UPDATES_PATH_PREFIX = '/updates';

export function updateDetailPath(postId: string): string {
  return `${UPDATES_PATH_PREFIX}/${postId}`;
}

export function getLatestPostById(postId: string): LatestPost | undefined {
  return latestPosts.find((post) => post.id === postId);
}

/** Updates grounded in shipped work and recent portfolio-site changes. */
export const latestPosts: LatestPost[] = [
  {
    id: 'portfolio-latest-section',
    title: 'Home updates section with filters',
    date: 'May 2026',
    excerpt:
      'I added Catch up on the latest things below the hero—a scroll cue, a scannable card grid, and project filters plus search. Not a blog: just the latest things across whatever I am building.',
    projectTag: 'portfolio',
    showReadMore: false,
    body: [
      'I wanted a simple place for shipping notes without calling it a blog, a changelog, or news. Catch up on the latest things is focused on what changed recently, not tied to one project.',
      'The reader is mostly future-me, friends, and recruiters. In about ten seconds you should see what shipped and filter by project if you care about Mahjong versus the portfolio site.',
      'Thin posts stay on the card; longer write-ups get a detail page. I am keeping every card for now—no archive plan—so the grid becomes a timeline of how the projects evolved.',
      'Course work is not in the filters yet; that route still does not have enough substance to sit beside production apps.',
    ],
  },
  {
    id: 'portfolio-project-og-images',
    title: 'Per-project Open Graph images',
    date: 'May 2026',
    excerpt:
      'When I share a project link, the preview should match the app—Mahjong tiles, todate timeline branding, and dark variants where chat apps use a dark theme.',
    projectTag: 'portfolio',
    showReadMore: false,
    body: [
      'One generic portrait made every link look the same in iMessage, Slack, and social cards. I added OG images per project so Mahjong, todate, and the portfolio read correctly at a glance.',
      'Where dark-mode previews matter, I ship a paired asset (for example todate and Mahjong) so the card does not flash a white box on a dark chat theme.',
      'The images live under public/images/ and are referenced from each app’s meta tags or Helmet blocks—the same deploy path as the rest of the site, not a separate CDN step yet.',
    ],
  },
  {
    id: 'portfolio-gitignore-assets',
    title: 'Project images: rsync today, CDN from the VPS next',
    date: 'May 2026',
    excerpt:
      'Heavy images are out of git across my projects, starting with this site, then Mahjong, todate, and whatever ships next. I build AVIF/WebP locally and rsync to the Hostinger VPS; a CDN on that VPS is the plan, not live yet.',
    projectTag: 'portfolio',
    showReadMore: true,
    externalLink: {
      label: 'Stop tracking images in public/',
      href: 'https://github.com/irfan-f/portfolio-site/pull/57',
    },
    body: [
      'Project sites were carrying large PNGs, heroes, and OG art in git—slow clones and noisy diffs. I started with this portfolio (see the linked pull request) and I am applying the same approach to Mahjong, todate, and future repos: masters stay local, generated AVIF/WebP ship on deploy. That is my workflow, not a rule that every app should gitignore public/.',
      'Today I keep source masters on disk locally and generate AVIF and WebP with Sharp at the widths each app references. Deploy still rsyncs dist/ and generated assets to my Hostinger VPS.',
      'Next step for all of these projects: serve images from a CDN backed by that VPS so production does not depend on whatever happened to land in the last rsync. I have not turned that on yet—right now it is generate locally, ship on deploy. If you clone a repo, you need the local masters (or docs) before a production build looks right.',
      'I have hit stale cached images on deploy once—worth clearing when previews look wrong after a refresh.',
    ],
  },
  {
    id: 'mahjong-production',
    title: 'Mahjong with Friends is in production',
    date: 'Apr 2026',
    excerpt:
      'The game runs at mahjong.irfan-f.com with the API on irfquake.tech. A friend was the first real lobby; I am proud people can play together and nervous about choppy UX and reconnect edge cases.',
    projectTag: 'mahjong',
    showReadMore: true,
    externalLink: {
      label: 'Play at mahjong.irfan-f.com',
      href: 'https://mahjong.irfan-f.com',
    },
    body: [
      'My goal was a link friends could open—not another localhost session. Mahjong with Friends runs on GitHub Pages at mahjong.irfan-f.com; the Express API on irfquake.tech handles lobbies and live table sync with Firebase sign-in on protected routes.',
      'The first production player was a friend who joined a lobby when we did not have four humans. I pushed heuristic bots immediately so the table could start. That moment is why solo and partial tables matter as much as the deploy wiring.',
      'Getting the first deploy to load meant wiring build secrets, Firebase authorized domains, nginx proxy paths, and CORS for the Pages origin—details I folded into this site’s Mahjong updates rather than a separate env post.',
      'The bigger challenge now is feel, not whether it loads. The design is ironed out but still not perfect—I am working on animations and fluidity, and I am nervous about choppy UX. Reconnect during an active hand and host migration are fragile: the UI can freeze on a user move with no clear action, or a bot can get stuck. I added buttons to nudge the table along when that happens.',
      'If I started a hobby deploy like this again, I would plan the UI tighter up front. I have a VPS now and would deploy there from the start instead of discovering production friction only on Pages.',
    ],
  },
  {
    id: 'mahjong-heuristic-bots',
    title: 'Heuristic bots so you can play alone',
    date: 'Mar 2026',
    excerpt:
      'I added rule-based bot seats when friends are not online and when others asked for solo play—not because HK rules were broken, but so testing does not stall. Reinforcement learning is planned; not shipped.',
    projectTag: 'mahjong',
    showReadMore: true,
    externalLink: {
      label: 'Play at mahjong.irfan-f.com',
      href: 'https://mahjong.irfan-f.com',
    },
    body: [
      'I wanted to play without waiting for four schedules to line up, and a few friends asked for solo seats. Early random bots were worse for development—they breezed past wins and did not stress the paths I care about.',
      'Heuristics keep the table playable and punish you for missing a win: fair and tough, but low points unless you start with a great hand. Bot win streaks become a running joke; games end quickly, which makes chasing fun hands harder than against humans.',
      'They are not “bad AI” so much as different from people who chase scoring hands or throw you a bone like a teacher would. I am glad others can play without rounding up three friends.',
      'What ships today is rule-based scaffolding on the same WebSocket table state as humans—not a trained model. I have a reinforcement-learning plan for later opponents; that work has not shipped.',
      'If you join production, expect opponents you can learn the basics from, not a strong or teaching bot.',
    ],
  },
  {
    id: 'todate-released',
    title: 'todate is live: life events on a visible timeline',
    date: 'Mar 2026',
    excerpt:
      'I shipped todate at todate.irfan-f.com to track life events on a timeline—dates, tags, and school years, including gap years and skipped years so you can compare different stretches of life side by side.',
    projectTag: 'todate',
    showReadMore: true,
    externalLink: {
      label: 'Open todate',
      href: 'https://todate.irfan-f.com',
    },
    body: [
      'My goal with todate is to keep life events visible instead of scattered across notes and spreadsheets. You add dates and tags, group school years, and read them on a timeline where gaps and overlaps stand out—useful when you are lining up semesters, trips, or anything that shares a calendar.',
      'School years are first-class, and so are the breaks between them. You can enter gap years and skipped years—time away from school, a year off, or a stretch you want to leave empty on purpose—so the timeline shows more than one continuous academic line. That helps when you are comparing different lives: what if I had stayed on the default path versus took a gap, or skipped a year and picked up somewhere else.',
      'I built it with React, Vite, and Tailwind v4. The app is live at todate.irfan-f.com.',
      'Theme is set in index.html before React mounts (localStorage.theme or prefers-color-scheme) so the timeline does not flash the wrong mode on first paint—same pattern as this portfolio site.',
    ],
  },
  {
    id: 'portfolio-playwright',
    title: 'Playwright smoke tests on the portfolio',
    date: 'Mar 2026',
    excerpt:
      'I added Playwright smoke tests on this site first—desktop and mobile projects for theme, routing, and the nav drawer. Mahjong gets the same treatment after the UX pass feels less choppy.',
    projectTag: 'portfolio',
    showReadMore: false,
    externalLink: {
      label: 'portfolio-site',
      href: 'https://github.com/irfan-f/portfolio-site',
    },
    body: [
      'Manual checks were not keeping up with layout and nav changes, so I added Playwright on this site before a bigger Mahjong UI pass. Separate desktop and mobile browser projects cover theme persistence, routing, the nav drawer, and project links.',
      'The suite is smoke coverage for paths I break often—not full visual regression. I am running an accessibility audit on the portfolio and will fix what is worth fixing.',
      'Mahjong gets Playwright after the in-game UX feels less choppy. I do not want brittle tests fighting animations and reconnect work while the table feel is still moving.',
    ],
  },
  {
    id: 'hammerspoon-mac-scripts',
    title: 'Hammerspoon layouts and Spoons',
    date: 'Feb 2026',
    excerpt:
      'Mac Scripts is my Hammerspoon setup — brightness boost and a light filter for bright or dark environments, and window size management across monitors.',
    projectTag: 'hammerspoon',
    showReadMore: true,
    externalLink: {
      label: 'Mac Scripts on GitHub',
      href: 'https://github.com/irfan-f/Hammerspoon',
    },
    body: [
      'Mac Scripts on the Projects page is my personal Hammerspoon config—Lua on my machine, not a hosted app. I put it in updates because many people have never heard of Hammerspoon and might want the same small quality-of-life wins.',
      'Every day I use a light filter for bright sun or outdoor screens, brightness shortcuts, and window management: half screens and jumping between monitors.',
      'The keybinds are tuned for my desk, not offered as a universal preset. If something here sounds useful, open an issue or tell me what you would want added.',
      'I update the repo when something changes on my Mac; a new machine is mostly clone, install Hammerspoon, and reload.',
    ],
  },
];
