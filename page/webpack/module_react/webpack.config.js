const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname+'/dist'),
        filename:'[name].[chunkhash].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'main.html',
            minify:{
                collapseWhitespace:true
            },
            hash:true,
        })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:['babel-loader'],
                exclude:/node_modules/
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}