const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const webpack=require('webpack');
const path=require('path');
let cleanPath=['dist'];

module.exports={
    //entry:"./src/main.js",
    // output:{
    //     path:__dirname+"/dist",
    //     filename:'bundle.js'
    // },
    entry:{
        "app.bundle":"./src/main.js",
        "contect":"./src/js/contect.js"
    },
    output:{
        path:path.resolve(__dirname+"/dist"),
        filename:'[name].[hash].js'
    },
    devServer:{
        port:9001,
        open:true,
        hot:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            // title:'hello world',
            template:'./src/index.html',
           //template:'./src/pug/index.pug',
           filename:'main.html',
            minify:{
                collapseWhitespace:true
            },
            hash:true,
            excludeChunks:['contect']
        }),
        new HtmlWebpackPlugin({
            // title:'hello world',
            template:'./src/components/contact.html',
            filename:'contect.html',
            minify:{
                collapseWhitespace:true
            },
            hash:true,
            chunks:['contect']
       }),
        new ExtractTextPlugin('style.css'),
        new CleanWebpackPlugin(cleanPath),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
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
            {
                test:/\.pug$/,
                use:['raw-loader','pug-html-loader']
            }
        ]
    }
}
