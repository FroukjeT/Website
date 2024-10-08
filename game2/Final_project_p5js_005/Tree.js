class Tree {
  constructor(xPosition, yPosition, colorTree) {
    this.xPos = xPosition;
    this.yPos = yPosition;
    this.treeBaseColor = colorTree;    
    this.displayLeaves = new DisplayLeaves(tree);
    this.branch1 = new SubBranches();
    this.branch2 = new SubBranches();    
    this.branch3 = new SubBranches();    
    this.branch4 = new SubBranches();    
    this.branch5 = new SubBranches();    
    this.branch6 = new SubBranches();
    this.branch7 = new SubBranches();
    this.branch8 = new SubBranches();
    this.branch9 = new SubBranches();
    this.branch10 = new SubBranches();
  }

  display() {
    if (!attributes.startAttributes) {       // this means that when the game isn't started, it will display, but when the game is started it wont. This so the game won't be overloaded with information.
      fill(this.treeBaseColor);
      noStroke();
      quad(this.xPos+20, this.yPos, this.xPos, this.yPos, this.xPos, this.yPos+80, this.xPos+20, this.yPos+80);
      triangle(this.xPos+20, this.yPos, this.xPos+40, this.yPos-2, this.xPos+20, this.yPos+80);
      quad(this.xPos+10, this.yPos, this.xPos+40, this.yPos-2, this.xPos+120, this.yPos-110, this.xPos+100, this.yPos-135);
      quad(this.xPos+120, this.yPos-110, this.xPos+100, this.yPos-135, this.xPos+170, this.yPos-300, this.xPos+180, this.yPos-295);
      quad(this.xPos+170, this.yPos-300, this.xPos+180, this.yPos-295, this.xPos+200, this.yPos-501, this.xPos+190, this.yPos-500);
      quad(this.xPos+200, this.yPos-501, this.xPos+190, this.yPos-500, this.xPos+240, this.yPos-550, this.xPos+230, this.yPos-540);
      this.branch1.display(this.xPos+230, this.yPos-540, PI/1.5);

      //sidebranch1
      quad(this.xPos+55, this.yPos-35, this.xPos+75, this.yPos-70, this.xPos+63, this.yPos-120, this.xPos+42, this.yPos-110);
      quad(this.xPos+63, this.yPos-120, this.xPos+42, this.yPos-110, this.xPos+50, this.yPos-135, this.xPos+62, this.yPos-145);
      stroke(this.treeBaseColor);
      noFill();
      strokeWeight(6);
      arc(this.xPos+55+30.0, this.yPos-110, 65, 110, PI+PI/16, PI+PI/1.25);
      noStroke();
      fill(this.treeBaseColor);

      //sidebranch2
      quad(this.xPos+325, this.yPos-135, this.xPos+125, this.yPos-120, this.xPos+128, this.yPos-140, this.xPos+328, this.yPos-150);
      quad(this.xPos+325, this.yPos-135, this.xPos+328, this.yPos-150, this.xPos+450, this.yPos-280, this.xPos+455, this.yPos-280);
      quad(this.xPos+450, this.yPos-280, this.xPos+455, this.yPos-280, this.xPos+460, this.yPos-300, this.xPos+460, this.yPos-300);
      this.branch2.display(this.xPos+460, this.yPos-300, PI/1.5);
      quad(this.xPos+450, this.yPos-280, this.xPos+455, this.yPos-280, this.xPos+445, this.yPos-300, this.xPos+445, this.yPos-300);
      this.branch3.display(this.xPos+445, this.yPos-300, PI/2);
      quad(this.xPos+325, this.yPos-135, this.xPos+328, this.yPos-148, this.xPos+554, this.yPos-258, this.xPos+557, this.yPos-255);
      quad(this.xPos+554, this.yPos-258, this.xPos+557, this.yPos-255, this.xPos+700, this.yPos-397, this.xPos+702, this.yPos-400);
      this.branch4.display(this.xPos+702, this.yPos-400, PI/1.5);


      //sidebranch3
      quad(this.xPos+345, this.yPos-305, this.xPos+150, this.yPos-220, this.xPos+153, this.yPos-230, this.xPos+338, this.yPos-310);
      quad(this.xPos+345, this.yPos-305, this.xPos+338, this.yPos-310, this.xPos+355, this.yPos-420, this.xPos+357, this.yPos-420);
      quad(this.xPos+345, this.yPos-305, this.xPos+338, this.yPos-310, this.xPos+455, this.yPos-420, this.xPos+457, this.yPos-420);
      this.branch5.display(this.xPos+455, this.yPos-420, PI/1.5);
      quad(this.xPos+355, this.yPos-420, this.xPos+357, this.yPos-420, this.xPos+375, this.yPos-440, this.xPos+375, this.yPos-440);
      this.branch6.display(this.xPos+375, this.yPos-440, PI/1.5);


      //sidebranch4
      quad(this.xPos+175, this.yPos-340, this.xPos+185, this.yPos-345, this.xPos+300, this.yPos-503, this.xPos+295, this.yPos-505);
      quad(this.xPos+300, this.yPos-503, this.xPos+295, this.yPos-505, this.xPos+400, this.yPos-530, this.xPos+400, this.yPos-530);
      this.branch7.display(this.xPos+400, this.yPos-530, PI/1.5);
      quad(this.xPos+225, this.yPos-400, this.xPos+230, this.yPos-410, this.xPos+280, this.yPos-380, this.xPos+278, this.yPos-380);
      this.branch8.display(this.xPos+280, this.yPos-380, -PI/1.5);

      //sidebranch5
      quad(this.xPos+140, this.yPos-175, this.xPos+150, this.yPos-200, this.xPos+330, this.yPos-230, this.xPos+335, this.yPos-225);
      quad(this.xPos+330, this.yPos-230, this.xPos+335, this.yPos-225, this.xPos+650, this.yPos-500, this.xPos+655, this.yPos-505);
      this.branch9.display(this.xPos+655, this.yPos-505, PI/1.5);
      quad(this.xPos+500, this.yPos-375, this.xPos+505, this.yPos-377, this.xPos+565, this.yPos-524, this.xPos+564, this.yPos-525);
      this.branch10.display(this.xPos+565, this.yPos-525, PI/1.5);

      this.displayLeaves.display();
    }
  }

  update() {
    if (attributes.start) {
      this.xPos -= 10;
      this.xPos = constrain(this.xPos, -1000, 1000);
      this.displayLeaves.update();
    }
  }
}
