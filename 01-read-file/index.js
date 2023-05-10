const fs = require('fs');
const path = require('node:path');
var readStream = fs.createReadStream('./01-read-file/text.txt'); 
var data = '';
readStream.on('data', function(chunk) { 
data += chunk; 
}).on('end', function() { 
console.log(data); 
}); 

