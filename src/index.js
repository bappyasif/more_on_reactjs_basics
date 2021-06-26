import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Routes } from './about_routers/getting_to_know_reactRouter/Routes';

// regular script
ReactDOM.render(
  <React.StrictMode>
    <App />,
    {/* <Routes /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// to enable hot module replacement with webpack
if(module.hot) {
  module.hot.accept("./App", () => {
    ReactDOM.render(
      <React.StrictMode>
        <App />,
      </React.StrictMode>,
      document.getElementById('root')
    )   
  })
}