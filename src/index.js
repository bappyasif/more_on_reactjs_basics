import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Routes } from './about_routers/getting_to_know_reactRouter/Routes';

ReactDOM.render(
  <React.StrictMode>
    <App />,
    {/* <Routes /> */}
  </React.StrictMode>,
  document.getElementById('root')
);