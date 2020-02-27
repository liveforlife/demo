Function.prototype.after=function(fn){
	let self = this;
	return function(){
		let ret = self.apply(this,arguments);
		if(ret === 'nextSuccessor'){
			return fn.apply(this,arguments);
		}
		//onsole.log(ret)
		//return ret;
	}
}

// 500元 订单
let order500=function(orderType,pay,stock){
	if(orderType === 1 && pay){
		console.log('500元定金预期，得到100优惠券')
	}else{
		return 'nextSuccessor'
	}
}
//200元 订单
let order200=function(orderType,pay,stock){
	if(orderType === 2 && pay){
		console.log('200元定金预期，得到50优惠券')
	}else{
		return 'nextSuccessor'
	}
}

//普通订单
let orderNormal=function(orderType,pay,stock){
	if(stock > 0){
		console.log('普通订单')	
	}else{
		console.log('库存不足')	
	}
}

let order = order500.after(order200).after(orderNormal);

order(1,true,500);
order(2,true,500);
order(1,false,500);