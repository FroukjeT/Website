class Air {
  constructor(xpos, ypos, sX, sY, speed, varAir) {
    this.velocity = speed;
    this.positionX = xpos;
    this.positionY = ypos;
    this.sizeX = sX;
    this.sizeY = sY;
    this.airvar = varAir;
  }

  display() {
    fill(this.airvar);
    stroke(this.airvar);
    rectMode(CENTER);
    strokeWeight(1);
    rect(this.positionX, this.positionY, 20, 0.5);
  }

  update() {
    this.positionX+= this.velocity;
    //.5 + size because then the starr will fully leave the screen
    if (this.positionX + 0.5 > width) { 
      this.positionX = -0.5;
    }
  }
}
