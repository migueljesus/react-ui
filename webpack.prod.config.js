var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: ['./src/library.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "library.js",
        libraryTarget: 'umd',
        publicPath: '/dist/'
    },
    /*resolve: {
        root: [path.resolve('./styles'), path.resolve('./src')],
        alias: {
            'react-ui.less': path.resolve(__dirname, "styles/import.less")
        }
    },*/
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src'),
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader", 'less-loader?root=' + path.resolve(__dirname, 'styles/import.less'))
        }]
    },
    plugins: [new ExtractTextPlugin('library.less'), new ExtractTextPlugin('library.css')]
};
