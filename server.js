const express = require('express');

let app = express();

const PORT = process.env.PORT || 1111;

app.use('/build', express.static(__dirname + '/app/build'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/app/index.html');
})

app.listen(PORT, function(){
  console.log('express server is up on port' + PORT )
})