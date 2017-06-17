const express = require('express');

let app = express();

const PORT = process.env.PORT || 1111;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
  console.log('express server is up on port' + PORT )
})