const express = require("express");
const path = required('path');

const app = express();

app.use(express.static(__dirname + '/dist/myApp'))

app.length('/*', function(req,res){
  res.sendFile(path.join(__dirname + '/dist/myApp/index.html'))
});

app.listen(process.env.PORT);
