// run with 'node _test_pipe.js'
// exports a 'copy.json' file (same as original file)
// test changes if any with 'diff data.json copy.json'

// require core file system module
var fs = require('fs');

// create read and write streams
// pipe data from readable stream to the writable stream. creating a copy of data
var stream = fs.createReadStream('data.json');
var writable = fs.createWriteStream('copy.json');

// send all data to stdout (all contents to terminal screen)
stream.pipe(process.stdout);

// pipes data to writable stream we just created. 
// copies all data on readable stream to file on other end of writable stream.
// data handled in chunks behind the scenes
stream.pipe(writable);