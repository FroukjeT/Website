class Player {
  constructor(xPosition, yPosition) {
    //  this.attributes = initAttributes;
    this.xPos = xPosition;
    this.yPos = yPosition;
    this.playerMovement = false;
    this.colorSkin = color(255, 241, 203);
    this.rotateLeftArm = 60;
    this.rotateRightArm = 50;
    this.rotateUmbrella = 100;
    this.rotatePlayer = -60;
    this.speed = 10;
    this.borderSize = 150;
    this.isMovementRight = false;
    this.isMovementLeft = false;
    this.isMovementUp = false;
    this.isMovementDown = false;
    this.health = 3;
  }

  update() {
    //rotation of both arms and the umbrella when the game starts
    if (attributes.start) {
      this.playerMovement = true;
      if (this.rotateLeftArm>=-58) {
        this.rotateLeftArm--;
      }
      if (this.rotateLeftArm>=-45) {
        this.rotateRightArm -= 120/100;
      }
      if (this.rotateUmbrella>=0) {
        this.rotateUmbrella -= 120/100;
      }
      if (this.rotatePlayer>-90) {
        this.rotatePlayer--;
      }
    }
  }

  movement() {
    if (this.playerMovement) {
      //these factors after speed represent if you are going against or with the wind
      if (this.isMovementLeft) {
        this.xPos -= this.speed*0.75;
      }
      if (this.isMovementRight) {
        this.xPos += this.speed*2;
      }
      if (this.isMovementUp) {
        this.yPos-=this.speed;
      }

      if (this.isMovementDown) {
        this.yPos+=this.speed;
      }


      //borders so the player won't go outside the playing field
      this.xPos = constrain(this.xPos, 100, width-80);
      this.yPos = constrain(this.yPos, 20, height-20);
    }
  }

  //expresions for the player movement, so multiple keys can be pressed at the same time
  isPressedMoveRight(isPressedKey) {
    this.isMovementRight = isPressedKey;
    return this.isMovementRight;
  }

  isPressedMoveLeft( isPressedKey) {
    this.isMovementLeft = isPressedKey;
    return this.isMovementLeft;
  }

  isPressedMoveUp( isPressedKey) {
    this.isMovementUp = isPressedKey;
    return this.isMovementUp;
  }

  isPressedMoveDown( isPressedKey) {
    this.isMovementDown = isPressedKey;
    return this.isMovementDown;
  }

  display() {
    push();
    translate(this.xPos, this.yPos);
    rotate(radians(this.rotatePlayer));
    //legs
    noStroke();
    fill(200);
    rect(-9, 50, 7, 60);
    rect(9, 50, 7, 60);

    //arms
    push();
    fill(48, 50, 62);
    translate(15, -28);
    rotate(radians(this.rotateRightArm));
    rect(15, 5, 45, 8, 7);
    fill(this.colorSkin);
    ellipse(38, 5, 10, 10);
    pop();

    push();
    fill(48, 50, 62);
    translate(-17, -28);
    rotate(radians(this.rotateLeftArm));
    rect(-12, 5, 50, 8, 7);
    fill(this.colorSkin);
    ellipse(-35, 4, 10, 10);
    pop();

    //shoes
    fill(165, 112, 55);
    rect(14, 77, 18, 7, 7);
    rect(-14, 77, 18, 7, 7);

    //body
    fill(48, 50, 62);
    arc(-5, 30, 40, 140, PI, PI+HALF_PI);
    arc(5, 30, 40, 140, PI+HALF_PI, 2*PI);
    fill(179, 220, 250);
    rect(4, -3, 3, 65);
    rect(-4, -3, 3, 65);
    fill(179, 180, 250);
    fill(255);
    rect(0, -3, 5, 65);

    //head1
    fill(this.colorSkin);
    ellipse(0, -50, 30, 30);
    fill(255);
    ellipse(7, -55, 7, 6);
    ellipse(-7, -55, 7, 6);
    fill(255, 241, 255);
    arc(-7, -55, 7, 6, PI, QUARTER_PI*7, OPEN);  
    arc(7, -55, 7, 6, QUARTER_PI*5, PI*2, OPEN);
    fill(0);
    ellipse(-6, -54, 2, 2);
    ellipse(6, -54, 2, 2);
    fill(200, 185, 200);
    //arc(xPos,yPos-42,14,5,-PI/6,PI+PI/6,PIE);
    //arc(xPos,yPos-48,3,7,HALF_PI+PI/3,2*PI+PI/6,CHORD);

    //head2
    fill(48, 50, 62);
    ellipse(0, -62, 40, 5);
    rect(0, -70, 23, 20, 7);
    fill(127, 133, 188);
    ellipse(0, -66, 21, 3);

    push();
    translate(15, -28);
    rotate(radians(this.rotateUmbrella));

    //umbrella
    stroke(0);
    strokeWeight(2);
    line(28, -30, 28, -67);
    noFill();
    strokeWeight(1);
    arc(31, -30, 6, 6, 0, PI);
    fill(255, 90, 45);
    arc(28, -67, 75, 40, PI, 2*PI, CHORD);

    //lines umbrella
    noFill();
    for (var i = 0; i<3; i++) {
      arc(28, -67, 60-i*30, 40, PI, PI+HALF_PI);
    }
    for (var a = 0; a<2; a++) {
      arc(28, -67, 60-a*30, 40, PI+HALF_PI, 2*PI);
    }
    pop();
    pop();
  }
}
