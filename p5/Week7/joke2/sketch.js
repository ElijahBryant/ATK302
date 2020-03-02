var myState = 0;
var timer = 500;


function preload() {

}




function setup() {
  // put setup code here
  createCanvas(800, 800);
  textSize(25);
}

function draw() {
  // put drawing code here
  background('blue');
  switch (myState) {


    case 0:
      text("Was is Canada so gosh darn cold?", 100, 100);
      timer++;
      if (timer >= 1000) {
        myState = 1;
        timer = 2000;
      }
      break;

    case 1:
      text("Idunno I'm bad at making jokes MAPLE SYrup!", 100, 100);
      timer++;
      if (timer <= 200) {
        myState = 1;
        timer = 200;
      }
      break;




  }
}
