
class House {
  constructor(initX, initY, initRotation) {
    this.xPos = initX;
    this.yPos = initY; 
    this.rotation = initRotation;
    this.houseColor1 = color(255, 90, 45);
    this.houseColor2 = color(255);
    this.sizeBorder = 60;
    this.speed = 5;
    //this.sound = loadSound('data/explosion.mp3');
  }

  display() {
    noStroke();
    push();
    translate(this.xPos, this.yPos-10);
    rotate(radians(this.rotation));

    fill(this.houseColor2);
    rectMode(CENTER);
    rect(0, 10, 40, 45);
    triangle(-20, -7.5, 0, -30, +20, -7.5);
    fill(this.houseColor1);
    rect(0, 18, 11, 30);
    ellipse(0, -10, 8, 8);
    quad(-20, -5, -25, -8, 0, -40, 0, -30);
    quad(20, -5, 25, -8, 0, -40, 0, -30);
    pop();
  }

  update() {
    this.rotation = (this.rotation + 2)%360;
    //gets information from character position, and updates values in the gui
    this.collisionHouse(character, gui);
    //gets information from bullet position, and updates values in the gui
    this.collisionBullet(bullet, gui);
  }

  startHouse1() {
    //first houses at the beginning of the program will move out the screen to the right
    this.xPos += 5;
    this.xPos = constrain(this.xPos, 800, width + 200);
  }

  startHouse() {
    // this updates the houses in the game
    this.xPos += int(this.speed);
    this.speed += 0.005;
    if (this.xPos >= width+200) {
      this.xPos = int(random(-400, -200));
      this.yPos = int(random(0, height));
    }
  }
  collisionHouse(player, gui) {
    //size of the non-visible border-box
    var size = 70;
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
    var size = 70;
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
