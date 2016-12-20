var shape;
var filled = [];
function setup() {
  createCanvas(400,600);
  frameRate(3);

  shape = new Shape((width-40*2)/2);
}

function draw() {
  background(200);
  shape.update();
  shape.show();

  if(shape.isLanded(filled)){
    filled.push(shape);
    shape = new Shape();
  }
  fillButtom(filled);

  /*if(keyIsDown(LEFT_ARROW)){
    shape.dir(-20, 0);
  }
  if(keyIsDown(RIGHT_ARROW)){
    shape.dir(20,0);
  }*/
}

function fillButtom(filled){
  for(var i = 0; i < filled.length; i++){
    //TODO color managment 
    rect(filled[i].sq1.x, filled[i].sq1.y, 40, 40);
    rect(filled[i].sq2.x, filled[i].sq2.y, 40, 40);
    rect(filled[i].sq3.x, filled[i].sq3.y, 40, 40);
    rect(filled[i].sq4.x, filled[i].sq4.y, 40, 40);
  }
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
    shape.changeDir(-40, 0);
  }else if (keyCode === RIGHT_ARROW){
    shape.changeDir(40, 0);
  }
}
