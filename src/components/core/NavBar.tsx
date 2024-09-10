import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import AppearanceToggle from '../interactive/AppearanceToggle';
import useTheme from '../../helpers/useTheme';

// Function to generate classname for the primary nav
const primaryNavClassName =({ isActive }: { isActive: boolean }) => clsx(
  'underlined',
  'font-dosis',
  'font-bold',
  'text-2xl',
  {
    'text-primary': !isActive,
    'hover:text-accent': true,
    'active': isActive,
    'text-accent': isActive
  },
);

// Function to generate classname for a subnav
const subNavLinkClassName = ({ isActive }: { isActive: boolean }) => clsx(
  'underlined',
  'font-mulish',
  'font-semibold',
  'text-lg',
  {
    'text-primary': isActive,
    'hover:text-white': true,
    'active': isActive,
    'text-secondary': !isActive,
  },
);

// Classnames to reduce clutter within the JSX,
const headerClassName = 'navbar px-4vw py-9 lg:py-12';
const gridDivClassName = 'mx-auto grid grid-cols-2 lg:grid-cols-6 items-center w-full';
const brandNavClassName = 'justify-self-start flex items-end lg:col-span-1 animate-slide-in-left-1';
const secondDivClassName = 'justify-self-center hidden lg:flex lg:items-end lg:justify-between lg:w-fit lg:col-span-4 p-auto font-dosis font-semibold text-lg animate-slide-in-top-1';
const subNavClassName = 'px-5';
const thirdDivClassName = 'items-center justify-self-end lg:col-span-1';
const appearanceToggleClassname = 'hidden lg:flex';
const menuToggleClassName = 'menu-toggle block lg:hidden';


const NavBar = ({ navs }: { navs: any }) => {
  const { theme, applyTheme } = useTheme();

  return (
    <div className={headerClassName}>
      <div className={gridDivClassName}>
        <nav key="brand" className={brandNavClassName}>
          <NavLink
            to="/"
            className={primaryNavClassName}
            >
            Irfan Filipovic
          </NavLink>
        </nav>
        <div className={secondDivClassName}>
        {/* {navs.map((stack: any) => (
          <nav key={stack.id} className={subNavClassName}>
            <NavLink
              to={stack.id}
              className={subNavLinkClassName}
              >
              {stack.name}
            </NavLink>
          </nav>
        ))} */}
        </div>
        <div className={thirdDivClassName}>
          <AppearanceToggle className={appearanceToggleClassname} theme={theme} applyTheme={applyTheme} />
          <div className={menuToggleClassName}>
            Menu
            {/* Menu */}
            {/* <MenuItem /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
