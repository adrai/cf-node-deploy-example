var lodash = require('lodash'),
    own_a = require('own_a');


  var http = require('http');
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Just for CF! ;-)\n');
  }).listen(process.env.PORT);