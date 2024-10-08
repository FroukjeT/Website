class Chair {
  constructor(initX, initY, initRotation) {
    this.xPos = initX;
    this.yPos = initY;
    this.rotation = initRotation;
    this.chairColor = color(255, 90, 45);
    this.speed = 5;
    //this.sound = loadSound('data/explosion.mp3');
  }

  display() {
    push();
    translate(this.xPos, this.yPos);
    rotate(radians(this.rotation));

    strokeWeight(2);
    stroke(this.chairColor);
    fill(this.chairColor);

    line(-15, -20, -15, 30);
    line(5, -20, 5, 30);
    for (var i=10; i<50; i = i + 10) {
      line(-15, -20+i, 5, -20+i);
    }

    for (var p=0; p<20; p = p + 10) {
      quad(-13, 10+p, 7, 10 +p, 15, 4 + p, -5, 4 + p);
      noFill();
    }

    line(-5, 4, -5, 24);
    line(17, 4, 17, 24);

    pop();
  }

  update() {
    this.rotation = (this.rotation + 2)%360;
    //gets information from character position, and updates values in the gui
    this.collisionChair(character, gui);
    //gets information from bullet position, and updates values in the gui
    this.collisionBullet(bullet, gui);
  }

  startChair1() {
    //first chairs at the beginning of the program will move out the screen to the right
    this.xPos += 5;
    this.xPos = constrain(this.xPos, 800, width + 200);
  }

  startChair() {
    // this updates the chair for in the game
    this.xPos += int(this.speed);
    this.speed += 0.005;
    if (this.xPos >= width+200) {
      this.xPos = int(random(-400, -200));
      this.yPos = int(random(0, height));
    }
  }

  collisionChair( player, gui) { // collision with the player
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
    if ((this.distance1<=0 && this.distance2 >=0 && this.distance3<=0 && this.distance4>=0 ) || this.distanceA<=0 && this.distanceB >=0 && this.distanceC<=0 && this.distanceD>=0) { //this states: x between 2 povars and y between 2 povars
      this.xPos = width+50;
      player.health--;
      gui.loseLife();
    }
  }

  collisionBullet( bullet, gui) { // collision with the bullet
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
