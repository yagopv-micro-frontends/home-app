import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderHome = (containerId, props) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  ReactDOM.render(<App {...props} />, container);
};

window.unMountHome = (containerId) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  ReactDOM.unmountComponentAtNode(container);
};
