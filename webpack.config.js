module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        // filename: 'index.js'
        filename: '[name].[contenthash].js'
    }
};