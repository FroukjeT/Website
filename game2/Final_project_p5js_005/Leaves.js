class Leaves {
  constructor() {
  }

  display(initxCircle, inityCircle, initr) {
    var xCircle = initxCircle;
    var yCircle = inityCircle;
    var r = initr;
    //leafsDensity is about how bigger the non-visible circle is you wanna draw you leaves in, the more leaves you want to spawn
    var leafsDensity = pow(r, 2)/10;
    for (var i=0; i<leafsDensity; i++) {
      //picking a random x value that in between the circle, giving the fitting y value so it stays in between the circle
      var x = random(xCircle-r, xCircle+r);
      var dx = x - xCircle;
      var dy = sqrt(pow(r, 2)-pow(dx, 2));
      var y = random(yCircle-dy, yCircle+dy);
      var treeLeafsColor = color(0, random(40, 210), random(5, 30), 100);
      fill(treeLeafsColor);
      ellipse(x, y, 10, 10);
    }
  }
}
