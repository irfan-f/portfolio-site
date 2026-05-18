import { FC, lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import NavBar from './components/NavBar';
import PageTransition from './components/PageTransition';
import { layoutResizeTransition } from './motion/entranceVariants';
import { navs } from './types/nav';
import { useSkipLink } from './hooks/useSkipLink';
import { useFontsReady } from './hooks/useFontsReady';

const Me = lazy(() => import('./routes/Me'));
const Projects = lazy(() => import('./routes/Projects'));
const CardVariantsPreview = import.meta.env.DEV
  ? lazy(() => import('./routes/CardVariantsPreview'))
  : null;

const App: FC = () => {
  useSkipLink();
  useFontsReady();
  const reducedMotionPreference = useReducedMotion();
  const reduceMotion = reducedMotionPreference === true;

  return (
    <div className="flex h-[100svh] max-h-[100dvh] w-full flex-col overflow-hidden select-text">
      <NavBar navs={navs} />
      <motion.main
        id="main-content"
        layout
        layoutScroll
        transition={layoutResizeTransition(reduceMotion)}
        className="flex min-h-0 flex-1 flex-col overflow-y-auto"
      >
        <Suspense fallback={null}>
          <Routes>
            <Route element={<PageTransition />}>
              <Route path="/" element={<Home />} />
              <Route path="me" element={<Me />} />
              <Route path="projects" element={<Projects />} />
              {CardVariantsPreview ? (
                <Route path="dev/cards" element={<CardVariantsPreview />} />
              ) : null}
            </Route>
          </Routes>
        </Suspense>
      </motion.main>
    </div>
  );
};

export default App;
