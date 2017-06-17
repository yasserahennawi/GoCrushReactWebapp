import {getParameterByName} from '../utils/helper.js';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
// Function to save the returned token from the queryparameter into the Cookies and then remove it from the URI
export function getToken() {
  if ( getParameterByName('token') != null ) {
    cookies.set('Authorization', getParameterByName('token'));
    window.location.href = '/#/';
  } 
}

