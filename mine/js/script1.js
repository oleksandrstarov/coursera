var element = document.getElementsByClassName('cell')[0];


//assume that we have matrix with even amount of rows
var elementsArray = [];
var x = 0;
var row = 0;
var column = 0;
var bombs = 3;
var maxColumn = 0;
while(element){
  var element = document.getElementsByClassName('cell')[elementsArray.length];
  if(element) {
    if(x != 0 && x != element.getBoundingClientRect().top){
      maxColumn = column;
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
    if(elementsArray[index].element.innerHTML != '*'){
      elementsArray[index].element.innerHTML = '*';
      setMarks(index);
    }
    else continue;
    bombs--;
  }
}

console.log('max' + maxColumn + " row "+ row);
function setMarks(index){
  var cellObject = elementsArray[index];
  //console.log(cellObject);
  var currentRow = cellObject.row;
  var currentColumn = cellObject.column;
  console.log(currentRow + " " + currentColumn );

  if(currentColumn > 0){
    setCellValue(index-1);
    if(currentRow > 0) {
      setCellValue(index-1-maxColumn);
      setCellValue(index-maxColumn);
      if(currentColumn < maxColumn-1) setCellValue(index+1-maxColumn);
    }
  }else{
    if(currentRow > 0) {
      setCellValue(index-maxColumn);
      if(currentColumn < maxColumn-1) setCellValue(index+1-maxColumn);
    }
  }

  if(currentColumn < maxColumn - 1){
    setCellValue(index+1);
    if(currentRow < row) {
      setCellValue(index+maxColumn);
      setCellValue(index+1+maxColumn);
      if(currentColumn > 0)setCellValue(index-1+maxColumn);
    }
  }else{
    if(currentRow < row) {
      setCellValue(index-1+maxColumn);
      setCellValue(index+maxColumn);
    }
  }



  function setCellValue(targetIndex){
    if(elementsArray[targetIndex].element.innerHTML == "*") return null; //skip such elements;
    var currentCellValue = 0;
    var elementValue = elementsArray[targetIndex].element.innerHTML;
    if(elementValue.length > 0)currentCellValue = Number.parseInt(elementValue);
    console.log(elementValue + " elementValue");

    console.log(currentCellValue + " currentCellValue");
    elementsArray[targetIndex].element.innerHTML = currentCellValue + 1;
  }
}
