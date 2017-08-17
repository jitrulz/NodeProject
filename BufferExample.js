var fs = require("fs");
var data = fs.readFile('input.txt',
function( err, data){
if(err) return console.error(err);
//console.log(data.toString());
buf = new Buffer(256);
//len = buf.write(data.toString());
buf.write(data.toString());
var JsonDataValue = buf.toJSON();
//console.log(JsonDataValue);
//console.log(buf.toString());
//console.log("Octets Written: "+len);

buf2 = new Buffer("Jitender");
var concatenatedBuffer = Buffer.concat([buf, buf2]);
console.log(concatenatedBuffer.toString());
console.log("------going to compare buffers");
var result = buf.compare(buf2);
console.log("compare result= "+ result);
buf.copy(buf2);
console.log("buf="+buf);
console.log("buf2="+buf2);
console.log("sliced buffer buf="+buf.slice(0,9));
}
);
console.log("File read operation completed");