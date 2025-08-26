import { useState, useEffect, FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Me from './routes/Me';
import Projects from './routes/Projects';
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
  {
    id: 'me',
    name: 'About Me'
  }
];

interface Components {
  [key: string]: FC;
}

const components: Components = {
  home: Home,
  me: Me,
  projects: Projects,
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
    <div className="min-h-[100vh] flex flex-col select-text">
      <NavBar navs={navs} />
      <div className="flex-1">
        <Routes>
          <Route key='main' path='/' element={<Home />} />
          {navs.map((stack) => {
            const ComponentToUse = components[stack.id];
            return (
              <Route key={stack.id} path={stack.id} element={<ComponentToUse />} />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default App;
