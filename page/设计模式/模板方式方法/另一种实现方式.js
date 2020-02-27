let Beverage=function(param){
	let boilWater=function(){
		console.log('把水煮沸')
	}
	let brew=param.brew || function(){
		throw new Error('必须传入brew方法');
	}
	let pourInCup = param.pourInCup || function(){
		throw new Error('必须传入pourInCup方法');
	}
	
	let addCondiments= param.addCondiments || function(){
		throw new Error('必须传入addCondiments方法');
	}
	
	let F=function(){};
	
	F.prototype.init=function(){
		boilWater();
		brew();
		pourInCup();
		addCondiments();
	}
	return F
}

let Coffee=Beverage({
	brew:function(){
		console.log('用沸水冲咖啡')
	},
	pourInCup:function(){
		console.log('咖啡导入杯子中')
	},
	addCondiments:function(){	
		console.log('加入糖、牛奶')
	},
})

let coffee=new Coffee();
coffee.init();