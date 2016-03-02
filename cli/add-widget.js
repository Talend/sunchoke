#! /usr/bin/env node
const fs = require('fs');
const inquirer = require('inquirer');
const _ = require('lodash');

const createFolder = require('./create-folder');
const createFile = require('./create-file');
const insertSummary = require('./insert-summary');

function getProperties(name) {
    const camelName = _.endsWith(name, 'Component') ? name.substring(0, name.lastIndexOf('Component')) : name;
    const kebabName = _.kebabCase(camelName);
    return {
        input: {
            name: name,
            camelName: camelName,
            kebabName: kebabName
        },
        folder: `./gitbook/${kebabName}`
    }
}

function getAdvancedProperties(inputs) {
    const basis = getProperties(inputs.name);
    const advanced = {
        widget: {
            selector: `sc-${basis.input.kebabName}`,
            description: _.chain(basis.input.camelName).lowerCase().capitalize().value()
        },
        codepen: inputs.codepen
    };
    return _.extend({}, basis, advanced);
}

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your widget name. It must be in camelCase starting with a capital letter first (ex: MySuperAccordion)\n',
        validate: (name) => {
            if (!name.match(/^([A-Z][a-z]+)+$/)) {
                return 'Widget name must be in camelCase starting with a capital letter first (ex: MySuperAccordion)';
            }

            const properties = getProperties(name);
            if (fs.existsSync(properties.folder)) {
                return `Error : The Widget ${properties.input.name} already exists.`;
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'codepen',
        message: 'What is the codepen (ex: codepen://jso-technologies/ZWYrbz) ?\n',
        validate: (name) => {
            if (!name.match(/^codepen:\/\/([A-Za-z\-_]+)\/[A-Za-z]+$/)) {
                return 'The codepen must be "codepen://<username>/<codepen_hash>"';
            }
            return true;
        }
    }
];

function createComponent(inputs) {
    const properties = getAdvancedProperties(inputs);

    createFolder(properties.folder);
    createFile(properties.folder + '/README.md', __dirname + '/templates/template.README.md', properties);
    createFile(properties.folder + '/documentation.md', __dirname + '/templates/template.documentation.md', properties);
    insertSummary('./gitbook/SUMMARY.md', properties);
}

inquirer.prompt(questions, createComponent);