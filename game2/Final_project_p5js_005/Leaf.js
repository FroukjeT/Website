class Leaf {
  constructor(initX, initY, initRotation) {
    this.xPos = initX;
    this.yPos = initY;
    this.rotation = initRotation;
    this.leafColor = color(137, 91, 43); 
    this.leafColor2 = color(85, 54, 21);
    this.speed = 5;
    //this.sound = loadSound('data/explosion.mp3');
  }

  display() {
    push();
    translate(this.xPos-15, this.yPos-15);
    rotate(radians(this.rotation));

    noStroke();
    fill(this.leafColor);
    //the leaf is 2 arcs agains each other
    arc(5, 0, 25, 40, PI/2+PI/8, PI+PI/2-PI/8);
    arc(-5, 0, 25, 40, PI+PI/2+PI/8, PI+PI+PI/2-PI/8);  
    strokeWeight(2);
    stroke(this.leafColor);

    //this is the little thing under the leaf
    line(0, 15, 0, 20);
    stroke(this.leafColor2);
    strokeWeight(1);

    //this is inside the leaf
    line(0, 15, 0, -15);

    //right branches
    for (var i = 0; i<25; i=i+5) {
      line(0, -7+i, -3, -10+i);
    }
    //left branches
    for (var a = 0; a<25; a=a+5) {
      line(0, -7+a, 3, -10+a);
    }

    pop();
  }

  update() {
    this.rotation = (this.rotation + 2)%360;
    //gets information from character position, and updates values in the gui
    this.collisionLeaf(character, gui);
    //gets information from bullet position, and updates values in the gui
    this.collisionBullet(bullet, gui);
  }

  startLeaf1() {
    //first leafs at the beginning of the program will move out the screen to the right
    this.xPos += 5;
    this.xPos = constrain(this.xPos, 800, width + 200);
  }

  startLeaf() {
    // this will update the leafs in the game
    this.xPos += int(this.speed);
    this.speed += 0.005;
    if (this.xPos >= width+200) {
      this.xPos = int(random(-400, -200));
      this.yPos = int(random(0, height));
    }
  }

  collisionLeaf( player, gui) {
    var r = 30;
    // calculate distance between the player and the heart
    this.distance1 = (player.xPos-80) - (this.xPos-15 + r);
    this.distance2 = (player.xPos+80) - (this.xPos-15 - r);
    this.distance3 = (player.yPos-25) - (this.yPos-15+r);
    this.distance4 = (player.yPos+25) - (this.yPos-15-r);
    // calculate distance between umbrella and heart
    this.distanceA = (player.xPos-115) - (this.xPos-15+ r);
    this.distanceB = (player.xPos-80) - (this.xPos-15-r);
    this.distanceC = (player.yPos-75) - (this.yPos-15+r);
    this.distanceD =(player.yPos) - (this.yPos-15-r);
    //only does this if the border-box of the two boject are hitting eachother
    if ((this.distance1<=0 && this.distance2 >=0 && this.distance3<=0 && this.distance4>=0 ) || this.distanceA<=0 && this.distanceB >=0 && this.distanceC<=0 && this.distanceD>=0) { //this states: x between 2 povars and y between 2 povars
      this.xPos = width+50;
      player.health++;
      gui.loseLife();
    }
  }


  collisionBullet( bullet, gui) {
    var size = 30;
    this.distance1 = (bullet.xPos) - (this.xPos-size/2 );
    this.distance2 = (bullet.xPos) - (this.xPos+size/2);
    this.distance3 = (bullet.yPos) - (this.xPos-size/2);
    this.distance4 = (bullet.yPos) - (this.xPos+size/2 );
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
