class Attributes {
  constructor() {
    //each single object created from each class is for the starting screen, the object is created twize to replicate the postcard
    //each array created from each class is for when the games start
    this.ladder = new Ladder(1330, 330, int(random(0, 360)));
    this.ladder2 = new Ladder(1440, 0, int(random(0, 360)));

    this.balloon = new Balloon(1200, 100, int(random(0, 360)));
    this.balloon2 = new Balloon(1100, 380, int(random(0, 360)));

    this.house = new House(1350, 100, int(random(0, 360)));
    this.house2 = new House(1150, 300, int(random(0, 360)));

    this.chair = new Chair(1300, 200, int(random(0, 360)));
    this.chair2 = new Chair(1200, 400, int(random(0, 360)));


    this.sailboat = new Sailboat(1200, 200, int(random(0, 360))); 
    this.sailboat2 = new Sailboat(1050, 470, int(random(0, 360))); 

    this.suitcase = new Suitcase(1400, 200, int(random(0, 360)));
    this.suitcase2 = new Suitcase(1050, 280, int(random(0, 360)));

    this.leaf = new Leaf(1100, 200, int(random(0, 360)));
    this.leaf2 = new Leaf(1250, 300, int(random(0, 360)));

    this.start = false;
    this.startAttributes = false;
  }

  display() {
    // this displays the attributes at the begininng screen
    this.ladder.display();
    this.ladder2.display();
    this.balloon.display();
    this.balloon2.display();
    this.house.display();
    this.house2.display();
    this.chair.display();
    this.chair2.display();
    this.suitcase.display();
    this.suitcase2.display();
    this.sailboat.display();
    this.sailboat2.display();
    this.leaf.display();
    this.leaf2.display();
  }

  update() {
    // this updates the attributes at the beginning screen
    this.ladder.update();
    this.ladder2.update();
    this.ladder2.display();
    this.balloon.update();
    this.balloon2.update();
    this.house.update();
    this.house2.update();
    this.chair.update();
    this.chair2.update();
    this.suitcase.update();
    this.suitcase2.update();
    this.sailboat.update();
    this.sailboat2.update();
    this.leaf.update();
    this.leaf2.update();
  }

  //this  checks if the game is started
  isKeyPressed() {
    this.start = true; 
    return this.start;
  }

  startGame() {
    //first every object in the start screen will move out after the game started
    if (this.start) {
      this.ladder.startLadder1();
      this.balloon.startBalloon1();
      this.house.startHouse1();
      this.chair.startChair1();
      this.suitcase.startSuitcase1();
      this.sailboat.startSailboat1();
      this.leaf.startLeaf1();
      this.ladder2.startLadder1();
      this.balloon2.startBalloon1();
      this.house2.startHouse1();
      this.chair2.startChair1();
      this.suitcase2.startSuitcase1();
      this.sailboat2.startSailboat1();
      this.leaf2.startLeaf1();

      //now the array functions will create the objects for in the game
      if (this.startAttributes) {
        if (gui.alive) {
          for (var i = 0; i<balloons.length; i++) {
            balloons[i].display();
            balloons[i].update();
            balloons[i].startBalloon();
          }
          for (var b = 0; b<ladders.length; b++) {
            ladders[b].display();
            ladders[b].update();
            ladders[b].startLadder();
          }
          for (var c = 0; c<houses.length; c++) {
            houses[c].display();
            houses[c].update();
            houses[c].startHouse();
          }
          for (var d = 0; d<chairs.length; d++) {
            chairs[d].display();
            chairs[d].update();
            chairs[d].startChair();
          }
          for (var e = 0; e<suitcases.length; e++) {
            suitcases[e].display();
            suitcases[e].update();
            suitcases[e].startSuitcase();
          }
          for (var f = 0; f<sailboats.length; f++) {
            sailboats[f].display();
            sailboats[f].update();
            sailboats[f].startSailboat();
          }
          for (var g = 0; g<leafs.length; g++) {
            leafs[g].display();
            leafs[g].update();
            leafs[g].startLeaf();
          }

          for (var h = 0; h<hearts.length; h++) {
            hearts[h].display();
            hearts[h].startGame();
          }
        }

        //if you are not alive anymore, the game is being reset and the arrays will restart
        else {
          for (var j = 0; j<balloons.length; j++) {
            balloons[j].reset();
          }
          for (var k = 0; k<ladders.length; k++) {
            ladders[k].reset();
          }
          for (var l = 0; l<houses.length; l++) {
            houses[l].reset();
          }
          for (var m = 0; m<chairs.length; m++) {
            chairs[m].reset();
          }
          for (var n = 0; n<suitcases.length; n++) {
            suitcases[n].reset();
          }
          for (var o = 0; o<sailboats.length; o++) {
            sailboats[o].reset();
          }
          for (var p = 0; p<leafs.length; p++) {
            leafs[p].reset();
          }
          for (var q = 0; q<hearts.length; q++) {
            hearts[q].reset();
          }
        }
      }
    }
  }
}
