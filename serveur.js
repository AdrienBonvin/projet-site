const express = require("express");
const path = required('path');

const app = express();

app.use(express.static(__dirname + '/dist/clos-adam'))

app.length('/*', function(req,res){
  res.sendFile(path.join(__dirname + '/dist/clos-adam/index.html'))
});

app.listen(process.env.PORT);
