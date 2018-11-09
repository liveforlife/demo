let config=require('../config')
let common=require('./webpack.common.js')
let merge=require("webpack-merge")
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const webpack=require('webpack');

module.exports=merge(common,{
    entry:{
        "app.bundle":"./src/main.js",
        "contect":"./src/js/contect.js"
    },
    devtool:"cheap-module-eval-source-map",
    plugins:[
        new ExtractTextPlugin('style.css'),
        new webpack.DefinePlugin({
            'process.env':config.build.env
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })            //['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })    //['style-loader','css-loader','sass-loader']
            },
        ]
    }
})