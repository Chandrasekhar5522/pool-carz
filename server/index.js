var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(4000,()=>console.log('server running at port no'+ 4000));
// console.log('the server listening port no'+ app.listen(4000) );