var fs=require('fs')

var readfile=function (url){
	return new Promise((resolve,reject)=>{
		fs.readFile(url,(err,data)=>{
			if(err){
				reject(err)
			}
			resolve(data)
		})
	})
}

readfile('data/a.txt').then(res=>{
	console.log(res.toString())
	return readfile('data/b.txt')
}).then(res=>{
	console.log(res.toString())
	return readfile('data/c.txt')
}).then(res=>{
	console.log(res.toString())
})
