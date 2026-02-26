import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';
import MenuToggle from './MenuToggle';
import Icon from './Icon';
import { icons } from '../icons';
import { Nav } from '../types/nav';

const NavBar = ({ navs }: { navs: Nav[] }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="navbar px-4vw w-full shrink-0 items-center py-2 md:py-4 lg:py-5">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
        <nav
          key="brand"
          className="animate-slide-in-left-1 flex min-w-0 items-end justify-self-start"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-dosis hover:text-primary flex h-16 items-center text-2xl font-bold ${isActive ? 'text-primary active' : 'text-tertiary'}`
            }
          >
            {({ isActive }) => (
              <div className="flex min-w-0 shrink-0 items-center gap-1 sm:gap-2">
                <Icon
                  src={icons.if}
                  className={`icon-stacked block h-[48px] w-[48px] shrink-0 overflow-hidden sm:h-[56px] sm:w-[56px] md:h-[64px] md:w-[64px] ${isActive && 'icon-shift'}`}
                />
                {!isActive && (
                  <span className="min-w-0 truncate">Irfan Filipovic</span>
                )}
              </div>
            )}
          </NavLink>
        </nav>
        <div className="flex shrink-0 items-center justify-center">
          <nav className="font-dosis animate-slide-in-top-1 hidden text-base font-semibold lg:flex lg:items-center lg:justify-center lg:gap-8 lg:text-lg">
            {navs.map((stack: Nav) => (
              <div key={stack.id} className="px-5">
                <NavLink
                  to={stack.id}
                  className={({ isActive }) =>
                    `font-mulish hover:text-primary flex h-12 items-center text-base font-semibold lg:h-16 lg:text-xl ${isActive ? 'text-primary active' : 'text-on-surface'}`
                  }
                >
                  {stack.name}
                </NavLink>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex shrink-0 items-center gap-2 justify-self-end">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <MenuToggle className="menu-toggle block lg:hidden" navs={navs} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
