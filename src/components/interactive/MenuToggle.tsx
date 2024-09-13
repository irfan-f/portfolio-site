import { FC, HTMLAttributes, Suspense, lazy, useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { ThemeType } from '../../helpers/useTheme';
import { Nav } from '../../App';
import AppearanceToggle from './AppearanceToggle';
const MenuSvgComponent = lazy(() => import(`../../svg/svgs/menu.svg`));
const HomeSvgComponent = lazy(() => import(`../../svg/svgs/home.svg`));

// Props
interface MenuToggleProps {
  theme: ThemeType;
  applyTheme: (theme: ThemeType) => void;
  navs: Nav[];
}

const MenuToggle: FC<MenuToggleProps & HTMLAttributes<HTMLElement>> = ({
  theme,
  applyTheme,
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
          <Suspense fallback={<div />}>
            <MenuSvgComponent className="svg-primary fill-accent" />
          </Suspense>
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
            'fixed right-0 top-0 z-20 h-screen w-64 bg-primary pt-4 transition-transform duration-400',
            {
              'translate-x-0': isSidebarOpen,
              'translate-x-64': !isSidebarOpen,
            },
          )}
          aria-label="Sidebar"
        >
          <div className="flex h-full flex-col items-center justify-between px-3 py-4">
            <NavLink
              className={({ isActive }) => clsx(
                'relative h-10 w-10 cursor-pointer',
                {
                  'svg-primary': isActive,
                  'fill-accent': isActive,
                }
              )}
              onClick={handleClick}
              to="/"
            >
              <HomeSvgComponent className="" />
            </NavLink>
            <ul className="mt-16 flex h-full flex-col items-center overflow-y-auto text-2xl">
              {navs.map((stack) => (
                <li className="mb-8 last:mb-0">
                  <nav key={stack.id} className="">
                    <NavLink
                      to={stack.id}
                      className={( { isActive } ) => clsx(
                        {
                          'text-primary': isActive,
                          'hover:text-primary': true,
                          'active': isActive,
                          'text-secondary': !isActive,
                        }
                      )}
                      onClick={handleClick}
                    >
                      {stack.name}
                    </NavLink>
                  </nav>
                </li>
              ))}
            </ul>
            <div className="w-fit">
              <AppearanceToggle
                theme={theme}
                applyTheme={applyTheme}
                className=""
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default MenuToggle;
