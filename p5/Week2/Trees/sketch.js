function setup() {
  // put setup code here
   createCanvas(720, 400);
}

function draw() {
  // put drawing code here
  background('#9933ff');
 noStroke();

  fill ( 141, 275, 142 ) ;
  ellipse(100, 100, 150, 150);
  fill('white');
    ellipse(210, 30, 50, 50);
    fill('white');
      ellipse(210, 70, 50, 50);
      fill('white');
        ellipse(220, 30, 50, 50);
 //
  fill( ' #996600');
  rect(400, 200, 63, 200);


 //
 // fill(204);
 // quad(189, 18, 216, 18, 216, 360, 144, 360);
 //
 // fill(255);
 // ellipse(252, 144, 72, 72);
 //
//  fill(204);
 //triangle(320, 18, 250, 360, 28, 360);
 //
  fill('#009933');
  ellipse(435, 200, 180, 180, PI, TWO_PI);



fill(0);
textsize(30);
text(mouseX + "," + mouseY, 50, 50);
}
