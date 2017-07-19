/**
 * Created by hamidbehnam on 7/11/17.
 */

const webpack = require('webpack');
const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const combineLoaders = require('webpack-combine-loaders');
const PORT = process.env.PORT || 8088;

module.exports = function (options) {
    const customizedCommonConfig = commonConfig({
        jsLoaders: combineLoaders([
            {
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ])
    });

    const additionalConfigProperties = {
        devtool: 'cheap-module-source-map',
        plugins: [
            new webpack.LoaderOptionsPlugin({
                debug: true
            })
        ],
        devServer: {
            port: PORT,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            historyApiFallback: true
        }
    };

    const result = webpackMerge(customizedCommonConfig, additionalConfigProperties);
    // console.log(result);
    return result;
};
