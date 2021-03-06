var sqsize = 40;
var turn = 0;

function Shape(){
  var refPoint = (width-sqsize*2)/2;
  var shapes = [1,2,3,4,5,6,7];
  //var shapes = [5];
  this.currentShape = random(shapes);
  this.squares = getSquares(this.currentShape, refPoint);

  this.xdir = 0;
  this.ydir = sqsize;

  this.update = function(speed){ //TODO speed managment
    for(i = 0; i < this.squares.length; i++){
      this.squares[i].y = this.squares[i].y + this.ydir;
    }
  }

  this.show = function(){
    this.colorShape(this.currentShape);
    for(i = 0; i < this.squares.length; i++){
      rect(this.squares[i].x, this.squares[i].y, sqsize, sqsize);
    }
  }

  this.canMoveLeft = function(filled){
    for(i = 0; i < this.squares.length; i++){
      thisx = this.squares[i].x;
      thisy = this.squares[i].y;
      if(filled.length === 0 && thisx - sqsize < 0)
        return false;
      for(j = 0; j < filled.length; j++){
        for(k = 0; k < filled[j].squares.length; k++){
          filledx = filled[j].squares[k].x;
          filledy = filled[j].squares[k].y;
            if(thisx - sqsize === filledx && thisy === filledy || thisx - sqsize < 0)
              return false;
        }
      }
    }
    return true;
  }

  this.canMoveRight = function(filled){
    for(i = 0; i < this.squares.length; i++){
      thisx = this.squares[i].x;
      thisy = this.squares[i].y;
      if(filled.length === 0 && thisx + sqsize >= width)
        return false;
      for(j = 0; j < filled.length; j++){
        for(k = 0; k < filled[j].squares.length; k++){
          filledx = filled[j].squares[k].x;
          filledy = filled[j].squares[k].y;
            if(thisx + sqsize === filledx && thisy === filledy || thisx + sqsize >= width)
              return false;
        }
      }
    }
    return true;
  }

  this.changeDir = function(x,y){
    for(i = 0; i < this.squares.length; i++){
      this.squares[i].x = this.squares[i].x + x;
    }
  }

  this.isValidRotation = function(filled){
    for(i = 0; i < this.squares.length; i++){
      thisx = this.squares[i].x;
      thisy = this.squares[i].y;
      if(thisx < 0 || thisx >= width || thisy >= height || thisy < 0)
        return false;
      for(j = 0; j < filled.length; j++){
        for(k = 0; k < filled[j].squares.length; k++){
          filledx = filled[j].squares[k].x;
          filledy = filled[j].squares[k].y;
          if(thisx === filledx && thisy === filledy)
            return false;
        }
      }
    }
    return true;
  }

  this.rotate = function(filled){
    if(this.currentShape === 2){
      if(turn === 0){
        this.squares[0].x = this.squares[0].x + sqsize;
        this.squares[1].x = this.squares[1].x + sqsize;
        this.squares[3].x = this.squares[3].x - sqsize;

        this.squares[0].y = this.squares[0].y - 2*sqsize;
        this.squares[2].y = this.squares[2].y - sqsize;
        if(this.isValidRotation(filled)){
          turn++;
          return;
        }
        this.squares[0].x = this.squares[0].x - sqsize;
        this.squares[1].x = this.squares[1].x - sqsize;
        this.squares[3].x = this.squares[3].x + sqsize;

        this.squares[0].y = this.squares[0].y + 2*sqsize;
        this.squares[2].y = this.squares[2].y + sqsize;
        return;
      }
      if(turn === 1){
        this.squares[0].x = this.squares[0].x + sqsize;
        this.squares[1].x = this.squares[1].x - sqsize;
        this.squares[3].x = this.squares[3].x - sqsize;

        this.squares[0].y = this.squares[0].y + sqsize;
        this.squares[1].y = this.squares[1].y + sqsize;
        this.squares[3].y = this.squares[3].y - sqsize;
        if(this.isValidRotation(filled)){
          turn++;
          return;
        }
        this.squares[0].x = this.squares[0].x - sqsize;
        this.squares[1].x = this.squares[1].x + sqsize;
        this.squares[3].x = this.squares[3].x + sqsize;

        this.squares[0].y = this.squares[0].y - sqsize;
        this.squares[1].y = this.squares[1].y - sqsize;
        this.squares[3].y = this.squares[3].y + sqsize;
        return;
      }
      if(turn === 2){
        this.squares[0].x = this.squares[0].x - sqsize;
        this.squares[1].x = this.squares[1].x - sqsize;
        this.squares[3].x = this.squares[3].x + sqsize;

        this.squares[0].y = this.squares[0].y + sqsize;
        this.squares[1].y = this.squares[1].y - sqsize;
        this.squares[3].y = this.squares[3].y - sqsize;
        if(this.isValidRotation(filled)){
          turn++;
          return;
        }
        this.squares[0].x = this.squares[0].x + sqsize;
        this.squares[1].x = this.squares[1].x + sqsize;
        this.squares[3].x = this.squares[3].x - sqsize;

        this.squares[0].y = this.squares[0].y - sqsize;
        this.squares[1].y = this.squares[1].y + sqsize;
        this.squares[3].y = this.squares[3].y + sqsize;
        return;
      }
      if(turn === 3){
        this.squares[0].x = this.squares[0].x - sqsize;
        this.squares[1].x = this.squares[1].x + sqsize;
        this.squares[3].x = this.squares[3].x + sqsize;

        this.squares[0].y = this.squares[0].y - sqsize;
        this.squares[1].y = this.squares[1].y - sqsize;
        this.squares[3].y = this.squares[3].y + sqsize;
        if(this.isValidRotation(filled)){
          turn = 0;
          return;
        }
        this.squares[0].x = this.squares[0].x + sqsize;
        this.squares[1].x = this.squares[1].x - sqsize;
        this.squares[3].x = this.squares[3].x - sqsize;

        this.squares[0].y = this.squares[0].y + sqsize;
        this.squares[1].y = this.squares[1].y + sqsize;
        this.squares[3].y = this.squares[3].y - sqsize;
        return;
      }
    }

    if(this.currentShape === 3){
      if(turn === 0){
        this.squares[0].x = this.squares[0].x + sqsize;
        this.squares[2].x = this.squares[2].x - sqsize;
        this.squares[3].x = this.squares[3].x - 2*sqsize;

        this.squares[0].y = this.squares[0].y + sqsize;
        this.squares[2].y = this.squares[2].y - sqsize;
        if(this.isValidRotation(filled)){
          turn++;
          return;
        }
        this.squares[0].x = this.squares[0].x - sqsize;
        this.squares[2].x = this.squares[2].x + sqsize;
        this.squares[3].x = this.squares[3].x + 2*sqsize;

        this.squares[0].y = this.squares[0].y - sqsize;
        this.squares[2].y = this.squares[2].y + sqsize;
        return;
      }
      if(turn === 1){
        this.squares[0].x = this.squares[0].x - sqsize;
        this.squares[2].x = this.squares[2].x + sqsize;

        this.squares[0].y = this.squares[0].y + sqsize;
        this.squares[2].y = this.squares[2].y - sqsize;
        this.squares[3].y = this.squares[3].y - 2*sqsize;
        if(this.isValidRotation(filled)){
          turn++;
          return;
        }
        this.squares[0].x = this.squares[0].x + sqsize;
        this.squares[2].x = this.squares[2].x - sqsize;

        this.squares[0].y = this.squares[0].y - sqsize;
        this.squares[2].y = this.squares[2].y + sqsize;
        this.squares[3].y = this.squares[3].y + 2*sqsize;
        return;
      }
      if(turn === 2){
        this.squares[0].x = this.squares[0].x - sqsize;
        this.squares[2].x = this.squares[2].x + sqsize;
        this.squares[3].x = this.squares[3].x + 2*sqsize;

        this.squares[0].y = this.squares[0].y - sqsize;
        this.squares[2].y = this.squares[2].y + sqsize;
        if(this.isValidRotation(filled)){
          turn++;
          return;
        }
        this.squares[0].x = this.squares[0].x + sqsize;
        this.squares[2].x = this.squares[2].x - sqsize;
        this.squares[3].x = this.squares[3].x - 2*sqsize;

        this.squares[0].y = this.squares[0].y + sqsize;
        this.squares[2].y = this.squares[2].y - sqsize;
        return;
      }
      if(turn === 3){
        this.squares[0].x = this.squares[0].x + sqsize;
        this.squares[2].x = this.squares[2].x - sqsize;

        this.squares[0].y = this.squares[0].y - 2*sqsize;
        this.squares[1].y = this.squares[1].y - sqsize;
        this.squares[3].y = this.squares[3].y + sqsize;
        if(this.isValidRotation(filled)){
          turn = 0;
          return;
        }
        this.squares[0].x = this.squares[0].x - sqsize;
        this.squares[2].x = this.squares[2].x + sqsize;

        this.squares[0].y = this.squares[0].y + 2*sqsize;
        this.squares[1].y = this.squares[1].y + sqsize;
        this.squares[3].y = this.squares[3].y - sqsize;
        return;
      }
    }

    if(this.currentShape === 4){
      if(turn === 0){
        this.squares[1].x = this.squares[1].x + sqsize;
        this.squares[3].x = this.squares[3].x - sqsize;

        this.squares[0].y = this.squares[0].y - sqsize;
        this.squares[1].y = this.squares[1].y + 2*sqsize;
        this.squares[2].y = this.squares[2].y + sqsize;
        if(this.isValidRotation(filled)){
          turn++;
          return;
        }
        this.squares[1].x = this.squares[1].x - sqsize;
        this.squares[3].x = this.squares[3].x + sqsize;

        this.squares[0].y = this.squares[0].y + sqsize;
        this.squares[1].y = this.squares[1].y - 2*sqsize;
        this.squares[2].y = this.squares[2].y - sqsize;
        return;
      }
      if(turn === 1){
        this.squares[0].x = this.squares[0].x + sqsize;
        this.squares[1].x = this.squares[1].x - 2*sqsize;
        this.squares[2].x = this.squares[2].x - sqsize;

        this.squares[0].y = this.squares[0].y - sqsize;
        this.squares[2].y = this.squares[2].y - sqsize;
        this.squares[3].y = this.squares[3].y - 2*sqsize;
        if(this.isValidRotation(filled)){
          turn++;
          return;
        }
        this.squares[0].x = this.squares[0].x - sqsize;
        this.squares[1].x = this.squares[1].x + 2*sqsize;
        this.squares[2].x = this.squares[2].x + sqsize;

        this.squares[0].y = this.squares[0].y + sqsize;
        this.squares[2].y = this.squares[2].y + sqsize;
        this.squares[3].y = this.squares[3].y + 2*sqsize;
        return;
      }
      if(turn === 2){
        this.squares[1].x = this.squares[1].x - sqsize;
        this.squares[3].x = this.squares[3].x + sqsize;

        this.squares[0].y = this.squares[0].y + sqsize;
        this.squares[1].y = this.squares[1].y - 2*sqsize;
        this.squares[2].y = this.squares[2].y - sqsize;
        if(this.isValidRotation(filled)){
          turn++;
          return;
        }
        this.squares[1].x = this.squares[1].x + sqsize;
        this.squares[3].x = this.squares[3].x - sqsize;

        this.squares[0].y = this.squares[0].y - sqsize;
        this.squares[1].y = this.squares[1].y + 2*sqsize;
        this.squares[2].y = this.squares[2].y + sqsize;
        return;
      }
      if(turn === 3){
        this.squares[0].x = this.squares[0].x - sqsize;
        this.squares[1].x = this.squares[1].x + 2*sqsize;
        this.squares[2].x = this.squares[2].x + sqsize;

        this.squares[1].y = this.squares[1].y - sqsize;
        this.squares[3].y = this.squares[3].y + sqsize;
        if(this.isValidRotation(filled)){
          turn = 0;
          return;
        }
        this.squares[0].x = this.squares[0].x + sqsize;
        this.squares[1].x = this.squares[1].x - 2*sqsize;
        this.squares[2].x = this.squares[2].x - sqsize;

        this.squares[1].y = this.squares[1].y + sqsize;
        this.squares[3].y = this.squares[3].y - sqsize;
        return;
      }
    }

    if(this.currentShape === 5){
      if(turn === 0){
        this.squares[0].x = this.squares[0].x + sqsize;
        this.squares[2].x = this.squares[2].x - sqsize;
        this.squares[3].x = this.squares[3].x - 2*sqsize;

        this.squares[0].y = this.squares[0].y + sqsize;
        this.squares[2].y = this.squares[2].y - sqsize;
        this.squares[3].y = this.squares[3].y - 2*sqsize;

        if(this.isValidRotation(filled)){
          turn++;
          return;
        }
        this.squares[0].x = this.squares[0].x - sqsize;
        this.squares[2].x = this.squares[2].x + sqsize;
        this.squares[3].x = this.squares[3].x + 2*sqsize;

        this.squares[0].y = this.squares[0].y - sqsize;
        this.squares[2].y = this.squares[2].y + sqsize;
        this.squares[3].y = this.squares[3].y + 2*sqsize;
        return;
      }
      if(turn === 1){
        this.squares[0].x = this.squares[0].x - sqsize;
        this.squares[2].x = this.squares[2].x + sqsize;
        this.squares[3].x = this.squares[3].x + 2*sqsize;

        this.squares[0].y = this.squares[0].y - sqsize;
        this.squares[2].y = this.squares[2].y + sqsize;
        this.squares[3].y = this.squares[3].y + 2*sqsize;
        if(this.isValidRotation(filled)){
          turn = 0;
          return;
        }
        this.squares[0].x = this.squares[0].x + sqsize;
        this.squares[2].x = this.squares[2].x - sqsize;
        this.squares[3].x = this.squares[3].x - 2*sqsize;

        this.squares[0].y = this.squares[0].y + sqsize;
        this.squares[2].y = this.squares[2].y - sqsize;
        this.squares[3].y = this.squares[3].y - 2*sqsize;
        return;
      }
    }

    if(this.currentShape === 6 || this.currentShape === 7){
      if(turn === 0){
        this.squares[0].x = this.squares[0].x + 2*sqsize;
        this.squares[1].x = this.squares[1].x + sqsize;
        this.squares[3].x = this.squares[3].x - sqsize;

        this.squares[1].y = this.squares[1].y + sqsize;
        this.squares[3].y = this.squares[3].y + sqsize;
        if(this.isValidRotation(filled)){
          turn++;
          return;
        }
        this.squares[0].x = this.squares[0].x - 2*sqsize;
        this.squares[1].x = this.squares[1].x - sqsize;
        this.squares[3].x = this.squares[3].x + sqsize;

        this.squares[1].y = this.squares[1].y - sqsize;
        this.squares[3].y = this.squares[3].y - sqsize;
        return;
      }
      if(turn === 1){
        this.squares[0].x = this.squares[0].x - 2*sqsize;
        this.squares[1].x = this.squares[1].x - sqsize;
        this.squares[3].x = this.squares[3].x + sqsize;

        this.squares[1].y = this.squares[1].y - sqsize;
        this.squares[3].y = this.squares[3].y - sqsize;
        if(this.isValidRotation(filled)){
          turn = 0;
          return;
        }
        this.squares[0].x = this.squares[0].x + 2*sqsize;
        this.squares[1].x = this.squares[1].x + sqsize;
        this.squares[3].x = this.squares[3].x - sqsize;

        this.squares[1].y = this.squares[1].y + sqsize;
        this.squares[3].y = this.squares[3].y + sqsize;
        return;
      }
    }
  }

  this.hasLanded = function(filled){
    for(i = 0; i < this.squares.length; i++){
      thisx = this.squares[i].x;
      thisy = this.squares[i].y;
      if(thisy + sqsize === height){
        turn = 0;
        return true;
      }
      for (j = 0; j < filled.length; j++) {
        for(k = 0; k < this.squares.length; k++){
          filledx = filled[j].squares[k].x;
          filledy = filled[j].squares[k].y;
          if(thisx === filledx && thisy + sqsize === filledy){
            turn = 0;
            return true;
          }
        }
      }
    }
    return false;
  }

  this.colorShape = function(newShape){
    if(newShape === 1)
    fill(255, 255, 0);
    else if(newShape === 2)
    fill(135, 21, 196);
    else if(newShape === 3)
    fill(255, 140, 0);
    else if(newShape === 4)
    fill(0, 0, 255);
    else if(newShape === 5)
    fill(0, 255, 255);
    else if(newShape === 6)
    fill(255, 0, 0);
    else if(newShape === 7)
    fill(0, 255, 0);
  }
}

