var myState = 0;
var timer = 0;

function preload() {

}


function setup() {
  createCanvas(720, 720);
  background('black');

  rectMode(CENTER);
  ellipseMode(CENTER);

}

function draw() {
  // put drawing code here
  // yellow rectangle

  fill('orange');
  rect(width / 2, height / 2, 150, 400);


  switch (myState) {
    case 0:
      fill('red');
      ellipse(width / 2, height / 3, 100, 100);
      timer++;
      if (timer >= 200) {

        myState = 1;
        timer = 0;


      }
      break; // red light

    case 1:
      fill('yellow');
      ellipse(width / 2, height / 2, 100, 100);


      timer++;

      if (timer >= 200) {
          myState = 2;
        timer = 0;
      }
      break; // yellow light



    case 2:
      fill('green');
      ellipse(width / 2, height / 1.5, 100, 100);

      timer++;

      if (timer >= 200) {
        myState = 3;
        timer = 500;
      }
      break; // green light
  }
}
