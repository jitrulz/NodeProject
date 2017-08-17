var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html',function(req,res){
	res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function(req, res){
	responseJSON = {
		firstname:req.query.first_name,
		lastname:req.query.last_name
	};
	
	console.log(responseJSON);
	res.end(JSON.stringify(responseJSON));
});


var server = app.listen(8081, function(){
	var host = server.address().host;
	var port = server.address().port;
	console.log("Server for HTML listening at http://%s:%s",host, port);
});
