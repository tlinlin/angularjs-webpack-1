const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => Merge(CommonConfig(env), {
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
            && !module.chunks.find(chunk => chunk.name === 'polyfills')
        }),
        new webpack.optimize.CommonsChunkPlugin('manifest'),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new ChunkManifestPlugin({
            inlineManifest: true
        }),
        // new BundleAnalyzerPlugin()
    ]
});