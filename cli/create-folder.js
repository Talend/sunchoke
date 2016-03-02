#! /usr/bin/env node
var fs = require('fs');

module.exports = (folderPath) => {
    process.stdout.write('Creating folder ' + folderPath + ' ... ');
    fs.mkdirSync(folderPath);
    process.stdout.write('Success\n');
};