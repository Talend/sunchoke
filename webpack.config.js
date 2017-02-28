var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

function getLicence() {
    var licenceTemplate = _.template(
        '============================================================================\n' +
        '\n' +
        ' Copyright (C) 2006-<%= year %> Talend Inc. - www.talend.com\n' +
        '\n' +
        ' This source code is available under agreement available at\n' +
        ' https://github.com/Talend/data-prep/blob/master/LICENSE\n' +
        '\n' +
        ' You should have received a copy of the agreement\n' +
        ' along with this program; if not, write to Talend SA\n' +
        ' 9 rue Pages 92150 Suresnes, France\n' +
        '\n' +
        ' ============================================================================');
    return licenceTemplate({year: new Date().getFullYear()});
}

function getDefaultConfig(options) {
    return {
        entry: path.resolve(__dirname, './src/sunchoke.module.js'),
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'sunchoke.js'
        },
        externals: {
            'angular': 'angular'
        },
        module: {
            preLoaders: [],
            loaders: [
                {test: /\.js$/, loaders: ['ng-annotate', 'babel'],  exclude: [/node_modules/]}
            ]
        },
        plugins: [
            new webpack.BannerPlugin(getLicence()),
            new webpack.ProvidePlugin({
                'angular': 'angular'
            })
        ],
        babel: {
            presets: ['es2015']
        },
        devtool: options.devtool,
        debug: options.debug,
        webpackMiddleware: {
            stats: {
                chunks: false
            }
        }
    };
}

function addMinifyConfig(config) {
    config.output.filename = 'sunchoke.min.js';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
}

function addStripCommentsConfig(config) {
    config.module.preLoaders.push({test: /\.js$/, loader: "stripcomment", exclude: [/node_modules/, /\.spec\.js$/]});
}

function addTestConfig(config) {
    config.isparta = {
        embedSource: true,
        noAutoWrap: true,
        babel: {
            presets: ['es2015']
        }
    };
    config.module.preLoaders.push({test: /\.js$/, loader: 'isparta', exclude: [/node_modules/, /\.spec\.js$/]});
}

function addLinterConfig(config) {
    config.eslint = {configFile: '.eslintrc'};
    config.module.preLoaders.push({
        test: /src\/.*\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
    });
}

module.exports = function(options) {
    var config = getDefaultConfig(options);

    if(options.minify) {
        addMinifyConfig(config);
    }

    if(options.stripComments) {
        addStripCommentsConfig(config);
    }

    if(options.test) {
        addTestConfig(config);
    }

    if(options.linter) {
        addLinterConfig(config);
    }

    return config;
};
