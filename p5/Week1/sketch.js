function setup() {
  // put setup code here
createCanvas(700, 450);
}


function draw() {
  background(" #000000");
  fill(0);

  if (mouseIsPressed) {
    // this is where the pressed shapes go

    noStroke();
      background('#000000');
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

       fill( ' white');
       rect(400, 200, 63, 200);

        fill('#66ff33'); rect (350,170,120,120);
        fill('#66ff33'); triangle(400,200,351,360,288,360);
        fill('#66ff33'); rect(230,170,120,120);
        fill(255); rect(360,180,100,100);
        fill(255); rect(240,180,100,100);
        fill('#66ff33'); arc(350,450,270,270,PI,TWO_PI);
        fill('#66ff33'); arc(350,300,280,290,PI,TWO_PI);
        fill('#ffff99');
        ellipse(370,250,72,72);
        fill('#ffff99');
        ellipse(280,250,72,82);
        fill('white');
        ellipse(370,250,42,42);
        fill('white');
        ellipse(280,250,42,42);
        fill('#e60000');
        ellipse(600,45,90,90);
        fill('#ffff99')
        rect(260,175,50,20)
        fill('#ffff99');
        rect(350,175,50,20);
        fill('#e60000');
        rect(81,81,50,150);
        fill('#e60000');
        rect(20,81,50,150);



        textSize(15);
        textAlign(CENTER);
        fill('255');
        text('BAD! BAD! BAD! BAD! BAD! ', 20, 10, 690, 500);



  }


  else {
    // this is where unpressed shapes go, build character first



noStroke();
  background('#99b3ff');
  noStroke();


   fill('white');
     ellipse(245, 50, 50, 50);
     fill('white');
       ellipse(230, 30, 50, 50);
       fill('white');
         ellipse(220, 50, 50, 50);

         fill('white');
           ellipse(385, 50, 50, 50);
           fill('white');
             ellipse(370, 30, 50, 50);
             fill('white');
               ellipse(360, 50, 50, 50);

  //
   fill( ' #996600');
   rect(400, 200, 63, 200);

  fill('#009933');
   ellipse(435, 200, 180, 180, PI, TWO_PI);
    fill('#009900'); rect (350,170,120,120);
    fill('#009900'); triangle(400,200,351,360,288,360);
    fill('#009900'); rect(230,170,120,120);
    fill(255); rect(360,180,100,100);
    fill(255); rect(240,180,100,100);
    fill('#33cc33'); arc(350,450,270,270,PI,TWO_PI);
    fill('#33cc33'); arc(350,300,280,290,PI,TWO_PI);
    fill('#ffff99');
    ellipse(370,250,72,72);
    fill('#ffff99');
    ellipse(280,250,72,82);
    fill('yellow');
    ellipse(600,45,90,90);
    fill('#ffff99')
    rect(260,175,50,20)
    fill('#ffff99');
    rect(350,175,50,20);






    textSize(15);
    textAlign(CENTER);
    fill('black');
    text('Cat Eyes has the ability to trap a persons soul.  It determines this based on whether or not you have good karma or bad karma. If trapped, the person continues to stare eyes wide open for eternity. ', 20, 10, 690, 500);

  }

}

function mouseReleased() {
    console.log(mouseX + ', ' + mouseY );
}
