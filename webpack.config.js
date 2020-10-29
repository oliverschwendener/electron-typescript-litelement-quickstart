const path = require("path");

const isProductionBuild = process.env.NODE_ENV === "production";

const mode = isProductionBuild ? "production" : "development";
const devtool = isProductionBuild ? undefined : "source-map";

console.log(`Build mode: ${mode}`);

const outDir = path.join(__dirname, "bundle");

const commonConfig = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },

    target: "electron-renderer",
    resolve: {
        extensions: [".ts", ".js"],
    },
    mode,
    node: false,
    devtool,
};

const mainConfig = {
    entry: path.join(__dirname, "src", "main", "main.ts"),
    output: {
        filename: "main.js",
        path: outDir,
    },
    target: "electron-main",
};

const rendererConfig = {
    entry: path.join(__dirname, "src", "renderer", "renderer.ts"),
    output: {
        filename: "renderer.js",
        path: outDir,
    },
};

module.exports = [
    Object.assign(commonConfig, mainConfig),
    Object.assign(commonConfig, rendererConfig),
];
