var sqsize = 20;


function Shape(topRight){
  //var topRight = (width-sqsize*2)/2;
  this.sq1 = createVector(topRight, 0);
  this.sq2 = createVector(topRight+sqsize, 0);
  this.sq3 = createVector(topRight, sqsize);
  this.sq4 = createVector(topRight+sqsize, sqsize);

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
    fill(200, 100, 0);
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

  this.isLanded = function(){

    if(this.sq1.y === height - 2*sqsize){
      return true;
    }

  }
}
