let Beverage = function(){};

Beverage.prototype.boilWater=function(){
	console.log('把水烧沸')
}

Beverage.prototype.brew=function(){
	
}

Beverage.prototype.pourInCup=function(){
	
}
Beverage.prototype.addCondiments=function(){};

Beverage.prototype.init=function(){
	this.boilWater();
	this.brew();
	this.pourInCup();
	this.addCondiments();
};

let Coffee= function(){};

Coffee.prototype=new Beverage();

Coffee.prototype.brew=function(){
	console.log('用沸水冲咖啡')
}

Coffee.prototype.pourInCup=function(){
	console.log('咖啡导入杯子中')
}
Coffee.prototype.addCondiments=function(){	
	console.log('加入糖、牛奶')
};

let coffee= new Coffee();
coffee.init();
