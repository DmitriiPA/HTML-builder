const fs = require('fs');

import * as readline from 'node:readline';
const readline = require('node:readline');


fs.open('./02-write-file/testFile.txt', 'w', (err) => {
  if(err) throw err;
  console.log('File created');
});


const {
    stdin: input,
    stdout: output,
} = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(
        `Thank you for your valuable feedback: ${answer}`
    );

    rl.close();
});
