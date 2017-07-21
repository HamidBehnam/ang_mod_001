/**
 * Created by hamidbehnam on 7/4/17.
 */

const webpack = require('webpack');
const path = require('path');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');

module.exports = function (options) {
    const jsLoaders = options.jsLoaders || combineLoaders([
            { loader: 'ng-annotate-loader' }, // if you wanna use 'ng-annotate-loader' it needs to be "before" babel-loader.
            {
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            }
        ]);

    return {
        entry: {
            app: [helpers.root("src", "app", "root.module.js")],
            vendors: [helpers.root("src", "app", "vendors.js")]
        },
        devtool: 'source-map',
        output: { // if you use publicPath: "abc", "abc" will be added to the scripts path in the final index.html file.
            path: helpers.root("dist"),
            filename: './bundle.[name].js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: jsLoaders
                },
                {
                    test: /\.less$/,
                    use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader?sourceMap" // translates CSS into CommonJS, without `?sourceMap` the css won't be inside a file and it'll be injected as an internal stylesheet.
                    }, {
                        loader: "less-loader?sourceMap" // compiles Less to CSS, without `?sourceMap` the css won't be inside a file and it'll be injected as an internal stylesheet.
                    }]
                },
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader?limit=100000'
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    loader: 'file-loader'
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev')
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['common']
            }),
            new HtmlWebpackPlugin({
                template: helpers.root("src", "_index.html"), // if you mention the filnename property, the final index.html will be generated in that directory, but this has a problem with webpack-dev-server, webpack-dev-server doesn't recognise it.
                env: process.env.NODE_ENV || 'dev',
                chunksSortMode: 'dependency',
                hash: true
            })
        ],
        stats: {
            colors: true
        },
        performance: {
            hints: false
        }
    }
};