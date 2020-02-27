let a=3;
let arr=[0,1,2,3,4];

function map(){
	arr.forEach(item =>{
		if(item === a){
			return ; 
		}
		console.log(item);
	})
	console.log('end');
}
map();
console.log('-------------');

function mapTwo(){
	for(let i = 0;i<6;i++){
		if(i === a){
			return ;
		}
		console.log(i);
	}
	console.log('end');
}

mapTwo();
console.log('-------------');

function mapTere(){
	for(let i = 0;i<6;i++){
		if(i === a){
			break ;
		}
		console.log(i);
	}
	console.log('end');
}

mapTere();

console.log('-------------');


function mapFour(){
	for(let i = 0;i<6;i++){
		if(i === a){
			continue ;
		}
		console.log(i);
	}
	console.log('end');
}

mapFour();

console.log('-------------');

outer:for(let i =0;i<5;i++){
	inner:for(let j=0;j<5;j++){
		if(i === 2 && j === 2)
			break outer;
		console.log(i,j);
	}
}

console.log('-------------');


outer:for(let i =0;i<5;i++){
	inner:for(let j=0;j<5;j++){
		if(i === 2 && j === 2)
			break inner;
		console.log(i,j);
	}
}

console.log('-------------');

outer:for(let i =0;i<5;i++){
	inner:for(let j=0;j<5;j++){
		if(i === 2 && j === 2)
			continue outer;
		console.log(i,j);
	}
}

console.log('-------------');

outer:for(let i =0;i<5;i++){
	inner:for(let j=0;j<5;j++){
		if(i === 2 && j === 2)
			continue inner;
		console.log(i,j);
	}
}

console.log('-------------');