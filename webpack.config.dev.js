module.exports = require("./webpack.config")({
    devtool: "inline-source-map",
    debug: true,
    stripComments: true,
    linter: true
});