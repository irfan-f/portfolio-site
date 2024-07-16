import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { IconContext } from 'react-icons';
import AppearanceToggle from './components/AppearanceToggle';
import useTheme from './helpers/useTheme';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const RootComponent = () => {
  const { theme, applyTheme } = useTheme();

  useEffect(() => {
    const bodyElement = document.body;
    if (bodyElement) {
      bodyElement.style.backgroundColor = '';
      bodyElement.classList.add('bg-primary');
    }
  }, []);

  return (
    <React.StrictMode>
      <Router basename={window.location.pathname || ''}>
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <AppearanceToggle theme={theme} applyTheme={applyTheme} />
          <App />
        </IconContext.Provider>
      </Router>
    </React.StrictMode>
  );
};

root.render(<RootComponent />);