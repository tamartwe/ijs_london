const http = require('http');

var server = http.createServer((req, res) => {
 for (var i=0; i<1000; i++) {
   server.on('request', function listener() {});
 }

 res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
server.setMaxListeners(0);

console.log('Server running at http://127.0.0.1:1337/. Process PID: ', process.pid);
