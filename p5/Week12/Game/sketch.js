
var cars = [];
var frogPos;
var myState = 0 ;
var maxCars = 8;
var maxTimer = 12*60 ;
var timer = maxTimer ;
var clean;
var covid;
var magic;
var winner;
var gameover;
var belt;



function preload() {
belt = loadSound('https://elijahbryant.github.io/ATK302/p5/Week12/Game/Assets/Belt2.mp3');


}

function setup() {
  createCanvas(800,800);


  //spawn cars

  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());

  }

frogPos = createVector(400, height-100);
clean = loadImage('https://elijahbryant.github.io/ATK302/p5/Week12/Game/Assets/Clean.jpg');
covid = loadImage('https://elijahbryant.github.io/ATK302/p5/Week12/Game/Assets/COVID.png');
magic = loadImage('https://elijahbryant.github.io/ATK302/p5/Week12/Game/Assets/Magic.jpg');
winner = loadImage('https://elijahbryant.github.io/ATK302/p5/Week12/Game/Assets/Winner.jpg');
gameover = loadImage('https://elijahbryant.github.io/ATK302/p5/Week12/Game/Assets/gameover.png')
imageMode(CENTER);
textAlign(CENTER);

}



function draw() {

switch(myState) {


  case 0:  //menu
image(clean, 400, 400, 800, 800);

  fill('Black') ;
  textSize(24) ;
  text("Keep the world clean! Click to proceed", width/2, height/2) ;
  belt.loop();
  break ;

  case 1:  //game State
  game();

  timer = timer - 1;
  if (timer <= 0 ) {
    timer = maxTimer ;
    myState = 3 ;
  }
  break ;

  case 2:  //win myState
  fill('yellow');
  image(winner, 400, 400, 800, 800) ;
  text ("A brighter future for all.", width/2, height/2) ;
  break ;

  case 3: //lose
image(gameover, 400, 400, 800, 800) ;
fill('red');
  text ("Not clean enough... Click to try again.", width/2, height/2) ;
  break ;
}

}


function mouseReleased() {
  switch(myState) {
    case 0:
    myState = 1 ;
    break ;

    case 2: // they won
    //respawn cars
      timer = maxTimer ;

    for (var i = 0; i < maxCars; i++) {
      cars.push(new Car());

    }

    myState = 0;
    break ;

    case 3: // they lost
    // reset timer
      timer = maxTimer ;
    //respawn cars


    cars = [] ;
    for (var i = 0; i < maxCars; i++) {
      cars.push(new Car());

    }

    myState = 0;
    break ;


  }


}



function game() {
  background ('lightblue');


for (var i = 0; i < cars.length; i++) {
cars[i].display();
cars[i].drive();
if (cars[i].pos.dist(frogPos) < 50) {
  cars.splice(i, 1);

}
}


if (cars.length == 0) {
  myState = 2 ;
}
// frog
fill('green');
image(magic,frogPos.x, frogPos.y, 50, 50);
checkForKeys ();


}

function checkForKeys() {
if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}


function Car() {
// attributes
this.pos = createVector(random(width), random(height));
this.vel = createVector(random(-5, 5), random(-5,5)) ;
this.r = random(255);
this.g = random(255);
this.b = random(255);

// methods
this.display = function () {
  //fill(this.r, this.g, this.b);
  //rect(this.pos.x, this.pos.y, 30, 30) ;
image(covid, this.pos.x, this.pos.y, 30, 30) ;
}


this.drive = function (){
this.pos.add(this.vel);
if (this.pos.x > width) this.pos.x = 0;
if (this.pos.x < 0) this.pos.x = width;
if (this.pos.y > height) this.pos.y = 0;
if (this.pos.y < 0) this.pos.y = height;

}

}
