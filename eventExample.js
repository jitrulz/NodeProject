var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log("connection successful");
	eventEmitter.emit('fetchData');
}

eventEmitter.on('fetchData',
function(){
	console.log("data received scucesfully");

}
	);

//var dataHandler = function fetch(){
//	console.log("data received scucesfully");
//}
//eventEmitter.on('fetchData',dataHandler);
eventEmitter.on('connect',connectHandler);
eventEmitter.emit('connect');
console.log("Program ended");