import { FC, HTMLAttributes, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from '../types/nav';
import MenuSvgComponent from '../svg/svgs/menu.svg?react';
import HomeSvgComponent from '../svg/svgs/home.svg?react';

interface MenuToggleProps {
  navs: Nav[];
}

const MenuToggle: FC<MenuToggleProps & HTMLAttributes<HTMLElement>> = ({
  navs,
  className,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleClick = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <button
        data-drawer-target="menu-sidebar"
        data-drawer-toggle="menu-sidebar"
        aria-controls="menu-sidebar"
        aria-label="Open menu"
        title="Open menu"
        type="button"
        className={`relative h-10 w-10 cursor-pointer ${className ?? ''}`}
        onClick={handleClick}
      >
        <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center p-2">
          <MenuSvgComponent className="menu-hamburger" />
        </div>
        <div className="absolute left-0 top-0 h-full w-full rounded-md hover:bg-accent hover:opacity-30" />
      </button>

      <>
        <div
          className={`fixed right-0 top-0 z-10 h-screen w-screen bg-black opacity-30 ${isSidebarOpen ? 'visible' : 'hidden'}`}
          onClick={handleClick}
        />
        <div
          id="menu-sidebar"
          style={{
            maxHeight: 'var(--webkit-fill-available)',
          }}
          className={`fixed right-0 top-0 z-20 h-screen w-64 bg-surface pt-4 transition-transform duration-400 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-64'}`}
          aria-label="Sidebar"
        >
          <div className="flex h-full flex-col items-center justify-between px-3 py-4">
            <NavLink
              className={({ isActive }) =>
                `relative h-10 w-10 cursor-pointer ${isActive ? 'svg-active' : 'menu-hamburger hover:svg-active'}`
              }
              onClick={handleClick}
              to="/"
            >
              <HomeSvgComponent className="" />
            </NavLink>
            <ul className="mt-16 flex h-full flex-col items-center overflow-y-auto text-2xl">
              {navs.map((stack) => (
                <li className="mb-8 last:mb-0" key={stack.id}>
                  <NavLink
                      to={stack.id}
                      className={({ isActive }) =>
                        `hover:text-primary dark:hover:text-secondary ${isActive ? 'text-primary dark:text-secondary active' : 'text-on-surface'}`
                      }
                      onClick={handleClick}
                    >
                      {stack.name}
                    </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    </>
  );
};

export default MenuToggle;
