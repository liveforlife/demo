var players = [];
function Player( name , teamColor){
	this.name=name;
	this.enemies=[];
	this.partners = [];
	this.state = 'live';
	this.teamColor = teamColor;
}

Player.prototype.win=function(){
	console.log(this.name + 'won');
}

Player.prototype.lost=function(){
	console.log(this.name + 'lost');
}

Player.prototype.die= function(){
	let all_dead = true;
	this.state = 'dead';
	for (let i = 0,partner;partner = this.partners[i++];) {
		if(partner.state !== 'dead'){
			all_dead = false;
			break ; 
		}
	}
	//console.log(this);
	if( all_dead == true){
		this.lost();
		for (let i = 0,partner;partner = this.partners[i++];) {
			partner.lost();
		}
		for (let i = 0,enemy;enemy = this.enemies[ i++ ];) {
			enemy.win();
		}
	}
}

let  playerFactory = function( name , teamColor){
	let newPlayer = new Player(name , teamColor);
	for (let i = 0,player;player = players[ i++ ];) {
		if(player.teamColor === newPlayer.teamColor){
			player.partners.push(newPlayer);
			newPlayer.partners.push(player);
		}else{
			player.enemies.push(newPlayer);
			newPlayer.enemies.push(player);
		}
	}
	players.push(newPlayer);
	return newPlayer;
}

let play1=new playerFactory('皮蛋','red'),
	play2=new playerFactory('小乖','red'),
	play3=new playerFactory('ag','red'),
	play4=new playerFactory('df','red'),
	play5=new playerFactory('gd','red');

let play6=new playerFactory('ert','blue'),
	play7=new playerFactory('uy','blue'),
	play8=new playerFactory('we','blue'),
	play9=new playerFactory('dhf','blue'),
	play10=new playerFactory('et','blue');

play1.die();
play2.die();
play3.die();
play4.die();
play5.die();