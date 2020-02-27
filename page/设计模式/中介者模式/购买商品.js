Function.prototype.before=function(beforeFn){
	let self = this;
	return function(){
		beforeFn.apply(this,arguments);
		return self.apply(this,arguments);
	}
}

Function.prototype.after = function(afterFn){
	let self = this;
	return function(){
		let ret = self.apply(this,arguments);
		afterFn.apply(this,arguments);
		return ret ;
	}
}

let a=function(){
	console.log(2);
}

a.before(function(){
	console.log(1);
}).after(function(){
	console.log(3);
})()
