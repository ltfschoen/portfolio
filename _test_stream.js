// run from terminal with 'node _test_stream' with 'data.json' file in same directory

// require core file system module
var fs = require('fs');

// call createReadStream method of fs. creating a stream from data.json
// instead of reading whole contents of file data at once. it creates stream
// reads data one chunk at a time
var stream = fs.createReadStream('data.json');

// calling pause method of the stream. 
// pauses stream before event listeners respond to incoming chunk of data
stream.pause();

console.log('paused');

// call setTimeout, passing in 1000ms (1s). 
// callback fn waits 1s before resuming the stream.
setTimeout(function() {
	console.log('resuming...');
	stream.resume(); // restarts stream. event listeners again receive chunks
}, 1000);

// define listeners for data event as functions that accept a chunk as the 
// single argument. in listener we mark beginning and end of each chunk.
// and converting chunk to a string.
stream.on('data', function (chunk) {
	console.log('----------------begin chunk----------------');
	console.log(chunk.toString());
	console.log('----------------end chunk----------------');
});

// define another listener for the chunk. outputs the length of the chunk.
stream.on('data', function (chunk) {
	console.log('CHUNK LENGTH WAS: ' + chunk.length);
});

// define final listener for the chunk. waiting for stream end before firing.
stream.on('end', function  () {
	console.log('----------------reached file end----------------');
});