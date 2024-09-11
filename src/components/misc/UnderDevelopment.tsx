import { FC } from 'react';
import  CogComponent from '../../svg/svgs/cog.svg';

const UnderDevelopment: FC = () => {
  return (
    <div className="under-development w-full bg-accent text-inverse m-auto flex flex-row justify-evenly px-12 md:px-24 py-1px md:py-4">
      <CogComponent className="w-12 m-auto svg-dark animate-spin-slow" />
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="w-full text-center text-xl md:text-2xl">Under Construction</h1>
      </div>
      <CogComponent className="w-12 m-auto svg-dark animate-spin-slow" />
    </div>
  );
};

export default UnderDevelopment;