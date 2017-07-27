import request from 'superagent-bluebird-promise';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// START: Handling Users's crushes API
export function getMyCrushesPromise() {
  return request.get(`http://apigocrush.herokuapp.com/api/users/${cookies.get('appUserID')}/crushes`)
  .set('Authorization', cookies.get('Authorization'))
  .then((data)=>{
    return data.body;
  })
}
// END: Handling Users's crushes API

// START: Handling getting crushes on user
export function getCrushesOnMePromise(){
  return request.get(`http://apigocrush.herokuapp.com/api/users/${cookies.get('appUserID')}/crushes-on-me-count`)
    .set('Authorization', cookies.get('Authorization'))
    .then((data)=>{
      return data.text
    })
}
// END: Handling crushes on user

// START: Handling adding crush
export function crushOnPromise(crushURL){
  return request.post(`http://apigocrush.herokuapp.com/api/users/${cookies.get('appUserID')}/crushes`)
    .set('Authorization', cookies.get('Authorization'))
    .send(crushURL)
    .then((data)=>{
      return data.body;
    })
}
// END: Handling adding crush

// START: Handling deleting crush
export function deleteCrushPromise(crushFbId) {
  return request.delete(`http://apigocrush.herokuapp.com/api/users/${cookies.get('appUserID')}/crushes/${crushFbId}`)
    .set('Authorization', cookies.get('Authorization'))
    .then((data)=>{
      return data.body;
    })
}
// END: Handling deleting crush

// Helping functions
function addCrushToCache(crush) {
  if (cachedCrushes == null) cachedCrushes = [];
  cachedCrushes.push(crush);
}

function deleteCrushfromCache(crush) {
  var index = getCrushIndex(crush);
  if (index > -1) {
    cachedCrushes.splice(index, 1);
  }
}
function getCrushIndex(crush) {
  for (var i = 0 ; i < cachedCrushes.length; i++) {
    if (cachedCrushes[i].fbCrushID == crush.fbCrushID ) {
      return i;
    }
  }
}
