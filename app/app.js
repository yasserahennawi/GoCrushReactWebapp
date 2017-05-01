import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/index.js';
require('./index.html')
require('normalize-css');


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

