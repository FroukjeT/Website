class DisplayLeaves {
  constructor(initTree) {
    this.tree = initTree;
    this.xPos = 0;
    this.yPos = 700;
    this.leaves1 = new Leaves();
    this.leaves2 = new Leaves();
    this.leaves3 = new Leaves();
    this.leaves4 = new Leaves();    
    this.leaves5 = new Leaves();
    this.leaves6 = new Leaves();
    this.leaves7 = new Leaves();
    this.leaves8 = new Leaves();    
    this.leaves9 = new Leaves();
    this.leaves10 = new Leaves();
    this.leaves11 = new Leaves();
    this.leaves12 = new Leaves();
    this.leaves13 = new Leaves();
    this.leaves14 = new Leaves();
    this.leaves15 = new Leaves();
  }

  display() {
  if (!attributes.startAttributes) {   
      noStroke();
      this.leaves1.display(this.xPos+280, this.yPos-380, 80);
      this.leaves2.display(this.xPos+400, this.yPos-530, 100);
      this.leaves3.display(this.xPos+375, this.yPos-440, 100);    
      this.leaves4.display(this.xPos+460, this.yPos-300, 100);    
      this.leaves5.display(this.xPos+230, this.yPos-540, 100);    
      this.leaves6.display(this.xPos+279, this.yPos-420, 100);    
      this.leaves7.display(this.xPos+450, this.yPos-470, 80);    
      this.leaves8.display(this.xPos+520, this.yPos-350, 40);    
      this.leaves9.display(this.xPos+610, this.yPos-410, 80);    
      this.leaves10.display(this.xPos+640, this.yPos-380, 30);    
      this.leaves11.display(this.xPos+680, this.yPos-330, 150);    
      this.leaves12.display(this.xPos+580, this.yPos-500, 100);    
      this.leaves13.display(this.xPos+700, this.yPos-300, 80);    
      this.leaves14.display(this.xPos+500, this.yPos-400, 20);    
      this.leaves15.display(this.xPos+450, this.yPos-350, 60);    
      fill(tree.treeBaseColor);
   }
  }

  update() {
    if (attributes.start) {
      this.xPos = this.xPos - 10;
    }
  }
}
