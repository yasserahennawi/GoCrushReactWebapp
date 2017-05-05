import request from 'superagent-bluebird-promise';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

var cachedCrushes;

// START: Handling Users's crushes API
export function getMyCrushesPromise() {
  if (cachedCrushes == null) {
    request.get(`http://localhost:4567/api/users/${cookies.get('appUserID')}/crushes`)
    .set('Authorization', cookies.get('Authorization'))
    .then((data)=>{
      cachedCrushes = data;
      return data;
    });
  }
  return new Promise(function (resolve) {
    resolve(cachedCrushes);
  })
  .then((data)=>{
    return data;
  });
}
// END: Handling Users's crushes API

// START: Handling getting crushes on user
export function getCrushesOnMePromise(){
  request.get(`http://localhost:4567/api/users/${cookies.get('appUserID')}/crushes-on-me-count`)
    .set('Authorization', cookies.get('Authorization'))
}
// END: Handling crushes on user

// START: Handling adding crush
export function crushOnPromise(crushURL){
  request.post(`http://localhost:4567/api/users/${cookies.get('appUserID')}/crushes`)
    .set('Authorization', cookies.get('Authorization'))
    .then((data)=>{
      addCrushToCache(data);
      return data;
    })
}
// END: Handling adding crush

// START: Handling deleting crush
export function deleteCrushPromise(crushURL) {
  request.delete(`http://localhost:4567/api/users/${cookies.get('appUserID')}/crushes/${crushURL}`)
    .set('Authorization', cookies.get('Authorization'))
    .then((data)=>{
      deleteCrushfromCache(data);
      return data;
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

