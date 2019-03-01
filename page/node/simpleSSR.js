let Vue=require('vue')
let server=require('express')()

let {createRenderer}=require('vue-server-renderer')

server.get('*',(req,res)=>{
	const app=new Vue({
		data:{
			url:req.url
		},
		template:`<div>访问的 URL 是：{{url}}</div>`
	})
	const renderer = createRenderer({
	  template:require('fs').readFileSync('component/simpleSSR.html','utf-8')
	})

	renderer.renderToString(app,(err,html)=>{
		if(err){
			res.status(500).end('Internal Server Error')
			return
		}
		res.end(html)
	})
})

server.listen(8092)