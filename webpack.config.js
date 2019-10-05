var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: ['./demos/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "library.js",
        libraryTarget: 'umd',
        publicPath: '/dist/'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    /*resolve: {
        root: [path.resolve('./styles'), path.resolve('./src')],
        alias: {
            'react-ui.less': path.resolve(__dirname, "styles/import.less")
        }
    },*/
    module: {
        loaders: [
        {
            test: /.jsx?$/,
            loader: 'babel-loader',
            include: [path.resolve(__dirname, "src"), path.resolve(__dirname, 'demos')],
            query: {
                presets: ['es2015', 'react', 'react-hmre']
            }
        },
        {
            test: /\.less$/,
            loader: 'style!css!less'
        }]
    }
};
