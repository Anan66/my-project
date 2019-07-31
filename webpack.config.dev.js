const path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  {
        index: './src/index',
    },
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: '[name][hash:5].bundle.js' //这个[name]指的是
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [ 
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    {
                        loader: 'css-loader'
                    }, 
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }                    
                ]
            },
            
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name][hash:5].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'main.html',
            removeComments: true,
        }),
      
        new CleanWebpackPlugin(),
    ],


    mode: 'development'
}