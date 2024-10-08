class Sailboat {
  constructor(initX, initY, initRotation) {
    this.xPos = initX;
    this.yPos = initY;
    this.rotation = initRotation;
    this.sailboatColor = color(255, 90, 45);
    this.sailboatColor2 = color(227, 175, 135);
    this.speed = 5;
    //this.sound = loadSound('data/explosion.mp3');
  }

  display() {
    push();
    translate(this.xPos, this.yPos);
    rotate(radians(this.rotation));
    fill(this.sailboatColor);
    noStroke();
    quad(-30, 10, -20, 25, 20, 25, 30, 10);
    fill(this.sailboatColor2);
    triangle(-30, 8, -3, -25, -3, 8);
    triangle(30, 8, 4, -25, 4, 8);
    stroke(this.sailboatColor);
    strokeWeight(2);
    line(0, 10, 0, -25);
    pop();
  }

  update() {
    this.rotation = (this.rotation + 2)%360;
    //gets information from character position, and updates values in the gui
    this.collisionSailboat(character, gui);
    //gets information from bullet position, and updates values in the gui
    this.collisionBullet(bullet, gui);
  }

  startSailboat1() {
    //first sailboats at the beginning of the program will move out the screen to the right
    this.xPos += 5;
    this.xPos = constrain(this.xPos, 800, width + 200);
  }

  startSailboat() {
    // this updates the sailboats in the game
    this.xPos += int(this.speed);
    this.speed += 0.005;
    if (this.xPos >= width+200) {
      this.xPos = int(random(-400, -200));
      this.yPos = int(random(0, height));
    }
  }

  collisionSailboat(player, gui) {
    //size of the non-visible border-box
    var size = 55;
    //distance between character and attribute on all four sides
    this.distance1 = (player.xPos-80) - (this.xPos+size/2 );
    this.distance2 = (player.xPos+80) - (this.xPos-size/2);
    this.distance3 = (player.yPos-25) - (this.yPos+size/2);
    this.distance4 = (player.yPos+25) - (this.yPos-size/2);
    //distance between characters umbrella and attribute on all four sides
    this.distanceA = (player.xPos-115) - (this.xPos+size/2);
    this.distanceB = (player.xPos-80) - (this.xPos-size/2);
    this.distanceC = (player.yPos-75) - (this.yPos+size/2);
    this.distanceD =(player.yPos) - (this.yPos-size/2);
    //only does this when the two border-boxes of the caracter and the attribute are inside eachother
    if ((this.distance1<=0 && this.distance2 >=0 && this.distance3<=0 && this.distance4>=0 ) || this.distanceA<=0 && this.distanceB >=0 && this.distanceC<=0 && this.distanceD>=0) { //this states: x between 2 povars and y between 2 povars
      this.xPos = width+50;
      player.health--;
      gui.loseLife();
    }
  }

  collisionBullet(bullet, gui) {
    var size = 55;
    //size of the non-visible border-box
    this.distance1 = (bullet.xPos) - (this.xPos-size/2 );
    this.distance2 = (bullet.xPos) - (this.xPos+size/2);
    this.distance3 = (bullet.yPos) - (this.yPos-10-size/2);
    this.distance4 = (bullet.yPos) - (this.yPos-10+size/2 );
    if (this.distance1 >= 0 && this.distance2 <= 0 && this.distance3 >=0 && this.distance4 <=0 ) {
      this.xPos = width+50;
      bullet.xPos = -10;
      gui.score+=50;
      sound.play();
    }
  }


  reset() {
    this.speed = 5;
    this.xPos = int(random(-2000, 200));
  }
}
