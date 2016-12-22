var shape;
var filled = [];
function setup() {
  createCanvas(400,600);
  frameRate(3);

  shape = new Shape((width-40*2)/2);
}

function draw() {
  background(200);
  shape.update(10);
  shape.show();

  if(shape.hasLanded(filled)){
    filled.push(shape);
    shape = new Shape();
  }
  fillButtom(filled);
}

function fillButtom(filled){
  for(var i = 0; i < filled.length; i++){
    shape.colorShape(filled[i].currentShape);
    for(j = 0; j < filled[i].squares.length; j++){
        rect(filled[i].squares[j].x, filled[i].squares[j].y, 40, 40);
    }
  }
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
    shape.changeDir(-40, 0);
  }else if (keyCode === RIGHT_ARROW){
    shape.changeDir(40, 0);
  } if(keyCode === UP_ARROW){
    shape.rotate();
  }
}

function keyTyped(){
  if(key === ' '){
    shape.rotate();
  }
}
