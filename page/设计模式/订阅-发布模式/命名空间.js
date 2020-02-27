/**
 * 实现功能：
 * 	1、先发布后订阅
 * 	2、添加命名空间
 */
let  Event=(function(){
	let global = this,
	Event,_default='default';
	
	Event=function(){
		let _listen,
			_trigger,
			_remove,
			_slice = Array.prototype.slice,
			_shift = Array.prototype.shift,
			_unshift = Array.prototype.unshift,
			namespaceCache = {},
			_create,
			find,
			each = function(ary , fn ){
				let ret;
				for (let i=0,l = ary.length;i<l;i++) {
					let n =ary[i];
					ret=fn.apply(n,i,n)
				}
				return ret;
			};
		_listen = function(key,fn,cache){};
		_remove = function(key,cache,fn){};
		_trigger = function(){};
		_create = function(namespace){
			let namespace = namespace || _default,
			let cache={},
				offlineStack=[],//离线事件
				ret={
					listen:function(key,fn,last){},
					one:function(key,fn,last){},
					remove:function(key,fn){},
					trigger:function(){};
					return namespace ?
						(namespaceCache[namespace] ? namespaceCache[namespace] :
							namespaceCache[namespace] = ret ):
								ret;
				};
			return {
				create:_create,
				one:function(key,fn,last){},
				remove:function(key,fn){},
				listen:function(key,fn,last){},
				trigger:function(){},
			}
		}
	}()
	
	return Event
})()

