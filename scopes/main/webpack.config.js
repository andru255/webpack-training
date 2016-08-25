module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "build.js"
    },
    resolve: {
        alias: {
            "menu": "../menu/bin/component.js",
            "form": "../form/bin/component.js"
        }
    }
};
