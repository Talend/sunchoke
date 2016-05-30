#! /usr/bin/env node
const fs = require('fs');

function insertES6Import(lines, properties) {
    const importToAdd = `import ${properties.module.constant} from './components/${properties.input.kebabName}/${properties.module.fileName}';`;

    // extract components imports
    const componentsImports = lines.map((line, index) => {return {line, index}})
        .filter((entry) => entry.line.indexOf('import') > -1)                   // import ...
        .filter((entry) => entry.line.indexOf('from \'./components/') > -1);    // ... from './components/ ...

    // extract lines before first import
    const firstImportIndex = componentsImports[0].index;
    const linesBefore = lines.filter((line, index) => index < firstImportIndex);

    // extract lines after last import
    const lastImportIndex = componentsImports[componentsImports.length -1].index;
    const linesAfter = lines.filter((line, index) => index > lastImportIndex);

    const allImports = componentsImports.map((imp) => imp.line)
        .concat([importToAdd])  // add new import
        .sort();                // sort by string natural order

    return linesBefore.concat(allImports).concat(linesAfter);
}

function insertNgDependency(lines, properties) {
    // extract index before the first ng dependency
    const moduleStartIndex = lines.map((line, index) => {return {line, index}})
        .filter((entry) => entry.line.indexOf('angular.module(') > -1)
        .map((entry) => entry.index)
        [0];
    // extract index after the last ng dependency
    const moduleStopIndex = lines.map((line, index) => {return {line, index}})
        .filter((entry) => entry.line.indexOf(']);') > -1)
        .map((entry) => entry.index)
        [0];

    const linesBefore = lines.filter((line, index) => index <= moduleStartIndex);
    const linesAfter = lines.filter((line, index) => index >= moduleStopIndex);
    const allDependencies = lines.filter((line, index) => index > moduleStartIndex && index < moduleStopIndex)
        .map((line) => {                                                        // remove commas
            const commaIndex = line.lastIndexOf(',');
            return commaIndex > -1 ? line.substring(0, commaIndex) : line;
        })
        .concat([`    ${properties.module.constant}`])                          // insert new dependency
        .sort()                                                                 // sort by string natural order
        .join(',\n');
        

    return linesBefore.concat(allDependencies).concat(linesAfter);
}


function generateCompleteImports(moduleFilePath, properties) {
    const moduleLines = fs.readFileSync(moduleFilePath)
        .toString()
        .split('\n');

    const linesWithNgDep = insertNgDependency(moduleLines, properties);
    const linesWithImport = insertES6Import(linesWithNgDep, properties);
    return linesWithImport.join('\n');
}

module.exports = (moduleFilePath, properties) => {
    process.stdout.write('Importing component module in ' + moduleFilePath + ' ... ');

    const moduleImport = generateCompleteImports(moduleFilePath, properties);
    fs.writeFileSync(moduleFilePath, moduleImport);

    process.stdout.write('Success\n');
};