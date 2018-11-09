var merge=require('webpack-merge')
var prodeEnv=require('./prod.env.js')

module.exports=merge(prodeEnv,{
    NODE_ENV:'"development"'
})