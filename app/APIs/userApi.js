import request from 'superagent-bluebird-promise';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// Session API that authorize the user
export function authUser() {
  return request
    .get(`http://apigocrush.herokuapp.com/api/users/session`)
    .set('Authorization', cookies.get('Authorization'))
    .then((data)=>{
      return data.body
    })
}
