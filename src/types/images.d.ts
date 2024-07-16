declare module "*.jpg" {
  const content: {
    src: string;
    srcSet: string;
    images: { path: string; width: number; height: number }[];
    width: number;
    height: number;
  };
  export default content;
}

declare module "*.png" {
  const content: {
    src: string;
    srcSet: string;
    images: { path: string; width: number; height: number }[];
    width: number;
    height: number;
  };
  export default content;
}

declare module "*.svg" {
  const value: any;
  export = value;
}

declare module "*.gif" {
  const value: any;
  export = value;
}
