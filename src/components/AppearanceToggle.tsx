import { FC, HTMLAttributes } from 'react';
import SunIcon from '../svg/svgs/sun.svg';
import MoonIcon from '../svg/svgs/moon.svg';

type AppearanceToggleProps = {
  darkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
};

const AppearanceToggle: FC<
  AppearanceToggleProps & HTMLAttributes<HTMLElement>
> = ({ darkMode, toggleDarkMode, className }) => {
  return (
    <div className={`${className} h-10 w-fit items-center`}>
      <SunIcon className="svg-primary z-50 h-full fill-none stroke-2 pr-2" />
      <button
        type="button"
        role="switch"
        aria-darkMode={darkMode}
        onClick={() => toggleDarkMode(!darkMode)}
        className="border-outset flex h-6 w-12 items-center rounded-full border-2 border-opposite bg-depth p-1 shadow-2xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        <span
          className={`h-4 w-4 transform rounded-full bg-white shadow-2xl transition-transform duration-700 ${
            darkMode ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
      <MoonIcon className="svg-primary z-50 h-full fill-none stroke-2 pl-2" />
    </div>
  );
};

export default AppearanceToggle;
