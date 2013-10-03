var http_server_module = require("http-server");
var webserver = http_server_module.createServer( { root: "../web" } );

webserver.listen(8123);