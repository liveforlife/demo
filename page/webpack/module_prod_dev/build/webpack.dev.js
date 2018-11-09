let common=require('./webpack.common.js')
let merge=require('webpack-merge')

module.exports=merge(common,{
    entry:{
        "app.bundle":"./src/main.js",
        "contect":"./src/js/contect.js"
    },
    devtool:"inline-source-map",
    devServer:{
        port:9001,
        inline: true,
        contentBase:'./dist',
        open:true,
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
        ]
    }
})