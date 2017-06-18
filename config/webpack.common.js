const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = env => ({
    entry: {
        main: ['./src/index.js', './src/index.less'],
        polyfills: 'babel-polyfill'
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
            include: /src/,
            use: [
                'file-loader?outputPath=images/'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            include: /bootstrap/,
            use: [
                'file-loader?outputPath=fonts/'
            ]
        }, {
            test: /\.html$/,
            use: [
                'raw-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.ejs',
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