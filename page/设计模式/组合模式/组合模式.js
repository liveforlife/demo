let MacroCommand=function(){
	return {
		commandList:[],
		add:function(fn){
			this.commandList.push(fn);
		},
		execute:function(){
			for (let i = 0;i<this.commandList.length;i++) {
				this.commandList[i].execute();
			}
		}
	}
}

/**********        叶对象          ***/
let closeDoorCommand={
	execute:function(){
		console.log('打开门')
	}
}

/**********        组合对象          ***/
let openPcCommand={
	execute:function(){
		console.log('打开PC')
	}
}
let openQQCommand={
	execute:function(){
		console.log('打开QQ');
	}
}


let macroCommand1 = new MacroCommand();
macroCommand1.add(openPcCommand);
macroCommand1.add(openQQCommand);


/*** 组合对象 ***/
let openMusicCommand={
	execute:function(){
		console.log('打开音响');
	}
}
let openTVCommand={
	execute:function(){
		console.log('打开TV');
	}
}

let macroCommand2 = new MacroCommand();
macroCommand2.add(openMusicCommand);
macroCommand2.add(openTVCommand);

/** 组建树形结构  **/
let macroCommand = new MacroCommand();
macroCommand.add(closeDoorCommand);
macroCommand.add(macroCommand1);
macroCommand.add(macroCommand2);

macroCommand.execute();
macroCommand.add(closeDoorCommand);