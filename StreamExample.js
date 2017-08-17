var fs = require("fs");
var data ='';
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data',
function(d) {
data+= d;
}

	);

readerStream.on('end',
	function(){
		console.log("printing data = "+ data);
	});
readerStream.on('error',
	function(err){
console.log("printing error = " + err);
	});


///// ----- write readerStream ----- /////

var dataToBeWritten = "This data has been written by writeStream in this file";

var writeStream = fs.createWriteStream('output.txt');
writeStream.write(dataToBeWritten,'UTF8');


writeStream.on('finish',
function(){
	console.log("writing finished");
}
	);
writeStream.on('error',
function(er){
	console.log("printing error stack:" + er.stack);
}
	);



///// ----- Piping stream ----- /////

readerStream.pipe(writeStream);
console.log('piping completed');

//writeStream.end();


///// ----- compress and decompress a file ----- /////
var zlib  = require('zlib');
var writerSteamGz = fs.createWriteStream('input.txt.gz');

readerStream.pipe(zlib.createGzip()).pipe(writerSteamGz);
console.log("file compressed");


fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input.txt'));
console.log("file de-compressed");
