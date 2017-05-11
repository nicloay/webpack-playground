/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_js = path.resolve(__dirname, 'src');
var dir_build = path.resolve(__dirname, 'build');
var dir_html = path.resolve(__dirname, 'html');


var es5ClassPath = path.resolve(__dirname, 'es5/es5class.js');
var ExternalObjectPath = path.resolve(__dirname, 'src/ExternalObject.es6');

module.exports = {
    entry: [
        //'babel-polyfill',
        path.resolve(dir_js, 'app.es6'),
    ],
    output: {
        path: dir_build,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: dir_build
    },
    module: {
        loaders: [
            { test: es5ClassPath, loaders: [
                'exports-loader?ES5Class',
                'imports-loader?tmp='+ExternalObjectPath,
                'imports-loader?ExternalObject=>tmp.default'
                ]
            },
            {
                loader: 'babel-loader',
                test: dir_js,

                // query: {
                //     plugins: ['transform-runtime'],
                //     presets: ['es2015'],
                // }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: dir_html } // to: output.path
        ]),
        // Avoid publishing files when compilation fails
        new webpack.NoEmitOnErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
    resolve: {
        alias: {
            'es5Class': es5ClassPath,
            'ExternalObject ': ExternalObjectPath
        }
    },
};