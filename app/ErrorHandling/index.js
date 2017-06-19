export function getUserErrorMessage(e){
  var errorObject = e.res.body
  var errorMessage = errorObject.message;
  var errorCode = errorObject.code;
  
  const getIdRegex = /\-([A-z0-9]*)\'/g;

  switch(errorCode) {
    case "DB_ERROR":
      switch(errorMessage) {
        case "Max number of crushes reached":
          return "Max Number Yastaaaaaa";
        default:
          if(errorMessage.includes("Duplicate entry")) {
            var id =  getIdRegex.exec(errorMessage);
            return "You have entered this before yastaaaa :( el ragel dah IDeho : " + id[1];
          }
          return "Sorry, it's a Database Error yastaaaaaaaa";
      }
    case "INVALID_URL":
      return "Invalid url Yastaaaaaa";
    case "FB_ERROR":
      switch(errorMessage) {
        case 'String index out of range: -1':
          return "Lazem yCrush 3ala 7ad :(";
        default:
          return errorMessage;
      }
    case "BAD_JWT" :
      switch(errorMessage) {
        case 'Token is null':
          window.location.href = '/#/login';
          return null;
        default:
          return errorMessage;
      }
    default:
      return "there is a Error";
  }
}