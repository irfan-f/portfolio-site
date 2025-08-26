import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);
console.log('Root element:', root);
console.log('hi');
const RootComponent = () => {
  console.log('hello');
  return (
    <React.StrictMode>
      <Router basename={window.location.pathname || ''}>
        <App />
      </Router>
    </React.StrictMode>
  );
};

root.render(<div><h1>hello</h1></div>);
