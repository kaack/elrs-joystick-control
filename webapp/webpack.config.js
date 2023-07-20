// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');


module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        fallback: {
            fs: require.resolve('browserify-fs'),
        }
    },
    module: {
        rules: [
            {
                test: /LICENSE/,
                use: 'raw-loader',
            },
            {
                test: /\.yaml$/,
                use: 'yaml-loader'
            },
            {
                test: /\.json$/,
                type: 'json'
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: false,
                        presets: [
                            '@babel/preset-react',
                            ['@babel/preset-env', {targets: "defaults"}]
                        ],
                        plugins: [
                            '@babel/plugin-syntax-export-default-from',
                            '@babel/plugin-proposal-export-default-from'
                        ]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: false,
                        presets: [
                            '@babel/preset-react',
                            ['@babel/preset-env', {targets: "defaults"}]
                        ],
                        plugins: [
                            '@babel/plugin-syntax-export-default-from',
                            '@babel/plugin-proposal-export-default-from'
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: 'public'}
            ]
        }),
        new NodePolyfillPlugin()
    ],
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true
    },
};