import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { IconContext } from 'react-icons';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const RootComponent = () => {
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