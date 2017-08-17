var http = require('http');
var fs = require('fs');
var url = require('url');


//creating server //
http.createServer(
function(req, res){
var pathname = url.parse(req.url).pathname;
console.log("pathname="+pathname);

fs.readFile(pathname.substr(1),
function(err, data){
	if(err) {
		console.log(err.stack);
		res.writeHead(404,{'Content-Type':'text/html'});
	} else {
		res.writeHead(200,{'Content-Type':'text/html'});
	}
res.write(data.toString());
res.end();
} //end function

); //end readfile

}// end createserver
).listen(8081);

console.log('server running at http://127.0.0.1:8081/')