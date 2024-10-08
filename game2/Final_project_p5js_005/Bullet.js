class Bullet {
  constructor() {
    //starting position at top of the umbrella
    this.xPos = character.xPos-60;
    this.yPos = character.yPos-42;
    //speed
    this.dx = 30;
    this.displayLaser = false;
    this.laserColor= color(200, 0, 0);
  }

  display( gui, attributes) {
    //can only shoot if the game started and you are still alive
    if (this.displayLaser && gui.alive && attributes.start) {
      strokeWeight(7);
      stroke(this.laserColor);
      line(this.xPos, this.yPos, this.xPos+40, this.yPos);
      strokeWeight(1);
      noStroke();
    }
  }

  update( character) {
    if (keyPressed) {
      if (key == ' ') { //shooot with the space bar
        this.displayLaser = true;
      }
    }
    //resets the starting position of the laser
    if (this.displayLaser == false) {
      this.xPos = character.xPos-80;
      this.yPos = character.yPos-42;
    } 
    if (this.displayLaser) {
      this.xPos-=this.dx;
    }
    if (this.xPos<0) {
      this.displayLaser = false;
    }
  }
}
