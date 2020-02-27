
function Player( name , teamColor){
	this.name=name;
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
	this.state = 'dead';
	playerDirector.ReceiveMessage('playDead',this);
}

Player.prototype.remove= function(){
	playerDirector.ReceiveMessage('removePlayer',this);
}

Player.prototype.changeTeam= function(color){
	playerDirector.ReceiveMessage('changeTeam',this,color);
}

let  playerFactory = function( name , teamColor){
	let newPlayer = new Player(name , teamColor);
	playerDirector.ReceiveMessage('addPlayer',newPlayer);
	return newPlayer;
}

let playerDirector=(function(){
	let players = [];
	let opearations = {};
	opearations.addPlayer=function(player){
		let teamColor = player.teamColor;
		players[teamColor] = players[teamColor] || [];
		players[teamColor].push(player);
		
	};
	opearations.removePlayer=function(val){
		let teamColor=val.teamColor;
		teamPlayers = players[teamColor] || [];
		for (let i = teamPlayers.length-1;i>=0;i--) {
			if(teamPlayers[i] == val){
				teamPlayers.splice(i,1);
			}
		}
	};
	opearations.playDead=function(player){
		let teamColor = player.teamColor;
		partners = players[teamColor] || [];
		let all_dead = true;
		for (let i = 0,partner;partner = partners[i++];) {
			if(partner.state !== 'dead'){
				all_dead = false;
				break ; 
			}
		}
		//console.log(this);
		if( all_dead == true){
			for (let i = 0,partner;partner = partners[i++];) {
				partner.lost();
			}
			for(let color in players){
				if(color !== teamColor){
					let teamPlayers = players[ color ];
					for (let i = 0 ;player = teamPlayers[i++];) {
						player.win();
					}
				}
			}
// 			for (let i = 0,enemy;enemy = this.enemies[ i++ ];) {
// 				enemy.win();
// 			}
		}
	};
	opearations.changeTeam=function(player,color){
		opearations.removePlayer(player);
		player.teamColor = color;
		opearations.addPlayer(player);
	};
	let ReceiveMessage=function(){
		let message = Array.prototype.shift.call(arguments);
		// console.log(message,opearations[message]);
		opearations[message].apply(this,arguments);
	}
	return {
		ReceiveMessage :ReceiveMessage,
	}
})()

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

// play1.die();
// play2.die();
// play3.die();
// play4.die();
// play5.die();

// play1.remove();
// play2.remove();
// play3.die();
// play4.die();
// play5.die();

play6.changeTeam('red');
play1.remove();
play2.remove();
play3.remove();
play4.die();
play5.die();
play6.die();