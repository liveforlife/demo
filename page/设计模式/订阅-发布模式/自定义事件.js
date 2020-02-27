/**
 * 实现功能：
 * 	1、简单的订阅发布功能
 * 	2、订阅可根据key ,订阅对应消息
 */
let saleOffices={};

saleOffices.clentList=[];

saleOffices.listen=function(key,fn){
	if(!this.clentList[key]){
		this.clentList[key]=[]
	}
	this.clentList[key].push(fn);
}

saleOffices.trigger=function(){
	let key=Array.prototype.shift.call(arguments),
	fns=this.clentList[key];
	if(!fns || fns.length === 0){
		return false
	}
	for (let i = 0 , fn;fn = fns[i++];) {
		fn.apply(this,arguments);
	}
}

saleOffices.listen('squareMeter88',function(price,squareMeter){
	console.log('价格',price);
	console.log('面积',squareMeter);
})
saleOffices.listen('squareMeter110',function(price,squareMeter){
	console.log('价格',price);
	console.log('面积',squareMeter);
})

saleOffices.trigger('squareMeter88',20000,88);
saleOffices.trigger('squareMeter88',28000,88);
saleOffices.trigger('squareMeter110',30000,99);