#! /usr/bin/env node
const _ = require('lodash');
const fs = require('fs');

function generateLicence() {
    const year = new Date().getFullYear();
    const template = fs.readFileSync(__dirname + '/templates/template.licence.txt').toString();
    return _.template(template)({year: year});
}

module.exports = (filePath, templateUrl, properties) => {
    process.stdout.write('Creating ' + filePath + ' ... ');
    const licence = generateLicence();
    const template = fs.readFileSync(templateUrl).toString();

    const componentContent = _.template(template)(properties);
    const fileContent = licence + componentContent;

    fs.writeFileSync(filePath, fileContent);
    process.stdout.write('Success\n');
};
