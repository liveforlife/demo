let Folder=function(name){
	this.name=name;
	this.files=[];
	this.parent=null;
}

Folder.prototype.add=function(file){
	this.files.push(file);
	file.parent=this;
}

Folder.prototype.remove=function(){
	if(!this.parent){
		return;
	}
	for (let files = this.parent.files,l=files.length-1;l>= 0 ;l--) {
		let file=files[l];
		if(file === this){
			files.splice(l,1);
		}
	}
}

Folder.prototype.scan=function(){
	console.log('开始扫描文件夹：' + this.name);
	for (let i =0;i<this.files.length;i++) {
		this.files[i].scan();
	}
}

let File=function(name){
	this.name=name;
	this.parent=null;
}

File.prototype.add=function(){
	throw new Error('文件下面不能再添加文件');
}

File.prototype.remove=function(){
	if(!this.parent){
		return;
	}
	for (let files = this.parent.files,l=files.length-1;l>= 0 ;l--) {
		let file=files[l];
		if(file === this){
			files.splice(l,1);
		}
	}
}

File.prototype.scan=function(){
	console.log('开始扫描文件：'+this.name);
}

let folder1=new Folder('学习资料');
let folder2=new Folder('JavaScript');
let folder3=new Folder('jQuery');

let file1 = new File('JavaScript设计');
let file2 = new File('jQuery设计');
let file3 = new File('学习资料重构与模式');

folder1.add(file1);
folder1.add(file2);

folder2.add(file2);
folder2.add(file3);

folder3.add(file3);
folder3.add(file1);

folder1.add(folder2);
folder1.add(folder3);

folder1.scan();
console.log('-----------------');
folder2.remove();
folder1.scan();