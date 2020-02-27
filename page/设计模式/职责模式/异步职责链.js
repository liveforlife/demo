let chain=function(fn){
	this.fn=fn;
	this.successor=null;
}

chain.prototype.setNextSuccessor=function(successor){
	return this.successor=successor;
}

chain.prototype.passRequest=function(){
	let ret = this.fn.apply(this,arguments);
	if(ret ==='nextSuccessor'){
		return this.successor && this.successor.passRequest.apply(this.successor,arguments)
	}
	return ret;
}

chain.prototype.next=function(){
	return this.successor && this.successor.passRequest.apply(this.successor,arguments);
}

let fn1=new chain(function(){
	console.log('1');
	return 'nextSuccessor';
})

let fn2=new chain(function(){
	console.log('2');
	let self = this;
	setTimeout(function(){
		self.next();
	},500)
})

let fn3=new chain(function(){
	console.log('3');
})
fn1.setNextSuccessor(fn2).setNextSuccessor(fn3);

fn1.passRequest();