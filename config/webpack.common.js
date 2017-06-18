const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = env => ({
    entry: {
        main: './src/index.js',
        styles: './src/index.less'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: ['syntax-dynamic-import']
                }
            }, {
                loader: 'eslint-loader'
            }]
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            })
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.html$/,
            use: [
                'raw-loader'
            ]
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].[contenthash].css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.DefinePlugin(buildProperties(env)),
    ]
});

function buildProperties(env) {
    const properties = {
        'process.env': {
            'PROD': JSON.stringify(env === 'prod')
        }
    };
    const profile = require(`../profiles/profile.${env.profile ? env.profile : 'default'}.js`);
    for (const key in profile) {
        if (profile.hasOwnProperty(key)) {
            properties['process.env'][key] = JSON.stringify(profile[key]);
        }
    }
    return properties
}