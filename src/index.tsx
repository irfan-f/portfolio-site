import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { IconContext } from 'react-icons';
import FAB from './components/interactive/FABs/ScrollToTop';
import { createPortal } from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const fabRoot = document.getElementById('fab-root');

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
      { fabRoot &&
        createPortal(<FAB />, fabRoot)
      }
      <Router basename={window.location.pathname || ''}>
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <App />
        </IconContext.Provider>
      </Router>
    </React.StrictMode>
  );
};

root.render(<RootComponent />);