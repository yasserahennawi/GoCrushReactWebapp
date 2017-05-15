export function errorHandler(e){
  var errorObject = e.res.body
  var errorMessage = errorObject.message;
  var errorCode = errorObject.code;
  console.log("initial errorMessage", errorMessage);
  console.log("initial errorObject", errorObject);
  switch(errorCode) {

    case "DB_ERROR":
      switch(errorMessage) {
        case "Max number of crushes reached":
          return "Max Number Yastaaaaaa";
          break;
        default:
          if(errorMessage.includes("Duplicate entry")) {
            var idPiece = errorMessage.substr(errorMessage.indexOf("-") + 1);
            var id =  idPiece.substr(0 , idPiece.indexOf("'"));
            return "You have entered this before yastaaaa :( el ragel dah IDeho :" + id;
          }
          return "Sorry, it's a Database Error yastaaaaaaaa";
      }
    break;

    case "INVALID_URL":
      return "Invalid url Yastaaaaaa";
      break;
    default:
      return "there is a Error";
  }
}