import { NavLink } from 'react-router-dom';
import { useTheme } from '../helpers/useTheme';
import ThemeToggle from './ThemeToggle';
import MenuToggle from './MenuToggle';
import { Nav } from '../types/nav';
import IFIcon from '../svg/svgs/if.svg?react';

const NavBar = ({ navs }: { navs: Nav[] }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="navbar w-full shrink-0 px-4vw py-2 md:py-4 lg:py-5 items-center">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-7xl mx-auto gap-2 sm:gap-4">
        <nav key="brand" className="justify-self-start flex min-w-0 items-end animate-slide-in-left-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-dosis font-bold text-2xl flex items-center h-16 hover:text-primary dark:hover:text-secondary ${isActive ? 'text-primary dark:text-secondary active' : 'text-tertiary'}`
            }
          >
            {({ isActive }) => (
              <div className="flex min-w-0 shrink-0 items-center gap-1 sm:gap-2">
                <IFIcon
                  className={`icon-stacked h-[48px] w-[48px] shrink-0 sm:h-[56px] sm:w-[56px] md:h-[64px] md:w-[64px] ${isActive && 'icon-shift'}`}
                />
                {!isActive && (
                  <span className="min-w-0 truncate">Irfan Filipovic</span>
                )}
              </div>
            )}
          </NavLink>
        </nav>
        <div className="flex shrink-0 items-center justify-center">
          <nav className="hidden sm:flex sm:items-center sm:justify-center sm:gap-6 md:gap-8 font-dosis font-semibold text-base md:text-lg animate-slide-in-top-1">
          {navs.map((stack: Nav) => (
            <nav key={stack.id} className="px-5">
              <NavLink
                to={stack.id}
                className={({ isActive }) =>
                  `font-mulish font-semibold text-base md:text-xl h-12 sm:h-14 md:h-16 flex items-center hover:text-primary dark:hover:text-secondary ${isActive ? 'text-primary dark:text-secondary active' : 'text-on-surface'}`
                }
              >
                {stack.name}
              </NavLink>
            </nav>
          ))}
          </nav>
        </div>
        <div className="flex shrink-0 items-center justify-self-end gap-2">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <MenuToggle className="menu-toggle block sm:hidden" navs={navs} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
