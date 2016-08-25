var webpack = require("webpack");
module.exports = {
    entry: "./entry.js",
    output:{
        path: __dirname + "/build/",
        filename: "example.js"
    },
    resolve: {
        alias: {
            "ModuleTest": "../moduleTest/bin/module.js"
        }
    }
};
