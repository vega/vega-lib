const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 5000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}