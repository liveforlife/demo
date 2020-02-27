let id = 0;

let Upload=function(uploadType){
	this.uploadType = uploadType;
}

Upload.prototype.delFile=function(){
	uploadManager.setExternalState(id,this);
	if(this.fileSize <1000){
		return this.dom.parentNode.removeChild(this.dom);
	}
	if(window.confirm('确定要删除该文件吗？'+this.fileName)){
		return this.dom.parentNode.removeChild(this.dom);
	}
}

let UploadFactory =(function(){
	let createdFlyWeightObjs={};
	return {
		create:function(uploadType){
			if(createdFlyWeightObjs[uploadType]){
				return createdFlyWeightObjs[uploadType]
			}
			return createdFlyWeightObjs[uploadType] = new Upload(uploadType);
		}
	}
})()

let uploadManager=(function(){
	let uploadDatabase = {};
	return {
		add:function(id,uploadType,fileName,fileSize){
			let flyWeightObj=UploadFactory.create(uploadType);
			this.dom=document.createElement('div');
			this.dom.innerHTML='<span>文件名'+this.fileName+'文件大小'+this.fileSize+'</span>'+
				'<button class="delFile"></button>';
			this.dom.querySelector('.delFile').onclick=function(){
				that.delFile(id)
			}
			document.body.appendChild(this.dom);
			uploadDatabase[i]={
				fileName:fileName,
				fileSizeLfileSize,
				dom:dom,
			}
			return flyWeightObj;
		},
		setExternalState:function(id,flyWeightObj){
			let uploadData=uploadDatabase[id];
			for(let i in uploadDatabase){
				flyWeightObj[i]=uploadDatabase[i];
			}
		};
	}
})();

window.startUpload = function(uploadType,files){
	for (let i = 0,file;file = files[i++] ; ) {
		//let uploadObj=new Upload(uploadType,file.fileName,file.fileSize);
		//uploadObj.init(id++);
		let uploadObj = uploadManager.add(++id,uploadType,file.fileName,file.fileSize)
	}
}


startUpload('plugin',[
	{
		fileName:'1.txt',
		fileSize:1000
	},
	{
		fileName:'2.txt',
		fileSize:1000
	},
	{
		fileName:'3.txt',
		fileSize:1000
	},
	{
		fileName:'4.txt',
		fileSize:1000
	},
	{
		fileName:'5.txt',
		fileSize:1000
	},
])

startUpload('flash',[
	{
		fileName:'5.txt',
		fileSize:1000
	},
	{
		fileName:'6.txt',
		fileSize:1000
	},
	{
		fileName:'7.txt',
		fileSize:1000
	},
	{
		fileName:'8.txt',
		fileSize:1000
	},
	{
		fileName:'9.txt',
		fileSize:1000
	},
])

