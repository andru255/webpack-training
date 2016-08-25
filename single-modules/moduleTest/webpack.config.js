module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname + "/bin",
        libraryTarget: "umd",
        filename: "module.js",
        library: "ModuleA"
    }
};
