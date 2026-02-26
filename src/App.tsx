import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Me from './routes/Me';
import Projects from './routes/Projects';
import CourseWork from './routes/CourseWork';
import NavBar from './components/NavBar';
import PageTransition from './components/PageTransition';
import { navs } from './types/nav';

const App: FC = () => {
  return (
    <div className="flex h-[100svh] max-h-[100dvh] w-full flex-col overflow-hidden select-text">
      <NavBar navs={navs} />
      <div
        id="main-content"
        className="flex min-h-0 flex-1 flex-col overflow-y-auto"
        tabIndex={-1}
      >
        <Routes>
          <Route element={<PageTransition />}>
            <Route path="/" element={<Home />} />
            <Route path="me" element={<Me />} />
            <Route path="projects/*" element={<Projects />} />
            <Route path="courses" element={<CourseWork />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
