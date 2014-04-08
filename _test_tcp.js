// test with 'node _test_tcp.js'
// open new terminal tab. connect to server with 'telnet localhost 7777'.
// then type a msg. msg typed will be echoed back to user and recorded in log file.
// CTRL+] then type 'quit' to exit

// require core net module of node
var net = require('net');

// require file system module
var fs = require('fs');

// create server with createServer method of 'net' module.
// arg is a callback function that controls how server works
var server = net.createServer(function  (connect) {

	// create writable stream to a log file
	var log = fs.createWriteStream('project.log');

	console.log('Connection established');

	// define listener to the 'end' event. 'end' event triggers log to the console.
	connect.on('end', function() {
	console.log('Connection ended');
	});

	// write lines to the duplex stream of the tcp connection. writable and readable.
	connect.write("Welcome to our airline customer hotline.\r\n");
	connect.write("We call it ELI: the Electronic Listening Interface.\r\n");
	connect.write("We'll repeat back your message and log it for further review.\r\n");

	// read and write all data from and to the source connection stream.
	// piping data to separate writable log file stream.
	connect.pipe(connect).pipe(log);

});

// start server with listen method. args: port number, callback fn exec when server ready
server.listen(7777, function() {

	console.log('Server ready on port 7777');

});