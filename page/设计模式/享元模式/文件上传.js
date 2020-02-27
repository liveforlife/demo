let id = 0;
window.startUpload = function(uploadType,files){
	for (let i = 0,file;file = files[i++] ; ) {
		let uploadObj=new Upload(uploadType,file.fileName,file.fileSize);
		uploadObj.init(id++);
	}
}

let Upload=function(uploadType,fileName,fileSize){
	this.uploadType = uploadType;
	this.fileName = fileName ;
	this.fileSize = fileSize ;
	this.dom = null;
}

Upload.prototype.init=function(id){
	let that = this;
	this.id=id;
	this.dom=document.createElement('div');
	this.dom.innerHTML='<span>文件名'+this.fileName+'文件大小'+this.fileSize+'</span>'+
		'<button class="delFile"></button>';
	this.dom.querySelector('.delFIle').onclick=function(){
		that.delFile()
	}
	document.body.appendChild(this.dom);
}

Upload.prototype.delFile=function(){
	if(this.fileSize <1000){
		return this.dom.parentNode.removeChild(this.dom);
	}
	if(window.confirm('确定要删除该文件吗？'+this.fileName)){
		return this.dom.parentNode.removeChild(this.dom);
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

