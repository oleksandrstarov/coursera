console.log('started');
var currentLine;
var digitArray = [];
var symbolsArray = ['mult', 'divide', 'plus', 'minus', 'equals'];
var expression = [];
var operations = [];
var prevActionOperation = false;
var argumentOne = null;
var result = 0;
window.onload = function(){
	currentLine = document.getElementById('text');
	for(var i=0; i<11; i++){
		digitArray.push(document.getElementById(i));
		digitArray[digitArray.length - 1].onclick = function(){
			console.log(this.innerHTML);
			updateLine(this.innerHTML);
		};
	};

	for(var i=0; i<symbolsArray.length; i++){
		var symbol = document.getElementById(symbolsArray[i]);
		console.log(symbolsArray[i]);
		symbol.onclick = function(){
			console.log(this.innerHTML);
			operation(this.innerHTML);
		}
	}
	console.log(digitArray);
};

function updateLine(value){
	if(value == '.' && String(currentLine.innerHTML).indexOf(value) > 0) return null;
	if(prevActionOperation) currentLine.innerHTML = 0;
	if(currentLine.innerHTML == '0')currentLine.innerHTML = value;
	else currentLine.innerHTML = currentLine.innerHTML + value;
	prevActionOperation = false;
};

function operation(element){
	if (!prevActionOperation) {

			switch (element) {
				case '+':
					argumentOne = argumentOne + Number(currentLine.innerHTML);
					break;
				case '-':
					argumentOne = argumentOne - Number(currentLine.innerHTML);
					break;
				case 'x':
					argumentOne = argumentOne * Number(currentLine.innerHTML);
					break;
				case '/':
					argumentOne = argumentOne / Number(currentLine.innerHTML);
					break;
				case 'x':
					argumentOne = argumentOne * Number(currentLine.innerHTML);
					break;
				default:
					argumentOne = argumentOne;
		}

			currentLine.innerHTML = argumentOne;




		prevActionOperation = true;


	}


};
