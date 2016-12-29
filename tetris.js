var shape;
var filled = [];
var speed = 30;
function setup() {
  createCanvas(400,600);
  background(200);
  shape = new Shape((width-40*2)/2);
  shape.show();
}

function draw() {
  background(200);
  if(frameCount % speed === 0)
    shape.update(10);
  shape.show();

  if(shape.hasLanded(filled)){
    filled.push(shape);
    shape = new Shape();
    shape.show();

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
  if(keyCode === LEFT_ARROW && shape.canMoveLeft(filled)){
    shape.changeDir(-40, 0);
  }else if (keyCode === RIGHT_ARROW && shape.canMoveRight(filled)){
    shape.changeDir(40, 0);
  }else if(keyCode === UP_ARROW){
    shape.rotate(filled);
  }else if(keyCode === DOWN_ARROW){
    console.log('TODO speed up'); //TODO
  }
}

function keyTyped(){
  if(key === ' '){
    shape.rotate(filled);
  }
}
