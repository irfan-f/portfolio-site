import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import useDarkMode from '../../helpers/useDarkMode';
import AppearanceToggle from '../interactive/AppearanceToggle';
import MenuToggle from '../interactive/MenuToggle';
import { Nav } from '../../App';
import IFIcon from '../../svg/svgs/if.svg';

// Function to generate classname for the primary nav
const primaryNavClassName =({ isActive }: { isActive: boolean }) => clsx(
  'font-dosis',
  'font-bold',
  'text-2xl',
  'flex',
  'items-center',
  'h-16',
  {
    'text-tertiary': !isActive,
    'text-primary dark:text-secondary': isActive,
    'hover:text-primary dark:hover:text-secondary': true,
    'active': isActive,
  },
);
// Function to generate classname for the primary nav
const testClass =({ isActive }: { isActive: boolean }) => clsx(
  {
    'visible': !isActive,
    'hidden': isActive,
  },
);

// Function to generate classname for a subnav
const subNavLinkClassName = ({ isActive }: { isActive: boolean }) => clsx(
  'font-mulish',
  'font-semibold',
  'text-xl',
  'h-16',
  'flex',
  'items-center',
  {
    'text-basic': !isActive,
    'text-primary dark:text-secondary': isActive,
    'hover:text-primary dark:hover:text-secondary': true,
    'active': isActive,
  },
);

// Classnames to reduce clutter within the JSX,
const headerClassName = 'navbar px-4vw py-9 lg:py-12 align-center';
const gridDivClassName = 'mx-auto grid grid-cols-2 lg:grid-cols-6 items-center w-full';
const brandNavClassName = 'justify-self-start flex items-end lg:col-span-1 animate-slide-in-left-1';
const secondDivClassName = 'justify-self-center hidden lg:flex lg:items-end lg:justify-between lg:w-fit lg:col-span-4 p-auto font-dosis font-semibold text-lg animate-slide-in-top-1';
const subNavClassName = 'px-5';
const thirdDivClassName = 'items-center justify-self-end lg:col-span-1';
const appearanceToggleClassname = 'hidden lg:flex lg:flex-row';
const menuToggleClassName = 'menu-toggle block lg:hidden';


/**
 * Notes
 * F is first path element
 * I is the second path element
 */

const NavBar = ({ navs }: { navs: any }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={headerClassName}>
      <div className={gridDivClassName}>
        <nav key="brand" className={brandNavClassName}>
          <NavLink
            to="/"
            className={primaryNavClassName}
            >
            {({ isActive }) => (
              <div className="h-16 flex items-center">
                <div className="h-full">
                  <IFIcon preserveAspectRatio className={`h-[64px] w-[64px] icon-stacked ${isActive && "icon-shift"}`} />
                </div>
                <div className="w-full">
                  {!isActive && "Irfan Filipovic"}
                </div>
              </div>
            )}
          </NavLink>
        </nav>
        <div className={secondDivClassName}>
        {navs.map((stack: Nav) => (
          <nav key={stack.id} className={subNavClassName}>
            <NavLink
              to={stack.id}
              className={subNavLinkClassName}
              >
              {stack.name}
            </NavLink>
          </nav>
        ))}
        </div>
        <div className={thirdDivClassName}>
          <AppearanceToggle className={appearanceToggleClassname} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <MenuToggle className={menuToggleClassName} darkMode={darkMode} toggleDarkMode={toggleDarkMode} navs={navs} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
