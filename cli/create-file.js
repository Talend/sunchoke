#! /usr/bin/env node
const _ = require('lodash');
const fs = require('fs');

module.exports = (filePath, templateUrl, properties) => {
    process.stdout.write('Creating ' + filePath + ' ... ');

    const template = fs.readFileSync(templateUrl).toString();
    const fileContent = _.template(template)(properties);
    fs.writeFileSync(filePath, fileContent);

    process.stdout.write('Success\n');
};