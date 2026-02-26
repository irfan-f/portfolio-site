import { FC, HTMLAttributes, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import { icons } from '../icons';
import { Nav } from '../types/nav';

interface MenuToggleProps {
  navs: Nav[];
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-4 py-3 text-base font-medium transition-colors ${isActive ? 'text-primary bg-secondary/30' : 'text-on-surface hover:bg-secondary/20'}`;

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
        aria-expanded={isSidebarOpen}
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
        title={isSidebarOpen ? 'Close menu' : 'Open menu'}
        type="button"
        className={`relative h-10 w-10 cursor-pointer ${className ?? ''}`}
        onClick={handleClick}
      >
        <div className="absolute top-0 right-0 flex h-10 w-10 items-center justify-center p-2">
          <Icon src={icons.menu} className="menu-hamburger h-full w-full" />
        </div>
        <div className="hover:bg-accent absolute top-0 left-0 h-full w-full rounded-md hover:opacity-30" />
      </button>
      <div
        className={`fixed top-0 right-0 z-10 h-screen w-screen bg-black opacity-30 ${isSidebarOpen ? 'visible' : 'hidden'}`}
        onClick={handleClick}
      />
      <div
        id="menu-sidebar"
        className={`bg-surface-panel fixed top-0 right-0 z-20 h-screen w-48 shadow-xl transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-48'}`}
        aria-label="Navigation menu"
      >
        <nav className="flex flex-col gap-1 p-4">
          <NavLink className={navLinkClass} onClick={handleClick} to="/">
            Home
          </NavLink>
          {navs.map((stack) => (
            <NavLink
              key={stack.id}
              to={stack.id}
              className={navLinkClass}
              onClick={handleClick}
            >
              {stack.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MenuToggle;
