/**
 * 实现功能：
 * 	1、定义基本全局事件 Event
 * 	2、根据需要，复制订阅发布功能
 * 	3、订阅 发布 删除 功能
 */
let Event={
	clientList:[],
	listen:function(key,fn){
		if(!this.clientList[key]){
			this.clientList[key]=[]
		}
		this.clientList[key].push(fn);
	},
	trigger:function(){
		let key=Array.prototype.shift.call(arguments),
			fns=this.clientList[key];
		if(!fns || fns.length === 0){
			return false
		}
		for (let i =0,fn;fn=fns[i++];) {
			fn.apply(this,arguments);
		}
	},
	remove:function(key,fn){
		let fns=this.clientList[key];
		if(!fns){
			return false
		}
		if(fn){
			fns && (fns.length = 0);
		}else{
			for(let i=fns.length-1;i>=0;i--){
				let _fn=fns[i];
				if(fn === _fn){
					fns.splice(i,1);
				}
			}
		}
	}
}
let installEvent=function(obj){
	for (let i in Event) {
		obj[i]=Event[i];
	}
}

let saleOffices={};
installEvent(saleOffices);

saleOffices.listen('squareMeter88', fn1 =function(price,squareMeter){
	console.log('价格',price);
	console.log('面积',squareMeter);
})
saleOffices.listen('squareMeter110',function(price,squareMeter){
	console.log('价格',price);
	console.log('面积',squareMeter);
})

saleOffices.remove('squareMeter88',fn1);
saleOffices.trigger('squareMeter88',20000,88);
saleOffices.trigger('squareMeter88',28000,88);
saleOffices.trigger('squareMeter110',30000,99);
