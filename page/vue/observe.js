let target
function obse(data){
	let sb=[]
	for(key in data){
		let val= data[key]
		Object.defineProperty(data,key,{
			set(newval){
				if(newval == val) return
				val=newval
				sb.forEach(item=>{
					item()
				})
			},
			get(){
				sb.push(target)
				return val
			}
		})
	}
}

let data={
	'a':2,
	'b':5,
	cc:{
		c:10
	}
}
obse(data)
function watch(str,fn){
	target=fn
	if(/\./.test(str)){
		let abl=str.split('.')
		let dat
		abl.forEach(item =>{
			dat=data[item]
		})
		return
	}
	data[str]
}
data.a=3
watch('a',function(){
	console.log('aaa')
})
watch('b',function(){
	console.log('bbb')
})
watch('cc.c',function(){
	console.log('bbb')
})
