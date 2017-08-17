var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log("listener1 executed");
}


var listener2 = function listener2(){
	console.log("listener2 executed");
}
eventEmitter.addListener('connect',listener1);
eventEmitter.addListener('connect',listener2);

eventEmitter.emit('connect');
eventEmitter.removeListener('connect',listener1);
console.log("Listener1 will not listen now");
var eventListenerCount = require('events').EventEmitter.listenerCount(eventEmitter,'connect');
console.log(eventListenerCount +" Listner(s) listening to connect event");

