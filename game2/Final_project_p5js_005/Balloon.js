class Balloon {
  constructor(xInit, yInit, initRotation) {
    this.xPos = xInit;
    this.yPos = yInit;
    this.rotation = initRotation;
    this.balloonColor = color(255, 90, 45);
    this.speed = 5;
    //this.sound = loadSound('data/explosion.mp3');
  }

  display() {
    push();
    translate(this.xPos, this.yPos);
    rotate(radians(this.rotation));
    noStroke();
    fill(this.balloonColor);
    ellipse(0, 0, 40, 55);
    triangle(-5, 35, 0, 25, 5, 35);
    stroke(this.balloonColor);
    noFill();
    strokeWeight(1);
    curve(-40, 35, 0, 35, 0, 55, -40, 45);
    curve(+40, 35, 0, 55, +5, 70, +40, 45);
    noStroke();
    pop();
  }

  update() {
    this.rotation = (this.rotation + 2)%360;   
    //gets information from character position, and updates values in the gui
    this.collisionBalloon(character, gui);
    //gets information from bullet position, and updates values in the gui
    this.collisionBullet(bullet, gui);
  }

  startBalloon1() {
    //first balloons at the beginning of the program will move out the screen to the right
    this.xPos += 5;
    this.xPos = constrain(this.xPos, 800, width + 200);
  }

  startBalloon() {
    // this is the update for the balloons in the game.
    this.xPos += int(this.speed);  //this neds to become a int!!! in p5js
    this.speed += 0.005;
    if (this.xPos >= width+200) {
      this.xPos = int(random(-400, -200));
      this.yPos = int(random(0, height));    // need to become an int?
    }
  }

  reset() {
    this.speed = 5;
    this.xPos = int(random(-2000, 200));
  }

  collisionBalloon( player, gui) { // collision with the balloon and person
    //size of the non-visible border-box
    var size = 50;
    //distance between character and attribute on all four sides
    this.distance1 = (player.xPos-80) - (this.xPos+size/2);
    this.distance2 = (player.xPos+80) - (this.xPos-size/2);
    this.distance3 = (player.yPos-25) - (this.yPos+size/2);
    this.distance4 = (player.yPos+25) - (this.yPos-size/2);
    //distance between characters umbrella and attribute on all four sides
    this.distanceA = (player.xPos-115) - (this.xPos+size/2);
    this.distanceB = (player.xPos-80) - (this.xPos-size/2);
    this.distanceC = (player.yPos-75) - (this.yPos+size/2);
    this.distanceD =(player.yPos) - (this.yPos-size/2);
    //only does this when the two border-boxes of the caracter and the attribute are inside eachother
    if ((this.distance1<=0 && this.distance2 >=0 && this.distance3<=0 && this.distance4>=0 ) || this.distanceA<=0 && this.distanceB >=0 && this.distanceC<=0 && this.distanceD>=0) { //this states: x between 2 pothis.s and y between 2 pothis.s
      this.xPos = width+50;
      player.health--;
      gui.loseLife();
    }
  }

  collisionBullet(bullet, gui) {
    // collision with the bullet
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
}
