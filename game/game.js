var rectHeight;
var rectWidth;
var rectY;
var background;
let bg;

var balX;
var balY;
var speedX;
var speedY;

var ScoreText1;
var ScoreText2;
var score1;
var score2;

function setup() {
  createCanvas(900, 542);
  rectHeight = 100;
  rectWidth = 20;
  //background1 = 180;
  rectY = height/2;
  bg = loadImage('assets/tafel.jpg');
  balX = width/2;
  balY = height/2;
  speedX = 10;
  speedY = 4;
  
  score1=0;
  score2=0;
  ScoreText2 = str(ScoreText2);
  ScoreText1 = str(ScoreText1);
}

function draw() {
  image(bg, 0, 0);
  //background(0);
  background(bg);
  fill(0);
  rectMode(CENTER);
  rect(20, rectY, rectWidth, rectHeight);
  rect(width-20, rectY, rectWidth, rectHeight);

  //create ball
  fill(200);
  ellipse(balX, balY, 20, 20);
  //move
  balX += speedX;
  balY += speedY;

  if (balY > 478 || balY < 65) {
    speedY = speedY * -1;
  }

  if ((balX < 40) && (balY < rectY+50 && balY > rectY-50)) {
    //en rectY moet tussen boven en onderste stuk zitten.
    speedX = random(5, 10);
    speedY = random(1, 10);
    //random kleuren nog?
  }

  if ((balX > width-40) && (balY < rectY+50 && balY > rectY-50)) {
    //en rectY moet tussen boven en onderste stuk zitten.
    speedX = random(5, 10) *-1;
    speedY = random(1, 10);
  }

  if (balX<0) {
    alert("Player 1 LOSES");
    balX = width/2;
    balY = height/2;
    score2++;
  }

  if (balX>width) {
    alert("PLAYER 2 LOSES");
    balX = width/2;
    balY = height/2;
    score1++;
  }

  fill(0);
  ScoreText1 = "Score:  " + str(score1) + "  - " ;
  ScoreText2 =str(score2);
  textSize(50);
  text(ScoreText1, 300, 50);
  text(ScoreText2, 570, 50);
}

function mouseMoved() {
  rectY = mouseY;
}

//// verslag wat er van geleerd:
//was heel erg vergelijkbaar met wat we al hadden met processing
//wel leuk om kleine dingen te zien die anders waren
//snap alleen niet echt nou waar je het voor nodig hebt
//wel leuk klein steppele

//https://www.stijnwolters.nl/resources/files/P5_Manual.pdf
