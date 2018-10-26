var fs=require('fs');

var readFile=function (fileName){
	return new Promise((resolve,reject)=>{
		fs.readFile(fileName,(err,data)=>{
			if(err){
				reject(err)
			}
			resolve(data)
		})
	})
}

async function fn(){
//	let a=await readFile('data/a.txt')
//	let b=await readFile('data/b.txt')
//	let c=await readFile('data/c.txt')
	try{
		let a=await readFile('data/a.txt')
		let b=await readFile('data/b.txt')
		let c=await readFile('data/c.txt')
	}catch(e){
		
	}
	console.log(typeof a,a.toString())
	console.log(b.toString())
	console.log(c.toString())
}
fn()
