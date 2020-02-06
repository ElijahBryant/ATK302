var x= 0;


function setup() {

  createCanvas(800, 800);
}

function draw() {

  background('#000000');

  push();
  translate(x,0);
  fish();
  pop();

  x+= 5 ;
  if (x > width) {
x= -300;

  }

}



function fish() {

  noStroke();
  fill('#e60000');
  ellipse(245, 50, 50, 50);
  fill('#e60000');
  ellipse(230, 30, 50, 50);
  fill('#e60000');
  ellipse(220, 50, 50, 50);
  fill('#ff99cc');
  ellipse(435, 200, 180, 180, PI, TWO_PI);
  //
  fill('#e60000');
  ellipse(385, 50, 50, 50);
  fill('#e60000');
  ellipse(370, 30, 50, 50);
  fill('#e60000');
  ellipse(360, 50, 50, 50);

  fill(' white');
  rect(400, 200, 63, 200);

  fill('#66ff33');
  rect(350, 170, 120, 120);
  fill('#66ff33');
  triangle(400, 200, 351, 360, 288, 360);
  fill('#66ff33');
  rect(230, 170, 120, 120);
  fill(255);
  rect(360, 180, 100, 100);
  fill(255);
  rect(240, 180, 100, 100);
  fill('#66ff33');
  arc(350, 450, 270, 270, PI, TWO_PI);
  fill('#66ff33');
  arc(350, 300, 280, 290, PI, TWO_PI);
  fill('#ffff99');
  ellipse(370, 250, 72, 72);
  fill('#ffff99');
  ellipse(280, 250, 72, 82);
  fill('white');
  ellipse(370, 250, 42, 42);
  fill('white');
  ellipse(280, 250, 42, 42);
  fill('#e60000');
  ellipse(600, 45, 90, 90);
  fill('#ffff99')
  rect(260, 175, 50, 20)
  fill('#ffff99');
  rect(350, 175, 50, 20);
  fill('#e60000');
  rect(81, 81, 50, 150);
  fill('#e60000');
  rect(20, 81, 50, 150);
}
