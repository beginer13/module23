// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "mainset.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.svg$/,
                use : [
                    {
                      loader: 'svg-url-loader',
                      options: {
                        limit: 10000,
                      },
                    },
                  ]
            },

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {  loader: 'file-loader' }
                ]
            }
        ]

    },

    devServer: {
       historyApiFallback: true
    },

    plugins: [
        new HtmlWebpackPlugin ({
        template: "./src/index.html"
        })
    ]   

}