/* Hello, World! program in node.js */
console.log("Initiating.....")
var http = require("http");
var express = require("express");

http.createServer(
function(request, response) {
	response.writeHead(200,{'Content-Type':'text/plain'});
response.end("It's Jitender's server responding");
}
).listen(8081);
console.log("server running at http://127.0.0.1:8081/");