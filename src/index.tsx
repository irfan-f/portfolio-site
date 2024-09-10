import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { IconContext } from 'react-icons';
import useTheme from './helpers/useTheme';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const RootComponent = () => {
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
          <App />
        </IconContext.Provider>
      </Router>
    </React.StrictMode>
  );
};

root.render(<RootComponent />);