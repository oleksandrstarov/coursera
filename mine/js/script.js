var element = document.getElementsByClassName('cell')[0];


//assume that we have matrix with even amount of rows
var elementsArray = [];
var x = 0;
var row = 0;
var column = 0;
var bombs = 6;
while(element){
  var element = document.getElementsByClassName('cell')[elementsArray.length];
  if(element) {
    if(x != 0 && x != element.getBoundingClientRect().top){
      column = 0;
      row++;
    }
    var point = {
      row: row,
      column: column,
      element: element
    };
    elementsArray.push(point);
    column++;
    x = element.getBoundingClientRect().top;
  }
}
console.log(elementsArray.length);

setBombs();
function setBombs(){
  while(bombs){
    var index = Math.floor((Math.random() * elementsArray.length));
    console.log(index);
    if(elementsArray[index].element.innerHTML != '*') elementsArray[index].element.innerHTML = '*';
    else continue;
    bombs--;
  }
}

/*element.addEventListener("click", function(evt) {
    switch(evt.buttons) {
      case 1: // left mouse
      case 2: // right mouse
      case 3: // middle mouse <- I didn't tested that, I just got a touchpad
    }
    console.log(evt.buttons);
});*/
