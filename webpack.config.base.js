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
    ],
    module: {
        rules: [
            {
              test:/\.(png|svg|jpg|gif)$/,
              use:["file-loader"]
            },
            {
                test: /\.styl$/,
                loader: ['style-loader', 'css-loader', 'stylus-loader'], // style --> css
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader'], // less --> css
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader", // js字符串 --> style标签
                    "css-loader",//css --> js字符串
                    {
                        loader: "sass-loader",//sass --> css
                        options: {
                            implementation: require('dart-sass')
                        }
                    },
                ],
            },
        ],
    },
};
