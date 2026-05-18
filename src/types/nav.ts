export interface Nav {
  id: string;
  name: string;
}

export const navs: Nav[] = [
  { id: 'projects', name: 'Projects' },
  { id: 'me', name: 'About Me' },
  // Course Work: not enough substance yet — re-enable with App route + tests.
  // { id: 'courses', name: 'Course Work' },
];
