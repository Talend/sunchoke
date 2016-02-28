#! /usr/bin/env node
const fs = require('fs');

function generateCompleteImports(moduleFilePath, properties) {
    const moduleLines = fs.readFileSync(moduleFilePath)
        .toString()
        .split('\n');

    const moduleStartIndex = moduleLines.map((line, index) => {return {line, index}})
        .filter((entry) => entry.line.indexOf('angular.module(') > -1)
        .map((entry) => entry.index)
        [0];
    const moduleStopIndex = moduleLines.map((line, index) => {return {line, index}})
        .filter((entry) => entry.line.indexOf(']);') > -1)
        .map((entry) => entry.index)
        [0];

    const linesBefore = moduleLines.filter((line, index) => index <= moduleStartIndex);
    const linesAfter = moduleLines.filter((line, index) => index >= moduleStopIndex);
    const dependencies = moduleLines.filter((line, index) => index > moduleStartIndex && index < moduleStopIndex)
        .map((line) => {
            const commaIndex = line.lastIndexOf(',');
            return commaIndex > -1 ? line.substring(0, commaIndex) : line;
        });

    const allDependencies = dependencies
        .concat([`        '${properties.module.name}'`])
        .sort()
        .join(',\n');

    return linesBefore.concat(allDependencies).concat(linesAfter).join('\n');
}

module.exports = (moduleFilePath, properties) => {
    process.stdout.write('Importing component module in ' + moduleFilePath + ' ... ');

    const moduleImport = generateCompleteImports(moduleFilePath, properties);
    fs.writeFileSync(moduleFilePath, moduleImport);

    process.stdout.write('Success\n');
};