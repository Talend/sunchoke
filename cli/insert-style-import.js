#! /usr/bin/env node
const fs = require('fs');

function generateCompleteImports(sassFilePath, properties) {
    const createdStyleImport = `@import "../components/${properties.input.kebabName}/${properties.input.kebabName}";`;

    const allLines = fs.readFileSync(sassFilePath)
        .toString()
        .split('\n');

    const importsLines = allLines.filter((line) => line.trim() && line.indexOf('@import') > -1);
    const firstImportIndex = allLines.indexOf(importsLines[0]);
    const lastImportIndex = allLines.indexOf(importsLines[importsLines.length - 1]);
    const linesBefore = allLines.filter((line, index) => index < firstImportIndex);
    const linesAfter = allLines.filter((line, index) => index > lastImportIndex);
    const allImports = importsLines
        .concat([createdStyleImport])
        .sort()
        .join('\n');

    return linesBefore.concat(allImports).concat(linesAfter).join('\n');
}

module.exports = (sassFilePath, properties) => {
    process.stdout.write('Importing sass file in ' + sassFilePath + ' ... ');

    const styleImports = generateCompleteImports(sassFilePath, properties);
    fs.writeFileSync(sassFilePath, styleImports);

    process.stdout.write('Success\n');
};