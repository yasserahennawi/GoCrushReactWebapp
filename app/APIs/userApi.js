import request from 'superagent-bluebird-promise';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// Session API that authorize the user
export function authUser() {
  return request
    .get(`http://localhost:4567/api/users/session`)
    .set('Authorization', cookies.get('Authorization'));
}
