// 500元 订单
let order500=function(orderType,pay,stock){
	if(orderType === 1 && pay){
		console.log('500元定金预期，得到100优惠券')
	}else{
		order200(orderType,pay,stock);
	}
}
//200元 订单
let order200=function(orderType,pay,stock){
	if(orderType === 2 && pay){
		console.log('200元定金预期，得到50优惠券')
	}else{
		orderNormal(orderType,pay,stock);
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

order500(1,true,500);
order500(1,false,500);
order500(2,true,500);
order500(3,false,500);
order500(3,false,0);