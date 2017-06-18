const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => Merge(CommonConfig(env), {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../build')
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name].[contenthash].css')
    ]
});