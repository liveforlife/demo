let http=require('http')
let hostname='127.0.0.1'
let port=8090

//var server=http.createServer(function(req,res){
//	res.setHeader('Content-Type','text/plain')
//	res.end('Holle nodeJs')
//})
//server.listen(port,hostname,function(){
//	console.log(`hostName : ${hostname} ;port : ${port}`)
//})
let com=require('./require/Common.js')
console.log(com.count)
com.addCount()
console.log(com.count)
http.createServer(function(req,res){
	res.setHeader('Content-Type','text/plain')
	res.end('Holle nodeJs')
}).listen(port, hostname, function () {
	debugger
	console.log(`hostName : ${hostname} ;port : ${port}`)
})