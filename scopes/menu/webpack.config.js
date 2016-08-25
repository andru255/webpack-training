var webpack = require("webpack");

module.exports = {
    entry: {
        component: ["./src/index.js"],
        example: "./example.js"
    },
    output: {
        path: __dirname + "/bin",
        libraryTarget: "umd",
        filename: "example.js",
        library: "menu"
    },
    module:{
        loaders: [
            {test: /\.jade$/, loader: "jade"},
            {test: /\.css$/, loader: "style!css"}
        ]
    },
    resolve: {
        extension: [" ", ".js"]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            "component",
            "component.js"
        )
    ]
};
