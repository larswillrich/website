var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./entry.ts",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
			{
				test: /\.less$/,
				loader: "style!css!less"
			},
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
				loader: "html-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            }
        ]
    },

    plugins: [
    ]
};