const uglifyjsPlugin = require("uglifyjs-webpack-plugin")
const webpackMerge = require("webpack-merge")
const baseConfig = require("./base.config")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = webpackMerge(baseConfig,{
    plugins:[
        new uglifyjsPlugin(),
        new htmlWebpackPlugin({
            template:"index.html"
        }),
    ],
})

