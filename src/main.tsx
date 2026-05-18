import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { preloadIcons } from './iconCache';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Missing #root');
const root = rootEl;

function renderApp() {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <HelmetProvider>
        <Router>
          <App />
        </Router>
      </HelmetProvider>
    </React.StrictMode>,
  );
}

void preloadIcons().then(renderApp);
