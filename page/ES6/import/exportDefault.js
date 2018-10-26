class People{
	constructor(value,age){
		this.name=value
		this.age=age
	}
	show(){
		console.log(`姓名${this.name}年龄${this.age}`)
	}
}
let  name = 'ccy'
let age=23

function show(){
	console.log('show')
}
export default People
export{
	name,
	age,
	show
}

