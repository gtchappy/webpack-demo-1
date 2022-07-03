const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        // filename: 'index.js'
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '高天赐',
            template: 'src/assets/test.html',
        })
    ]
};
