import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/index.js';
import {getToken} from './utils/token.js';
require('./index.html')
require('normalize-css');
getToken();

ReactDOM.render(
  <App />,
  document.getElementById('root') 
);

