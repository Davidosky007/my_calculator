import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './components/Router';

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root'),
);
