class Suitcase {
  constructor(initX, initY, initRotation) {
    this.xPos = initX;
    this.yPos = initY;
    this.rotation = initRotation;
    this.suitcaseColor = color(85, 54, 21); 
    this.suitcaseColor2 = color(137, 91, 43);
    this.speed = 5;
    //this.sound = loadSound('data/explosion.mp3');
  }

  display() {
    push();
    translate(this.xPos, this.yPos);
    rotate(radians(this.rotation));
    fill(this.suitcaseColor);
    noStroke();
    rectMode(CORNER);
    rect(-20, -10, 45, 25);
    fill(this.suitcaseColor2);
    stroke(this.suitcaseColor);
    quad(25, 12, 30, 7, 30, -15, 25, -10);
    quad(30, -15, 25, -10, -19, -10, -14, -15);
    strokeWeight(2);
    noFill();
    arc(5, -13, 20, 20, PI, PI+PI);
    strokeWeight(1);
    pop();
  }


  update() {
    this.rotation = (this.rotation +2)%360;
    //gets information from character position, and updates values in the gui
    this.collisionSuitcase(character, gui);
    //gets information from bullet position, and updates values in the gui
    this.collisionBullet(bullet, gui);
  }

  startSuitcase1() {
    //first suitcases at the beginning of the program will move out the screen to the right
    this.xPos += 5;
    this.xPos = constrain(this.xPos, 800, width + 200);
  }

  startSuitcase() {
    // this updates the suitcases during the game
    this.xPos += int(this.speed);
    this.speed += 0.005;
    if (this.xPos >= width+200) {
      this.xPos = int(random(-400, -200));
      this.yPos = int(random(0, height));
    }
  }

  collisionSuitcase(player, gui) {
    //size of the non-visible border-box
    var size = 50;
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
    //size of the non-visible border-box
    var size = 50;
    this.distance1 = (bullet.xPos) - (this.xPos-size/2);
    this.distance2 = (bullet.xPos) - (this.xPos+size/2);
    this.distance3 = (bullet.yPos) - (this.yPos-size/2);
    this.distance4 = (bullet.yPos) - (this.yPos+size/2 );
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
