## npm install html-webpack-plugin --save-dev html 打包 

### 简单配置：

    "dev": "webpack  -d --watch",
    "prod": "webpack -p"
    new HtmlWebpackPlugins({
        // title:'hello world',
        template:'./src/index.html',
        filename:'main.html',
        minify:{
            collapseWhitespace:true
        },
        hash:true
    })

## npm install style-loader css-loader --save-dev

* 简单配置：
    import css from './css/mian.css'
    {
        test:/\.css/,
        use:['style-loader','css-loader']
    },

## npm install sass-loader node-sass --save-dev

* 简单配置：
    import css from './css/main.scss'
    {
        test:/\.scss/,
        use:['style-loader','css-loader','sass-loader']
    }

## npm install --save-dev extract-text-webpack-plugin  抽离css文件

* 简单配置：
    const ExtractTextPlugin=require('extract-text-webpack-plugin');
    new ExtractTextPlugin('style.css')
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
    }

* 问题报错：

    (node:9968) DeprecationWarning: Tapable.plugin is deprecated. Use new API on 
* 原因：版本不支持

* 解决：npm install --save-dev extract-text-webpack-plugin@next

## npm install  -g webpack-dev-server  npm install  --save-dev webpack-dev-server

* 简单配置
    "dev": "webpack-dev-server",
    "prod": "webpack -p"
    devServer:{
        port:9001,
        open:true,
    },

## npm install clean-webpack-plugin --save-dev

* 简单配置
    const CleanWebpackPlugin=require('clean-webpack-plugin');
    let cleanPath=['dist'];
    new CleanWebpackPlugin(cleanPath)

## npm install --save-dev pug raw-loader pug-html-loader pug为jade修改而来

* 简单配置
    {
        test:/\.pug$/,
        use:['raw-loader','pug-html-loader']
    }

## npm install --save-dev babel-preset-es2015   模块热

* 简单配置
    const webpack=require('webpack');
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

## npm install --sava-dev file-loader 对一些对象作为文件来处理，然后可以返回它的URL。 url 引入文件或图片

* 简单配置
    {
        test:/\.(png|gif|jpe?g|svg)$/i,
        use:[
            {
                loader:'file-loader',
                options:{
                    name:'[name].[ext]',
                    outputPath:'images/'
                }
            }
        ]
    }

## npm install --save-dev html-loader 标签src引入文件或图片

* 简单配置
    {
        test:/\.html$/i,
        use:[
            {
                loader:'html-loader',
                options:{
                    minimize:true
                }
            }
        ]
    }

## npm install image-webpack-loader --save-dev 压缩图片文件

* 简单配置
    {
        loader:'image-webpack-loader',
        options:{
            bypassOnDebug:true
        }
    }

## ProvidePlugin 遇到或处理 jQuery 或 $ 都会去自动加载 jquery 这个库

* 简单配置
     new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

## 添加静态代码检测工具 ESLint

    * 方法一
        npm install --save-dev eslint eslint-loader 下载eslint和eslint加载器
        npm install -- save-dev babel-loader@7 babel-core Es6转码成ES5
        {
            test:/\.js$/,
            exclude:/node_moodules/,
            use:["babel-loader","eslint-loader"]
        }

## 开发和生产的配置差别

    * css抽取插件：extract-text-webpack-plugin，开发时，和模块热冲突，修改不会发生改变，配置： disable: true
        new ExtractTextPlugin({ filename: 'style.css',
            disable: true
        }),
    * devtool:打包类型，不同环境使用不同类型的打包；小、中型项目中，eval-source-map；大型项目中，cheap-module-eval-source-map
    *boostrap加载区分

## 问题

    * /css文件抽离和webpack-dev-server 不能共用
    * /多个文件css文件抽离会共用  ----没问题
    * /package.json 中set NODE_ENV=production webpack中无法判断
    * /webpack.dev.config.js webpack.prod.config.js 中的process.env.NODE_ENV 无用
    * /image-webpack-loader 压缩没有起作用
    * /抽离css到css文件夹中，css中的路径不对。----css解析中加入 publicPath:'../'