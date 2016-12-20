var shape;
var filled = [];
function setup() {
  createCanvas(400,600);
  frameRate(5);

  shape = new Shape((width-20*2)/2);
}

function fillButtom(filled){
  //fill(210,23,44);
  for(var i = 0; i < filled.length; i++){
    rect(filled[i].sq1.x, filled[i].sq1.y, 20, 20);
    rect(filled[i].sq2.x, filled[i].sq2.y, 20, 20);
    rect(filled[i].sq3.x, filled[i].sq3.y, 20, 20);
    rect(filled[i].sq4.x, filled[i].sq4.y, 20, 20);
    rect(createVector(120,0), 20, 20);

  }
}

function draw() {
  background(200);
  shape.update();
  shape.show();

  rect(shape.sq1.x, shape.sq1.y, 20, 20);
  rect(shape.sq2.x, shape.sq2.y, 20, 20);
  rect(shape.sq3.x, shape.sq3.y, 20, 20);
  rect(shape.sq4.x, shape.sq4.y, 20, 20);
  if(shape.isLanded()){
    var startpos = (width-20*2)/2;
    shape = new Shape(startpos);
  }
  if(filled.includes(shape)){
      fillButtom(filled);
  }else{
    fillButtom(filled.push(shape));
  }

  /*if(keyIsDown(LEFT_ARROW)){
    shape.dir(-20, 0);
  }
  if(keyIsDown(RIGHT_ARROW)){
    shape.dir(20,0);
  }*/
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
    shape.changeDir(-20, 0);
  }else if (keyCode === RIGHT_ARROW){
    shape.changeDir(20, 0);
  }
}
