var myState = 0;
var timer = 0;
var y = 0;

function preload() {

}



function setup() {
  // put setup code here
  createCanvas(820, 820);
  textSize(35);
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:

      background('#80bfff');

      //rocket
      fill('red');
      ellipse(400, 550, 150, 200);

      fill('red');
      ellipse(300, 550, 150, 200);


      fill('white');
      ellipse(350, 470, 150, 350);





      noStroke();
      fill('#80bfff');
      rect(300, 600, 100, 200);


      //rocket
      fill('white');
      ellipse(350, 400, 75, 75);

      fill("#4da6ff");
      ellipse(350, 400, 75, 75);

      fill("white");
      ellipse(350, 400, 50, 50);

      fill('red');
      triangle(350, 250, 290, 350, 410, 350);



      fill('#ffff66');
      ellipse(350, 650, 75, 90);
      //rocket end

      text("Journey Through the Stars", 250, 100);



      break;

    case 1:

      background('#80bfff');


      //rocket
      fill('red');
      ellipse(400, 550, 150, 200);

      fill('red');
      ellipse(300, 550, 150, 200);


      fill('white');
      ellipse(350, 470, 150, 350);

      noStroke();
      fill('#80bfff');
      rect(300, 600, 100, 200);



      fill('white');
      ellipse(350, 400, 75, 75);

      fill("#4da6ff");
      ellipse(350, 400, 75, 75);
      //rocket
      fill("white");
      ellipse(350, 400, 50, 50);

      fill('red');
      triangle(350, 250, 290, 350, 410, 350);
      //rocket end
      fill('white');
      ellipse(370, 50, 62, 62);
      fill('white');
      ellipse(280, 50, 62, 62);
      fill('white');
      ellipse(300, 50, 62, 62);
      fill('white');
      ellipse(290, 35, 62, 62);

      fill('white');
      ellipse(370, 50, 62, 62);
      fill('white');
      ellipse(360, 50, 62, 62);
      fill('white');
      ellipse(350, 50, 62, 62);
      fill('white');
      ellipse(350, 35, 62, 62);

      fill('white');
      ellipse(570, 50, 42, 42);
      fill('white');
      ellipse(560, 50, 42, 42);
      fill('white');
      ellipse(540, 50, 42, 42);
      fill('white');
      ellipse(550, 35, 42, 42);

      fill('white');
      ellipse(470, 300, 62, 62);
      fill('white');
      ellipse(460, 300, 62, 62);
      fill('white');
      ellipse(456, 280, 62, 62);
      fill('white');
      ellipse(450, 300, 62, 62);


      //rocket
      fill('#ffff66');
      ellipse(350, 650, 75, 90);

      //rocket end
      text("Liftoff!", 100, 100);

      timer++;
      if (timer >= 200) {

        myState = 2;
        timer = 0;


      }



      break;

    case 2:



      background('black');

      //rocket
      fill('red');
      ellipse(400, 550, 150, 200);

      fill('red');
      ellipse(300, 550, 150, 200);


      fill('white');
      ellipse(350, 470, 150, 350);
      //rocket end


      fill('#d1d1e0');
      ellipse(600, y, 100, 100);



      noStroke();
      fill('black');
      rect(300, 600, 100, 200);


      //rocket
      fill('white');
      ellipse(350, 400, 75, 75);

      fill("#4da6ff");
      ellipse(350, 400, 75, 75);

      fill("white");
      ellipse(350, 400, 50, 50);

      fill('red');
      triangle(350, 250, 290, 350, 410, 350);



      fill('#ffff66');
      ellipse(350, 650, 75, 90);

      //rocket end
      text("Past the Moon!", 50, 150);


      y+= .5;
      if (y < 0) {
    y= -1;

      }




      timer++;
      if (timer >= 250) {

        myState = 3;
        timer = 0;


      }

      break;

    case 3:


      background('black');

      //rocket
      fill('red');
      ellipse(400, 550, 150, 200);

      fill('red');
      ellipse(300, 550, 150, 200);


      fill('white');
      ellipse(350, 470, 150, 350);
      //rocket end


      fill('#ff9900');
      ellipse(600, y, 200, 200);

      fill('yellow');
      ellipse(300, 50, 10, 10);

      fill('yellow');
      ellipse(400, 70, 10, 10);

      fill('yellow');
      ellipse(20, 60, 10, 10);

      fill('yellow');
      ellipse(500, 65, 10, 10);

      fill('yellow');
      ellipse(30, 350, 10, 10);

      fill('yellow');
      ellipse(600, 500, 10, 10);

      fill('yellow');
      ellipse(50, 330, 10, 10);

      fill('yellow');
      ellipse(650, 490, 10, 10);

      fill('yellow');
      ellipse(550, 480, 10, 10);

      fill('yellow');
      ellipse(280, 320, 10, 10);

      fill('yellow');
      ellipse(200, 400, 10, 10);

      fill('yellow');
      ellipse(200, 600, 10, 10);


      fill('yellow');
      ellipse(400, 20, 10, 10);





      noStroke();
      fill('black');
      rect(300, 600, 100, 200);


      //rocket
      fill('white');
      ellipse(350, 400, 75, 75);

      fill("#4da6ff");
      ellipse(350, 400, 75, 75);

      fill("white");
      ellipse(350, 400, 50, 50);

      fill('red');
      triangle(350, 250, 290, 350, 410, 350);



      fill('#ffff66');
      ellipse(350, 650, 75, 90);
      //rocket end

      text("Past the Moon!", 50, 150);
      text("Around Mars!", 10, 500);


      y+= .5;
      if (y < 5) {
    y= -1;

      }


      timer++;
      if (timer >= 250) {

        myState = 4;
        timer = 0;


      }
      break;
    case 4:



      background('black');

      //rocket
      fill('red');
      ellipse(400, 550, 150, 200);

      fill('red');
      ellipse(300, 550, 150, 200);


      fill('white');
      ellipse(350, 470, 150, 350);
      //rocket end


      fill('#0066ff');
      ellipse(640, y, 300, 300);

      fill('yellow');
      ellipse(300, 50, 10, 10);

      fill('yellow');
      ellipse(400, 70, 10, 10);

      fill('yellow');
      ellipse(20, 60, 10, 10);

      fill('yellow');
      ellipse(500, 65, 10, 10);

      fill('yellow');
      ellipse(30, 350, 10, 10);

      fill('yellow');
      ellipse(600, 500, 10, 10);

      fill('yellow');
      ellipse(50, 330, 10, 10);

      fill('yellow');
      ellipse(650, 490, 10, 10);

      fill('yellow');
      ellipse(550, 480, 10, 10);

      fill('yellow');
      ellipse(280, 320, 10, 10);

      fill('yellow');
      ellipse(200, 400, 10, 10);

      fill('yellow');
      ellipse(200, 600, 10, 10);


      fill('yellow');
      ellipse(400, 20, 10, 10);





      noStroke();
      fill('black');
      rect(300, 600, 100, 200);


      //rocket
      fill('white');
      ellipse(350, 400, 75, 75);

      fill("#4da6ff");
      ellipse(350, 400, 75, 75);

      fill("white");
      ellipse(350, 400, 50, 50);

      fill('red');
      triangle(350, 250, 290, 350, 410, 350);



      fill('#ffff66');
      ellipse(350, 650, 75, 90);
      //rocket end

      text("Past the Moon!", 50, 150);
      text("Around Mars!", 10, 500);
      text("Goodbye Neptune!", 500, 700);

      y+= .5;
      if (y < 5) {
    y= -1;

      }


      timer++;
      if (timer >= 250) {

        myState = 5;
        timer = 0;


      }

      break;


    case 5:




      background('black');



      //rocket
      fill('red');
      ellipse(400, 550, 150, 200);

      fill('red');
      ellipse(300, 550, 150, 200);


      fill('white');
      ellipse(350, 470, 150, 350);

      //rocket end

      fill('#e65c00');
      ellipse(350, 125, 300, 250);

      fill('black');
      ellipse(350, 100, 100, 50);



      noStroke();
      fill('black');
      rect(300, 600, 100, 200);

      //rocket

      fill('white');
      ellipse(350, 400, 75, 75);

      fill("#4da6ff");
      ellipse(350, 400, 75, 75);

      fill("white");
      ellipse(350, 400, 50, 50);

      fill('red');
      triangle(350, 250, 290, 350, 410, 350);








      fill('#ffff66');
      ellipse(350, 650, 75, 90);

      //rocket end

      text("Uh oh. Space Donut.", 275, 800);



      timer++;
      if (timer >= 250) {

        myState = 1;
        timer = 0;


      }





      break;
  }
}

function mouseReleased() {
  myState = myState + 1;
  if (myState = 1) {
    myState = 1;
  }

}
