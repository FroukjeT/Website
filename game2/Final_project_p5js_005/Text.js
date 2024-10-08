class Text {
  constructor(initX, initY) {
    this.xPos = initX;
    this.yPos = initY;
  }

  display() {
    noStroke();
    textSize(30);
    fill(0);
    text("Press F to start the game", this.xPos-30, this.yPos+30);
    textSize(17);

    //game instructions
    text("Dodge or shoot the attributes. They will come faster and faster... Get the highest high score!", this.xPos-30, this.yPos+65);
    text("You will get povars for being alive, extra povars for shooting an attrbute and lose povars for colliding with an attribute.", this.xPos-30, this.yPos+85);
    text("Press the space bar to shoot, UP,DOWN,LEFT and RIGHT to move.", this.xPos-30, this.yPos+105);
  }

  update() {
    this.xPos -= 10;
    this.xPos = constrain(this.xPos, -1000, 1000);
  }
}
