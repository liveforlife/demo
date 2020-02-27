/**
 * 实现 AOP
 * 存有疑惑
 */
Function.prototype.before=function(calback){
	let _this=this;
	return function(){
		calback.apply(this,arguments);
		return _this.apply(this,arguments);
	}
}

Function.prototype.after=function(callback){
	let _this=this;
	return function(){
		let _tha=_this.apply(this,arguments);
		callback.apply(this,arguments);
		return _tha;
	}
}

let func=function(){
	this.name='ccy'
	console.log('2')
}

func.before(function(){
	console.log('1',this.name)
}).after(function(){
	console.log('3',this.name)
})()

/**
 * currying简单思路
 */

let cost=(function(){
	let args=[]
	return function(){
		let  money=0;
		if(arguments.length === 0){
			for(let i=0,len=args.length;i<len;i++){
				money+=args[i];
			}
			return money;
		}else{
			[].push.apply(args,arguments)
		}
	}
})()
cost(100);
cost(1200);
cost(700);
cost(500);
console.log(cost());

/**
 * currying 完整实现
 */

let currying = function(fn){
	let  args=[];
	return function(){
		if(arguments.length === 0){
			return fn.apply(this,args);
		}else{
			[].push.apply(args,arguments);
		}
	}
}

let handleCost=function(){
	let money=0;
	for (let i=0,len=arguments.length;i<len;i++) {
		money+=arguments[i];
	}
	return money
}

handleCost=currying(handleCost);
handleCost(100);
handleCost(21200);
handleCost(700);
handleCost(500);
console.log(handleCost());


/**
 * uncurrying
 */
console.log('-------------------uncurrying--------------------------');
Function.prototype.uncurrying=function(){
	let _that=this;
	return function(){
		console.log(arguments)
		var obj=Array.prototype.shift.call(arguments);
		console.log(obj,arguments)
		return _that.apply(obj,arguments);
	}
}

for (let i=0,fn,ary=['push','shift','forEach'];fn=ary[i++];) {
	Array[fn]=Array.prototype[fn].uncurrying();
}
(function(){
	Array.push(arguments,4);
	console.log(arguments);
})(1,2,3);

/**
 * 节流函数 函数的访问次数过高 throttle
 */
let throttle=function(fn,interval){
	let _that=fn,timer,firstTime=true;
	return function(){
		var args=arguments,
		_me=this;
		if(firstTime){
			_that.apply(_me,args);
			return firstTime=false
		}
		if(timer){
			return false
		}
		timer=setTimeout(function(){
			clearTimeout(timer);//把上一个计时器清掉
			timer=null;
			_that.apply(_me,args);
		},interval | 500)
	}
}


/**
 * 防抖函数 
 */

/**
 * 分时函数
 */
let timeChunk=function(ary,fn,count){
	let t,
	start=function(){
		for (let i=0;i<Math.min(count | 1,ary.length);i++) {
			let obj=ary.shift();
			fn(obj);
		}
	};
	return function(){
		t=setInterval(function(){
			if(ary.length ===0){
				return clearInterval(t);
			}
			start()
		},200)
	}
}

/**
 * 单例模式1
 */

let Sington=function(name){
	this.name=name;
	this.instance=null;
}

Sington.prototype.getName=function(){
	alert(this.name)
}

Sington.getInstance=function(name){
	if(!this.instance){
		this.instance=new Sington(name);
	}
	return this.instance
}
let a=Sington.getInstance('seven1');
let b=Sington.getInstance('seven1');
console.log(a === b);

/**
 * 单例模式2
 */

let SingtonSec=function(name){
	this.name=name;
}

SingtonSec.prototype.getName=function(name){
	alert(name)
}
SingtonSec.getInstance=(function(){
	this.instance = null ;
	return function(name){
		if(!this.instance){
			this.instance=new SingtonSec(name);
		}
		return this.instance;
	}
})()
let aa=SingtonSec.getInstance('ser');
let bb=SingtonSec.getInstance('ser');
let cc=SingtonSec.getInstance('sla');
console.log(aa === bb);
console.log(aa === cc);

/**
 * 命名空间
 */

let MyApp={}

MyApp.nameSpace=function(name){
	let spce=name.split('.');
	let current=MyApp;
	for(let i in spce){
		if(!current[spce[i]]){
			current[spce[i]]={};
		}
		current=current[spce[i]];
	}
}
MyApp.nameSpace('div.name');
MyApp.nameSpace('style.css');
MyApp.nameSpace('div.add');
console.log(MyApp);
console.dir(MyApp);