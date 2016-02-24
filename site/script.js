console.log('started');
var currentLine;

window.onload = function(){
	currentLine = document.getElementById('text');

	var buttonOne = document.getElementById('1');
	var buttonTwo = document.getElementById('2');
	var buttonThree = document.getElementById('3');
	var buttonFour = document.getElementById('4');
	var buttonFive = document.getElementById('5');
	var buttonSix = document.getElementById('6');
	var buttonSeven = document.getElementById('7');
	var buttonEight = document.getElementById('8');
	var buttonNine = document.getElementById('9');
	var buttonZero = document.getElementById('0');
	
	buttonOne.onclick = function(){
		console.log(this.innerHTML);
		updateLine(this.innerHTML);
	};
	buttonTwo.onclick = function(){
		console.log(this.innerHTML);
		updateLine(this.innerHTML);
	};
	buttonThree.onclick = function(){
		console.log(this.innerHTML);
		updateLine(this.innerHTML);
	};
	buttonFour.onclick = function(){
		console.log(this.innerHTML);
		updateLine(this.innerHTML);
	};
	buttonFive.onclick = function(){
		console.log(this.innerHTML);
		updateLine(this.innerHTML);
	};
	buttonSix.onclick = function(){
		console.log(this.innerHTML);
		updateLine(this.innerHTML);
	};
	buttonSeven.onclick = function(){
		console.log(this.innerHTML);
		updateLine(this.innerHTML);
	};
	buttonEight.onclick = function(){
		console.log(this.innerHTML);
		updateLine(this.innerHTML);
	};
	buttonNine.onclick = function(){
		console.log(this.innerHTML);
		updateLine(this.innerHTML);
	};
	buttonZero.onclick = function(){
		console.log(this.innerHTML);
		updateLine(this.innerHTML);
	};



}

function updateLine(value){
	if(currentLine.innerHTML == '0')currentLine.innerHTML = value;
	else currentLine.innerHTML = currentLine.innerHTML + value;
}