getSquares = function(shapeID, refPoint){
  var squares = [];
  if(shapeID === 1){
    squares[0] = createVector(refPoint, 0);
    squares[1] = createVector(refPoint+sqsize, 0);
    squares[2] = createVector(refPoint, sqsize);
    squares[3] = createVector(refPoint+sqsize, sqsize);
    return squares;
  }
  if(shapeID === 2){
    squares[0] = createVector(refPoint-sqsize, sqsize);
    squares[1] = createVector(refPoint, 0);
    squares[2] = createVector(refPoint, sqsize);
    squares[3] = createVector(refPoint+sqsize, sqsize);
    return squares;
  }
  if(shapeID === 3){
    squares[0] = createVector(refPoint, 0);
    squares[1] = createVector(refPoint, sqsize);
    squares[2] = createVector(refPoint, 2*sqsize);
    squares[3] = createVector(refPoint+sqsize, 2*sqsize);
    return squares;
  }
  if(shapeID === 4){
    squares[0] = createVector(refPoint, 2*sqsize);
    squares[1] = createVector(refPoint+sqsize, 0);
    squares[2] = createVector(refPoint+sqsize, sqsize);
    squares[3] = createVector(refPoint+sqsize, 2*sqsize);
    return squares;
  }
  if(shapeID === 5){
    squares[0] = createVector(refPoint, 0);
    squares[1] = createVector(refPoint, sqsize);
    squares[2] = createVector(refPoint, 2*sqsize);
    squares[3] = createVector(refPoint, 3*sqsize);
    return squares;
  }
  if(shapeID === 6){
    squares[0] = createVector(refPoint-sqsize, 0);
    squares[1] = createVector(refPoint, 0);
    squares[2] = createVector(refPoint, sqsize);
    squares[3] = createVector(refPoint+sqsize, sqsize);
    return squares;
  }
  if(shapeID === 7){
    squares[0] = createVector(refPoint-sqsize, sqsize);
    squares[1] = createVector(refPoint, sqsize);
    squares[2] = createVector(refPoint, 0);
    squares[3] = createVector(refPoint+sqsize, 0);
    return squares;
  }

}
