const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*const MiniCssExtractPlugin = require("mini-css-extract-plugin");*/

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            /*favicon: "./src/assets/images/favicon.ico"*/
        }),
        /*new MiniCssExtractPlugin()*/
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build')
        },
        port: 3000
    }, 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            /*{
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader"
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }*/
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}