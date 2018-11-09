const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const webpack=require('webpack');
const path=require('path');
let cleanPath=['dist'];

module.exports={
    output:{
        path:path.resolve(__dirname+"/dist"),
        filename:'[name].[hash].js'
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
        
        new CleanWebpackPlugin(cleanPath),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            
            {
                test:/\.pug$/,
                use:['raw-loader','pug-html-loader']
            }
        ]
    }
}
