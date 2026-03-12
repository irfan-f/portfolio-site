export interface ProjectImageRaster {
  png: string;
  webp: string;
  avif: string;
}

export type ProjectImageSrc = string | ProjectImageRaster;

export interface ProjectMeta {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: ProjectImageSrc;
  imageAlt: string;
  description: string;
  url?: string;
  statsUrl?: string;
  githubUrl?: string;
}

export interface ProjectStats {
  users: number;
  lobbies: number;
  games: number;
}
