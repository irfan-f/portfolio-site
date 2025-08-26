import { FC, HTMLAttributes, useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Nav } from '../App';
import AppearanceToggle from './AppearanceToggle';
import MenuSvgComponent from '../svg/svgs/menu.svg';
import HomeSvgComponent from '../svg/svgs/home.svg';
import SocialLinks from './SocialLinks';

// Props
interface MenuToggleProps {
  darkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
  navs: Nav[];
}

const MenuToggle: FC<MenuToggleProps & HTMLAttributes<HTMLElement>> = ({
  darkMode,
  toggleDarkMode,
  navs,
  className,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleClick = () => {
    // Handle opening and closing of the menu
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        data-drawer-target="menu-sidebar"
        data-drawer-toggle="menu-sidebar"
        aria-controls="menu-sidebar"
        type="button"
        className={clsx('relative h-10 w-10 cursor-pointer', className)}
        onClick={handleClick}
      >
        <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center p-2">
          <MenuSvgComponent className="menu-hamburger" />
        </div>
        <div className="absolute left-0 top-0 h-full w-full rounded-md hover:bg-accent hover:opacity-30" />
      </button>

      <>
        <div
          className={clsx(
            'fixed right-0 top-0 z-10 h-screen w-screen bg-black opacity-30',
            { hidden: !isSidebarOpen, visible: isSidebarOpen },
          )}
          onClick={handleClick}
        />
        <div
          id="menu-sidebar"
          style={{
            maxHeight: 'var(--webkit-fill-available)',
          }}
          className={clsx(
            'fixed right-0 top-0 z-20 h-screen w-64 bg-basic pt-4 transition-transform duration-400',
            {
              'translate-x-0': isSidebarOpen,
              'translate-x-64': !isSidebarOpen,
            },
          )}
          aria-label="Sidebar"
        >
          <div className="flex h-full flex-col items-center justify-between px-3 py-4">
            <NavLink
              className={({ isActive }) =>
                clsx('relative h-10 w-10 cursor-pointer', {
                  'svg-active': isActive,
                  'menu-hamburger': !isActive,
                  'hover:svg-active': !isActive,
                })
              }
              onClick={handleClick}
              to="/"
            >
              <HomeSvgComponent className="" />
            </NavLink>
            <ul className="mt-16 flex h-full flex-col items-center overflow-y-auto text-2xl">
              {navs.map((stack) => (
                <li className="mb-8 last:mb-0" key={stack.id}>
                  <nav className="">
                    <NavLink
                      to={stack.id}
                      className={({ isActive }) =>
                        clsx({
                          'text-basic': !isActive,
                          'text-primary dark:text-secondary': isActive,
                          'hover:text-primary dark:hover:text-secondary': true,
                          active: isActive,
                        })
                      }
                      onClick={handleClick}
                    >
                      {stack.name}
                    </NavLink>
                  </nav>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-y-12">
              <AppearanceToggle
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                className="flex flex-row"
              />
              <SocialLinks className="h-12 w-32" />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default MenuToggle;
