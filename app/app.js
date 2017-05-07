import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/index.js';
import {getToken} from './utils/token.js';
import request from 'superagent-bluebird-promise';
require('./index.html')
require('normalize-css');
getToken();

ReactDOM.render(
  <App />,
  document.getElementById('root') 
);

