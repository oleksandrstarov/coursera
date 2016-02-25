
console.log('started');
var currentLine;
var digitArray = [];
var symbolsArray = ['mult', 'divide', 'plus', 'minus', 'equals'];
var argumentOne = null;
var operationSymbol = null;
var newOperation = null;

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
};

function updateLine(value){
	if(value == '.' && String(currentLine.innerHTML).indexOf(value) > 0) return null;
	if(newOperation) currentLine.innerHTML = '';
	newOperation = false;
 	currentLine.innerHTML = currentLine.innerHTML + value;

	if(String(currentLine.innerHTML).indexOf('0') == 0 && String(currentLine.innerHTML).indexOf('.') != 1){
		currentLine.innerHTML = String(currentLine.innerHTML).substring(1);
	};
};

function operation(element){
	if(element == '=' && argumentOne != null && operationSymbol != null){
		console.log('operationSymbol');
		switch (operationSymbol) {
			case '+':
				argumentOne = Number(argumentOne) + Number(currentLine.innerHTML);
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
				break;
		}
		currentLine.innerHTML = argumentOne;
		argumentOne = null;
		operationSymbol = null;
		newOperation = false;
	}
	else{
		console.log(element);
		operationSymbol = element;
		argumentOne = currentLine.innerHTML;
		newOperation = true;
	}

};
