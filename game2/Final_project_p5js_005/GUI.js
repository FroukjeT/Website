//graphical user varerface
class GUI {
  constructor(initAttributes, initPlayer) {
    this.attributes = initAttributes;
    this.player = initPlayer;
    this.alive = true;
    this.dx = 0;
    this.score = 0;
    this.xPos = width;
    this.reset = true;
  }

  display() {
    if (attributes.startAttributes) { // will only display when the game has started
      this.score = constrain(this.score, 0, 1000000);
      for (var i = 0; i < startHearts.length; i++) { 
        startHearts[i].display();
        startHearts[i].update();
      }
      //if you lost the game and have zero lives
      if (startHearts.length<= 0) {   // this reset screen will only be there when you are dead
        fill(0);
        rect(720, 450, width, height);
        fill(255);
        textSize(40);
        text("YOU LOST", width/2-90, height/2-50);
        textSize(30);
        text("YOUR SCORE IS: " + int(this.score)+"!", width/2-120, height/2);
        textSize(20);
        text("PRESS R TO RESTART", width/2-90, height/2+45);
        this.alive = false;
        this.player.xPos = width/2;
        this.player.yPos = height/2;
      }
    }
  }

  reset1() { //this resets the startHearts back to 5
    if (startHearts.length<= 0) {
      this.x = 0;
      //displays lives at top-left
      while (this.x<5) { 
        // displays 5 more startHearts, and reset screen will automaticly leave then
        startHearts.push(new Heart(20+gui.dx, 40));
        this.dx = this.dx + 55;
        this.x++;
        this.score = 0;
        this.alive = true;
      }
    }
  }

  povarUpdate() {
    if (attributes.start) {
      this.xPos -= 10;
      this.xPos = constrain(this.xPos, 0, 2001);
      //live score counter
      fill(200);
      rect(this.xPos+width-90, 0, 180, 110);
      fill(0);
      textSize(20);
      text("Score: " + int(this.score), this.xPos+width-150, 40);
      //always getting pothis.for traveling distance
      if (attributes.startAttributes && this.alive) {
        this.score += 0.3;
      }
    }
  }

  loseLife() {
    //only does this when you haven't got less then 1 live or more then 11 lives
    if (startHearts.length>0 && startHearts.length<11) {
      startHearts.pop();
      this.dx = this.dx - 55;
      this.score-=50;
    }
  }

  addLife() {
    //only does this when you have more lives then 0, and less lives then 11
    if (startHearts.length>0 && startHearts.length<11) {
      startHearts.push(new Heart(20+gui.dx, 40));
      this.dx = this.dx + 55;
    }
  }
}
