/*
 Program by Stijn Brugman and Froukje Temme
 Date: 26th of October 2019
 Program: remake of a postcard, then turned varo a game. You have to kill the objects or
 move around them. 
 Instructions of the game: move with UP DOWN LEFT RIGHT, shooting with space bar.
 You get povars by begin alive, also get povars when you shoot an object, lose povars when you hit an object.
 */

let tree;
let background1;
let attributes;
let character;
let gui;
let bullet;
let sound;

//define arrays?
let air = [];
let air2 = [];
let ladders = [];
let balloons = [];
let houses = [];
let chairs = [];
let sailboats = [];
let suitcases = [];
let leafs = [];    
let hearts = [];
let startHearts = [];

function preload() {
  //initialize sound
  soundFormats('mp3'); // specify we are using mp3
  sound = loadSound("assets/explosion.mp3");
}

function setup() {
  // we play this game on fullscreen for mac, but for other users you can use this size
  //fullScreen();  
  createCanvas(1440, 770);
  //createCanvas(1400, 700);
  character = new Player(width/2+180, height/2);
  attributes = new Attributes();
  background1 = new Background(width, 0, attributes);
  tree = new Tree(0, 700, color(111, 88, 31), attributes);
  gui = new GUI(attributes, character);
  bullet = new Bullet();


  // define arrays
  for (let n=0; n<200; n++) {
    air.push(new Air(random(0, width+30), random(0, height), random(1, 10), random(1, 2), random(10, 15), 255));
  }
  for (let i=0; i<200; i++) {
    air2.push(new Air(random(0, width+30), random(0, height), random(1, 10), random(1, 2), random(10, 15), 255));
  }

  for (var i = 0; i<2; i++) {
    ladders.push(new Ladder(int(random(-2000, 0)), int(random(0, height)), int(random(0, 360))));
  }
  for (var a=0; a<2; a++) {
    balloons.push(new Balloon(int(random(-2000, 0)), int(random(0, height)), int(random(0, 360))));
  }

  for (var b = 0; b<2; b++) {
    houses.push(new House(int(random(-2000, 0)), int(random(0, height)), int(random(0, 360))));
  }
  for (var c = 0; c<2; c++) {
    chairs.push(new Chair(int(random(-2000, 0)), int(random(0, height)), int(random(0, 360))));
  }
  for (var d = 0; d<2; d++) {
    sailboats.push(new Sailboat(int(random(-2000, 0)), int(random(0, height)), int(random(0, 360))));
  }
  for (var e = 0; e<2; e++) {
    suitcases.push( new Suitcase(int(random(-2000, 0)), int(random(0, height)), int(random(0, 360))));
  }
  for (var f = 0; f<2; f++) {
    leafs.push(new Leaf(int(random(-2000, 0)), int(random(0, height)), int(random(0, 360))));
  }
  //only one hart at a time is created during the game
  for (var g = 0; g<1; g++) {
    hearts.push(new Heart(int(random(-2000, -1000)), int(random(0, height))));
  }
  // start hearts
  for (var z =0; z < 5; z++) {
    startHearts.push( new Heart(20+gui.dx, 40));
    gui.dx = gui.dx + 55;
  }
}


function draw() {
  background1.display();
  background1.update();
  character.display();
  character.update();
  character.movement();
  tree.display();
  tree.update();
  attributes.display();
  attributes.update();
  attributes.startGame();
  gui.display();
  gui.povarUpdate();
  bullet.display(gui, attributes);
  bullet.update(character);
  background1.foregroundAir(); // this air will go over everything
}

function keyPressed() {
  // movement of the player
  if (keyCode == RIGHT_ARROW) {
    character.isPressedMoveRight(true);
  } else if (keyCode == LEFT_ARROW) {
    character.isPressedMoveLeft(true);
  } else if (keyCode == UP_ARROW) {
    character.isPressedMoveUp(true);
  } else if (keyCode == DOWN_ARROW) {
    character.isPressedMoveDown(true);
  }
  //starting the game
  if (key == 'f' || key == 'F') {
    attributes.isKeyPressed();
    background1.update();
    sound.play();
  }
  //resetting the game
  if (key == 'r' || key == 'R') {
    gui.reset1();
    sound.play();
  }
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW) {
    character.isPressedMoveRight(false);
  } else if (keyCode == LEFT_ARROW) {
    character.isPressedMoveLeft(false);
  } else if (keyCode == UP_ARROW) {
    character.isPressedMoveUp(false);
  } else if (keyCode == DOWN_ARROW) {
    character.isPressedMoveDown(false);
  }
}
