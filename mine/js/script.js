var element = document.getElementsByClassName('cell')[0];
var elements = 0;

//assume that we have matrix with even amount of rows
var elementsArray = [];
var x = 0;
var row = 0;
var column = 0;
var bombs = 6;
while(element){

  var element = document.getElementsByClassName('cell')[elements];
  if(element) {
    if(x != 0 && x != element.getBoundingClientRect().top){
      column = 0;
      row++;
    }
    console.log(row+' ' + column + " " + element);
    var point = {
      row: row,
      column: column,
      element: element
    };
    elementsArray.push(point);
      console.log(elementsArray.length);
    column++;

    x = element.getBoundingClientRect().top;
    //console.log(x);
    elements++;
  }
}
console.log(elements);
console.log(elementsArray);

setBombs();
function setBombs(){
  while(bombs){
    var index = Math.floor((Math.random() * elements));
    console.log(index);
    elementsArray[index].element.innerHTML = '*';


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


//set bombs

var bombs = [[], []];
for(i=1; i <=5; i++){
  for (var j = 1; i <=5; i++) {

  }
}
