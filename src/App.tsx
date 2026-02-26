import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Me from './routes/Me';
import Projects from './routes/Projects';
import NavBar from './components/NavBar';
import { navs } from './types/nav';

const App: FC = () => {
  return (
    <div className="h-[100svh] max-h-[100dvh] flex w-full select-text flex-col overflow-hidden">
      <NavBar navs={navs} />
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="me" element={<Me />} />
          <Route path="projects/*" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
