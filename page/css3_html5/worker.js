console.log(`这里是子线程`)
importScripts('extract.js')//importScripts('extract.js','extract.js2')
// self.onmessage=function(event){
// 	console.log(`主线程传递的数据${event.data}`)
// 	self.postMessage({sucess:'true',message:'成功'}),
// 	self.close()
// }
//等价
// self.addEventListener('message',function(event){
// 	console.log(`主线程传递的数据${event.data}`)
// 	self.postMessage({sucess:'true',message:'成功'}),
// 	self.close()
// })
//等价
addEventListener('message',function(event){
	console.log(`主线程传递的数据${event.data}`)
	self.postMessage({sucess:'true',message:'成功'}),
	self.close()
})

addEventListener('error',function(event){
				
			})
