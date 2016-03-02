#! /usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');
const _ = require('lodash');

const createFolder = require('./create-folder');
const createFile = require('./create-file');
const insertStyleImport = require('./insert-style-import');
const insertModuleImport = require('./insert-module-import');

function getComponentBaseProperties(name) {
    const camelName = _.endsWith(name, 'Component') ? name.substring(0, name.lastIndexOf('Component')) : name;
    const kebabName = _.kebabCase(camelName);
    const input = {
        name: name,
        camelName: camelName,
        kebabName: kebabName
    };

    return {
        input: input,
        folder: {
            path: `./src/components/${input.kebabName}`
        },
        component: {
            name: `Sc${input.camelName}Component`
        }
    }
}

function getComponentProperties(inputs) {
    const name = inputs.name;
    const options = inputs.options;

    const properties = getComponentBaseProperties(name);
    const input = properties.input;
    const description = _.chain(input.camelName).lowerCase().capitalize().value();

    const advancedProperties = {
        module: {
            name: `talend.sunchoke.${properties.input.kebabName}`,
            fileName: `${properties.input.kebabName}.module.js`,
            description: description
        },
        style: {
            isNeeded: options.indexOf('Style') > -1,
            fileName: `_${properties.input.kebabName}.scss`
        },
        component: {
            fileName: `${properties.input.kebabName}.component.js`,
            testFileName: `${properties.input.kebabName}.component.spec.js`,
            selectorCamel: `sc${properties.input.camelName}`,
            selectorKebab: `sc-${properties.input.kebabName}`,
            description: description
        },
        controller: {
            isNeeded: options.indexOf('Controller') > -1,
            name: `Sc${properties.input.camelName}Ctrl`,
            fileName: `${properties.input.kebabName}.controller.js`,
            testFileName: `${properties.input.kebabName}.controller.spec.js`
        }
    };

    return _.merge({}, properties, advancedProperties);
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

            const properties = getComponentBaseProperties(name);
            if (fs.existsSync(properties.folder.path)) {
                return `Error : The widget ${properties.component.name} already exists.`;
            }

            return true;
        }
    },
    {
        type: 'checkbox',
        name: 'options',
        message: 'What do you need for your widget ?\n',
        choices: [
            {name: 'Style', checked: true},
            {name: 'Controller', checked: true}
        ]
    }
];

function createComponent(inputs) {
    const properties = getComponentProperties(inputs);

    createFolder(properties.folder.path);
    createFile(properties.folder.path + '/' + properties.module.fileName, __dirname + '/templates/template.module.txt', properties);
    createFile(properties.folder.path + '/' + properties.component.fileName, __dirname + '/templates/template.component' + (properties.controller.isNeeded ? '-with-controller' : '') + '.txt', properties);
    createFile(properties.folder.path + '/' + properties.component.testFileName, __dirname + '/templates/template.component.spec.txt', properties);
    insertModuleImport('./src/sunchoke.module.js', properties);

    if(properties.style.isNeeded) {
        createFile(properties.folder.path + '/' + properties.style.fileName, __dirname + '/templates/template.style.txt', properties);
        insertStyleImport('./src/css/_components.scss', properties);
    }
    if(properties.controller.isNeeded) {
        createFile(properties.folder.path + '/' + properties.controller.fileName, __dirname + '/templates/template.controller.txt', properties);
        createFile(properties.folder.path + '/' + properties.controller.testFileName, __dirname + '/templates/template.controller.spec.txt', properties);
    }
}

inquirer.prompt(questions, createComponent);