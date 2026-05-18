import { NavLink, useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useTheme } from '../hooks/useTheme';
import { useFontsReady } from '../hooks/useFontsReady';
import { useLgUp } from '../hooks/useLgUp';
import MenuToggle from './MenuToggle';
import ThemeToggle from './ThemeToggle';
import TypeWriter from './TypeWriter';
import Icon from './Icon';
import { icons } from '../icons';
import { Nav } from '../types/nav';
import {
  SITE_FEEDBACK_ARIA_LABEL,
  SITE_FEEDBACK_TITLE,
  SITE_GITHUB_URL,
} from '../data/site';
import { buildGithubIssueTemplateChooserUrl } from '../utils/githubIssues';
import {
  navActionsVariants,
  navBrandIconVariants,
  navBrandTextVariants,
  navChromeClusterVariants,
  navChromeItemVariants,
  navMenuToggleVariants,
  navShellVariants,
} from '../motion/entranceVariants';

const siteFeedbackIssuesUrl = buildGithubIssueTemplateChooserUrl(SITE_GITHUB_URL);
const NAV_BRAND_NAME = 'Irfan Filipovic';

const NavBar = ({ navs }: { navs: Nav[] }) => {
  const { theme, setTheme } = useTheme();
  const headerShellRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const fontsReady = useFontsReady();
  const isDesktop = useLgUp();
  const reduceMotion = useReducedMotion() === true;
  const isHome =
    location.pathname === '/' || location.pathname === '';
  const navAnimate = fontsReady || reduceMotion ? 'show' : 'hidden';
  const layoutMode = isDesktop ? 'expanded' : 'collapsed';

  const [logoSettled, setLogoSettled] = useState(reduceMotion);
  const shellVariants = navShellVariants(reduceMotion);
  const brandIconVariants = navBrandIconVariants(reduceMotion);
  const chromeClusterVariants = navChromeClusterVariants(reduceMotion);
  const chromeItemCount = navs.length + 3;
  const menuToggleVariants = navMenuToggleVariants(reduceMotion, chromeItemCount);

  return (
    <header
      ref={headerShellRef}
      className="navbar relative z-[100] shrink-0 px-4vw w-full items-center py-2 md:py-4 lg:py-5"
    >
      <motion.div
        className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-2 sm:gap-4 lg:grid-cols-[1fr_auto_1fr]"
        variants={shellVariants}
        initial="hidden"
        animate={navAnimate}
      >
        <nav
          aria-label="Site"
          className="flex min-w-0 items-end justify-self-start"
        >
          <NavLink
            to="/"
            aria-label="Irfan Filipovic, home"
            title="Irfan Filipovic, home"
            className={`font-dosis hover:text-teal flex h-16 items-center gap-1 text-2xl font-bold sm:gap-2 ${isHome ? 'text-teal active' : 'text-teal'}`}
          >
            <motion.div
              className="nav-brand-reveal relative h-12 w-12 shrink-0 overflow-hidden sm:h-14 sm:w-14 md:h-16 md:w-16"
              aria-hidden={!fontsReady && !reduceMotion}
            >
              <motion.span
                variants={brandIconVariants}
                initial="hidden"
                animate={navAnimate}
                className={`nav-brand-icon icon-stacked absolute inset-0 block ${isHome && logoSettled ? 'icon-shift' : ''}`}
                onAnimationComplete={(definition) => {
                  if (definition === 'show') setLogoSettled(true);
                }}
              >
                <Icon src={icons.if} className="block h-full w-full" />
              </motion.span>
            </motion.div>
            {!isHome && (
              <motion.div
                key="brand-name"
                variants={navBrandTextVariants(reduceMotion)}
                initial="hidden"
                animate={navAnimate}
                className="min-w-0"
              >
                <TypeWriter
                  text={NAV_BRAND_NAME}
                  active={navAnimate === 'show'}
                  className="font-dosis text-2xl font-bold"
                />
              </motion.div>
            )}
          </NavLink>
        </nav>

        <motion.div
          variants={navActionsVariants(reduceMotion)}
          className="col-start-2 relative flex min-w-0 shrink-0 items-center justify-end justify-self-end lg:col-span-2 lg:col-start-2"
        >
          <motion.nav
            aria-label="Primary"
            aria-hidden={!isDesktop}
            variants={chromeClusterVariants}
            initial={false}
            animate={layoutMode}
            className={`font-dosis z-0 flex min-w-0 items-center text-base font-semibold lg:text-lg ${
              isDesktop
                ? 'relative min-w-0 flex-1 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-center lg:gap-x-6 xl:gap-x-10'
                : 'pointer-events-none absolute right-11 top-1/2 max-w-[calc(100%-2.75rem)] -translate-y-1/2 justify-end gap-6 sm:gap-8'
            }`}
          >
            <div
              className={`flex items-center gap-6 sm:gap-8 lg:min-w-0 lg:justify-center lg:gap-8 ${
                isDesktop ? 'lg:col-start-1' : 'shrink-0'
              }`}
            >
              {navs.map((stack: Nav, index) => (
                <motion.div
                  key={stack.id}
                  variants={navChromeItemVariants(reduceMotion, index, chromeItemCount)}
                  className="shrink-0 px-3 lg:px-4"
                >
                  <NavLink
                    to={stack.id}
                    tabIndex={isDesktop ? undefined : -1}
                    className={({ isActive }) =>
                      `font-mulish hover:text-teal flex h-12 items-center whitespace-nowrap text-base font-semibold lg:h-16 lg:text-xl ${isActive ? 'text-teal active' : 'text-on-surface'}`
                    }
                  >
                    {stack.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={navChromeItemVariants(
                reduceMotion,
                navs.length,
                chromeItemCount,
              )}
              className="bg-border hidden h-9 w-px shrink-0 lg:col-start-2 lg:block"
              aria-hidden
            />
            <div className="flex shrink-0 items-center gap-2 lg:col-start-3 lg:gap-3 lg:justify-self-end">
              <motion.div
                variants={navChromeItemVariants(
                  reduceMotion,
                  navs.length + 1,
                  chromeItemCount,
                )}
                className="shrink-0"
              >
                <ThemeToggle theme={theme} setTheme={setTheme} />
              </motion.div>
              <motion.div
                variants={navChromeItemVariants(
                  reduceMotion,
                  navs.length + 2,
                  chromeItemCount,
                )}
                className="shrink-0"
              >
                <a
                  href={siteFeedbackIssuesUrl}
                  className="font-mulish text-on-surface hover:text-teal text-sm font-semibold whitespace-nowrap underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={SITE_FEEDBACK_ARIA_LABEL}
                  title={SITE_FEEDBACK_TITLE}
                  tabIndex={isDesktop ? undefined : -1}
                >
                  Report feedback
                </a>
              </motion.div>
            </div>
          </motion.nav>
          <motion.div
            variants={menuToggleVariants}
            initial={false}
            animate={layoutMode}
            className="relative z-10 shrink-0"
          >
            <MenuToggle
              className="menu-toggle"
              layoutChrome={layoutMode}
              chromeItemCount={chromeItemCount}
              anchorRef={headerShellRef}
              navs={navs}
              theme={theme}
              setTheme={setTheme}
              feedbackIssuesHref={siteFeedbackIssuesUrl}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default NavBar;
