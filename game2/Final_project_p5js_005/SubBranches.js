class SubBranches {
  contructor() {
  }

  display(initxPosition, inityPosition, initbranchRotate) {
    var xPosition = initxPosition;
    var yPosition = inityPosition;
    var branchRotate = initbranchRotate;
    //display the small subbranches at the end of the bigger sidebranches
    for (let i = 0; i<4; i++) {
      push();
      translate(xPosition, yPosition);
      rotate(branchRotate+i*PI/8);
      stroke(tree.treeBaseColor);
      strokeWeight(0.5);
      line(0, 0, -10, 10);
      pop();
      noStroke();
    }
  }
}
