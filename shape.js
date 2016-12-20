var sqsize = 40;

function Shape(){
  var topRight = (width-sqsize*2)/2;
  var shapes = [1,2,3,4,5,6,7];
  var newShape = random(shapes);
  var squares = getSquares(newShape, topRight);

  this.sq1 = squares[0];
  this.sq2 = squares[1];
  this.sq3 = squares[2];
  this.sq4 = squares[3];

  this.xdir = 0;
  this.ydir = sqsize;

  this.update = function(){
    this.sq1.y = this.sq1.y + this.ydir;
    this.sq2.y = this.sq2.y + this.ydir;
    this.sq3.y = this.sq3.y + this.ydir;
    this.sq4.y = this.sq4.y + this.ydir;

    this.sq1.x = constrain(this.sq1.x, 0, width-2*sqsize);
    this.sq2.x = constrain(this.sq2.x, sqsize, width-sqsize);
    this.sq3.x = constrain(this.sq3.x, 0, width-2*sqsize);
    this.sq4.x = constrain(this.sq4.x, sqsize, width-sqsize);

    this.sq1.y = constrain(this.sq1.y, 0, height-2*sqsize);
    this.sq2.y = constrain(this.sq2.y, 0, height-2*sqsize);
    this.sq3.y = constrain(this.sq3.y, 0, height-sqsize);
    this.sq4.y = constrain(this.sq4.y, 0, height-sqsize);

  }

  this.show = function(){
    if(newShape === 1)
      fill(255, 255, 0);
    else if(newShape === 2)
      fill(0, 255, 0);
    else if(newShape === 3)
      fill(10, 255, 15);
    else if(newShape === 4)
      fill(100, 25, 0);
    else if(newShape === 5)
      fill(110, 55, 0);
    else if(newShape === 6)
      fill(110, 0, 0);
    else if(newShape === 7)
      fill(0, 255, 255);

    rect(this.sq1.x, this.sq1.y, sqsize, sqsize);
    rect(this.sq2.x, this.sq2.y, sqsize, sqsize);
    rect(this.sq3.x, this.sq3.y, sqsize, sqsize);
    rect(this.sq4.x, this.sq4.y, sqsize, sqsize);
  }

  this.changeDir = function(x,y){
    this.sq1.x = this.sq1.x + x;
    this.sq2.x = this.sq2.x + x;
    this.sq3.x = this.sq3.x + x;
    this.sq4.x = this.sq4.x + x;
  }

  this.isLanded = function(filled){
    //TODO proper collision detection
    for(i = 0; i < filled.length; i++){
      if(filled[i].sq1.y === this.sq3.y+sqsize && filled[i].sq1.x === this.sq3.x+sqsize ){
        return true;
      }
      if(filled[i].sq2.y === this.sq3.y+sqsize && filled[i].sq2.x === this.sq3.x+sqsize ){
        return true;
      }
      if(filled[i].sq2.y === this.sq3.y+sqsize && filled[i].sq2.x+sqsize === this.sq3.x+sqsize ){
        return true;
      }
    }

    if(this.sq1.y === height - 2*sqsize){
       return true;
    }
  }
}

getSquares = function(squareID, topRight){
  var squares = [];
  if(squareID === 1){
    squares[0] = createVector(topRight, 0);
    squares[1] = createVector(topRight+sqsize, 0);
    squares[2] = createVector(topRight, sqsize);
    squares[3] = createVector(topRight+sqsize, sqsize);
    return squares;
  }
  if(squareID === 2){
    squares[0] = createVector(topRight, 0);
    squares[1] = createVector(topRight-sqsize, sqsize);
    squares[2] = createVector(topRight, sqsize);
    squares[3] = createVector(topRight+sqsize, sqsize);
    return squares;
  }
  if(squareID === 3){
    squares[0] = createVector(topRight, 0);
    squares[1] = createVector(topRight, sqsize);
    squares[2] = createVector(topRight, 2*sqsize);
    squares[3] = createVector(topRight+sqsize, 2*sqsize);
    return squares;
  }
  if(squareID === 4){
    squares[0] = createVector(topRight+sqsize, 0);
    squares[1] = createVector(topRight+sqsize, sqsize);
    squares[2] = createVector(topRight, 2*sqsize);
    squares[3] = createVector(topRight+sqsize, 2*sqsize);
    return squares;
  }
  if(squareID === 5){
    squares[0] = createVector(topRight, 0);
    squares[1] = createVector(topRight, sqsize);
    squares[2] = createVector(topRight, 2*sqsize);
    squares[3] = createVector(topRight, 3*sqsize);
    return squares;
  }
  if(squareID === 6){
    squares[0] = createVector(topRight-sqsize, 0);
    squares[1] = createVector(topRight, 0);
    squares[2] = createVector(topRight, sqsize);
    squares[3] = createVector(topRight+sqsize, sqsize);
    return squares;
  }
  if(squareID === 7){
    squares[0] = createVector(topRight, 0);
    squares[1] = createVector(topRight+sqsize, 0);
    squares[2] = createVector(topRight-sqsize, sqsize);
    squares[3] = createVector(topRight  , sqsize);
    return squares;
  }

}
