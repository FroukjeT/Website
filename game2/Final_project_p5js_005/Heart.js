class Heart {
  constructor(initX, initY) {
    this.xPos = initX;
    this.yPos = initY;
    this.sizeSpeed = 0.1;
    this.size=20;
  }

  display() {
    noStroke();
    fill(255, 0, 0);
    triangle(this.xPos-this.size+22, this.yPos, this.xPos+20, this.yPos+25+this.size-22, this.xPos+40+this.size-22, this.yPos);
    ellipse(this.xPos+10.5, this.yPos-3, this.size+1, this.size);
    ellipse(this.xPos+29.5, this.yPos-3, this.size+1, this.size);
  }

  update() {
    this.size += this.sizeSpeed;
    //represents a bearting hard bouncing between two sizes
    if (this.size>=26 || this.size<=20) {
      this.sizeSpeed = -this.sizeSpeed;
    }
  }

  startGame() {
    this.xPos += 15;
    if (this.xPos >= width+200) {
      this.xPos = int(random(-1000, -500));
      this.yPos = int(random(0, width));
    }
    //gets information from the character, and adds information in the gui class
    this.collisionHeart(character, gui);
  }

  collisionHeart( player, gui) {
    var r = 21;
    // calculate distance between the player and the heart
    this.distance1 = (player.xPos-80) - (this.xPos+20 + r);
    this.distance2 = (player.xPos+80) - (this.xPos+20 - r);
    this.distance3 = (player.yPos-25) - (this.yPos+3+r);
    this.distance4 = (player.yPos+25) - (this.yPos+3-r);
    // calculate distance between umbrella and heart
    this.distanceA = (player.xPos-115) - (this.xPos+20+ r);
    this.distanceB = (player.xPos-80) - (this.xPos+20-r);
    this.distanceC = (player.yPos-75) - (this.yPos+3+r);
    this.distanceD =(player.yPos) - (this.yPos+3-r);
    //only does this if the border-box of the two boject are hitting eachother
    if ((this.distance1<=0 && this.distance2 >=0 && this.distance3<=0 && this.distance4>=0 ) || this.distanceA<=0 && this.distanceB >=0 && this.distanceC<=0 && this.distanceD>=0) { //this states: x between 2 povars and y between 2 povars
      this.xPos = width+50;
      player.health++;
      gui.addLife();
    }
  }

  reset() {
    this.xPos = int(random(-2000, 200));
  }
}
