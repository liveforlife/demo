let objectPoolFactory=function(createobjFn){
	let objectPool=[];
	return {
		create:function(){
			let obj = objectPool.length === 0 ?
				createobjFn.apply(this,arguments) : objectPool.shift();
			return obj ;
		},
		recover:function(obj){
			objectPool.push(obj);
		},
	}
}

let iframeFactory=objectPoolFactory(function(){
	let iframe=document.createElement('iframe');
	document.body.appendChild(iframe);
	iframe.onlad=function(){
		iframe.onlad=null; // 防止 iframe 重复加载
		iframeFactory.recover(iframe);
	}
	return iframe;
})
	