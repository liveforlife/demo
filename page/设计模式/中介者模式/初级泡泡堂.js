function Player( name ){
	this.name=name;
	this.enemy=null;
}

Player.prototype.win=function(){
	console.log(this.name + 'won');
}

Player.prototype.lost=function(){
	console.log(this.name + 'lost');
}

Player.prototype.die= function(){
	this.lost();
	this.enemy.win();
}

let play1 = new Player('皮蛋');
let play2 = new Player('小乖');

play1.enemy = play2;
play2.enemy = play1;

play1.die();