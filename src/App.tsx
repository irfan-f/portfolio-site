import { useState, useEffect, FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import CourseWork from './routes/CourseWork';
import UnderDevelopment from './components/misc/UnderDevelopment';
import NavBar from './components/core/NavBar';

export interface Nav {
  id: string;
  name: string;
}

const navs: Nav[] = [
  {
    id: 'projects',
    name: 'Projects',
  },
  // {
  //   id: 'coursework',
  //   name: 'Coursework',
  // },
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
  // State to track if it's the first load
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Effect to handle first load
  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);

  return (
    <div className='' style={{ backgroundColor: isFirstLoad ? '#0c1826' : 'unset' }}>
      <UnderDevelopment />
      <NavBar navs={navs} />
      <>
        <Routes>
          <Route key='main' path='/' element={<Home />} />
          {navs.map((stack) => {
            const ComponentToUse = components[stack.id];
            return (
              <Route key={stack.id} path={stack.id} element={<ComponentToUse />} />
            );
          })}
        </Routes>
      </>
    </div>
  );
};

export default App;
