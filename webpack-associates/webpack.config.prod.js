/**
 * Created by hamidbehnam on 7/11/17.
 */

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = function (options) {
    const customizedCommonConfig = commonConfig({});

    const additionalConfigProperties = {
        plugins: [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin()
        ]
    };

    const result = webpackMerge(customizedCommonConfig, additionalConfigProperties);
    // console.log(result);
    return result;
};

