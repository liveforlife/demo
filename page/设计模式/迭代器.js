let reverseEach=function(arr,callback){
	for (let i= arr.length-1;i>=0;i--) {
		callback(i,arr[i])
	}
}

reverseEach([1,2,3],function(i,n){
	console.log(i,n,'reverseEach')
})