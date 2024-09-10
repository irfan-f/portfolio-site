import { lazy, useEffect, FC, Suspense, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/core/NavBar';
import Home from './routes/Home';
import About from './routes/About';
import CourseWork from './routes/CourseWork';
import Projects from './routes/Projects';
const FAB = lazy(() => import('./components/interactive/FAB'));
import UnderDevelopment from './components/misc/UnderDevelopment';

interface Nav {
  id: string;
  name: string;
}

const navs: Nav[] = [
  {
    id: 'projects',
    name: 'Projects',
  },
  {
    id: 'coursework',
    name: 'Coursework',
  },
  {
    id: 'about',
    name: 'About',
  }
];

interface Components {
  [key: string]: FC;
}

const components: Components = {
  home: Home,
  about: About,
  projects: Projects,
  coursework: CourseWork
};

const App: FC = () => {
  const [needsScroll, setNeedsScroll] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isFirstload, setIsFirstLoad] = useState(true);
  useEffect(() => {
    if (isFirstload) {
      setIsFirstLoad(false);
    }
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      setNeedsScroll(document.body.scrollHeight > window.innerHeight);
    };

    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    // Check scroll on load and window resize
    window.onload = checkScroll;
    window.addEventListener('resize', checkScroll);

    // Check scroll on scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });


    // Clean up event listener on unmount
    return () => {
      window.onload = null;
      window.removeEventListener('resize', checkScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="" style={{ backgroundColor: isFirstload ? '#0c1826' : 'unset' }}>
      <UnderDevelopment />
      <NavBar navs={navs} />
      <>
          <Routes>
            <Route key="main" path='/' element={<Home />} />
            {navs.map((stack) => {
              const ComponentToUse = components[stack.id];
              return (
                <Route key={stack.id} path={stack.id} element={<ComponentToUse />} />
              );
            })}
          </Routes>
      </>
      { needsScroll && !isAtTop &&
        <Suspense fallback={<></>}>
          <FAB onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} options={{ axis: 'x', bounds: 'parent' }}>
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </FAB>
        </Suspense>
      }
    </div>
  );
}

export default App;
