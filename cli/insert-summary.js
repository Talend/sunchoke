#! /usr/bin/env node
const fs = require('fs');

function generateSummary(summaryFilePath, properties) {
    const newWidgetSummary = `* [${properties.widget.description}](${properties.input.kebabName}/README.md)
    * [Documentation](${properties.input.kebabName}/documentation.md)`;

    return fs.readFileSync(summaryFilePath)
        .toString()                         // get summary content as string
        .split('\n\n')                      // split to have each widget part
        .map((widget) => widget.trim())     // remove unwanted spaces/line/ ...
        .concat([newWidgetSummary])         // add the new one
        .sort()                             // sort by natural string order
        .join('\n\n');                      // join by adding a line between each part
}

module.exports = (summaryFilePath, properties) => {
    process.stdout.write('Importing widget in ' + summaryFilePath + ' ... ');

    const completeSummary = generateSummary(summaryFilePath, properties);
    fs.writeFileSync(summaryFilePath, completeSummary);

    process.stdout.write('Success\n');
};