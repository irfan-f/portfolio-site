import { FC, HTMLAttributes } from "react";
import SunIcon from '../../svg/svgs/sun.svg';
import MoonIcon from '../../svg/svgs/moon.svg';

type AppearanceToggleProps  = {
  darkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
};

const AppearanceToggle: FC<AppearanceToggleProps & HTMLAttributes<HTMLElement>> = ({ darkMode, toggleDarkMode, className}) => {
  return (
    <div className={`${className} gap-x-2 h-10 w-40 items-center`}>
      <SunIcon className="h-full stroke-2 svg-primary fill-none z-50" />
      <button
        type="button"
        role="switch"
        aria-darkMode={darkMode}
        onClick={() => toggleDarkMode(!darkMode)}
        className="h-6 w-12 shadow-2xl flex items-center rounded-full p-1 transition-colors border-2 border-outset border-opposite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-depth"
      >
        <span
          className={`bg-white h-4 w-4 rounded-full shadow-2xl transform transition-transform duration-700 ${
            darkMode ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      <MoonIcon className="h-full stroke-2 fill-none svg-primary z-50" />
    </div>
  );
};

export default AppearanceToggle;
