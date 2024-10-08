/*
  the picture is from the source: "http://shoppopgallery.com/33960/video-game-backgrounds-24-07-2019/mortal-kombat-backgrounds-wallpaper-cave-in-2019-prestigious-video-game-cheap-7/"
 */

class Background {
  constructor(initX, initY, initAttributes) {
    this.attributes = initAttributes;
    this.xPos = initX;
    this.yPos = initY;
    this.start = false;
    this.tekst = new Text(450, 580);
    this.startAttributes = false;
    this.start = false;

    this.photo1 = loadImage("PostCard.jpeg");
    this.photo2 = loadImage("background2.jpg");
  }

  display() {
    rectMode(CORNER);

    //first background:
    if (!attributes.startAttributes) { //this will only display when the game isn't started yet.
      image(this.photo1, 0, -10, width, height+10);
    }

    //second background
    image(this.photo2, this.xPos, this.yPos, width, height);

    //random air particles are displayed over te screen moving to the side
    for (var i = 0; i<air.length; i++) {
      air[i].display(); 
      air[i].update();
    }
  }

  //this code is to display the air in front of the person
  foregroundAir() {
    for (var i = 0; i<air.length; i++) {
      air2[i].display(); 
      air2[i].update();
    }
    this.tekst.display();
  }

  update() {
    if (attributes.start) { //attributes.start
      this.xPos -= 10;
      this.xPos = constrain(this.xPos, 0, 2001);
      this.tekst.update();

      // if the second backgorund is totaly over the first background, the game will start.
      if (this.xPos <= 0) {
        attributes.startAttributes = true;
      }
    }
  }
}
