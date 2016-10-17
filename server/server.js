// We use node's http module to create a server.

var http = require('http');



// Every server needs to listen on a port with a unique number. The
// standard port for HTTP servers is port 80, but that port is
// normally already claimed by another server and/or not accessible
// so we'll use a standard testing port like 3000, other common development
// ports are 8080 and 1337.

var port = 3000;


// For now, since you're running this server on your local machine,
// we'll have it listen on the IP address 127.0.0.1, which is a
// special address that always refers to localhost.
var ip = '127.0.0.1';


// The function we pass to http.createServer will 
//be used to handle all incoming requests.
//
// After creating the server, 
//we will tell it to listen on the given port and IP. */
//
// We need to have a router to tell the server
//what path olllj                  



var server = http.createServer( function(req, res) {
  console.log('headers', req.headers);
  // console.log('hello client');
  res.write('writing');
  res.end();

});

server.listen(port, ip);
console.log('server listening');