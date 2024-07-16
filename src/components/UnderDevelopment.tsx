import { FC } from 'react';
import  CogComponent from '../svg/svgs/cog.svg';

const UnderDevelopment: FC = () => {
  return (
    <div className="w-full bg-accent text-inverse m-auto flex flex-row justify-evenly px-24 py-4">
      <CogComponent className="w-12 m-auto svg-dark animate-spin-slow" />
      <div className="w-full flex flex-col items-center justify-center">
      <h1 className="w-full text-center text-2xl">Under Construction</h1>
        <h3 className="text-xl">
          This site is currently under construction. Please check back later.
        </h3>
      </div>
      <CogComponent className="w-12 m-auto svg-dark animate-spin-slow" />
    </div>
  );
};

export default UnderDevelopment;