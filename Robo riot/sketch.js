let button;
 //I befriend computer with new function
///references: https://editor.p5js.org/michaelblum/sketches/rJvS5b2pW

function setup() {
  createCanvas(windowHeight, windowWidth);
  
    rectMode(CENTER); //i make this central thing for rotation

  button = createButton("Join riot"); //I make a button that updates counter
  button.mousePressed(randomRectangle); //and make it actually work
    button.position(windowHeight*2/3,windowWidth*2/3); //I locate it
  button.size(200,100); //set it size
    button.style("background-color", "#ff4ea1"); //make it cuter
  button.style("font-family", "Intro"); //make text cuter
     button.style("color", "#ecee3e"); //and text color better

 
}
let count = 23409; //I don't want to start counter from 0

function draw() {
  background("#1d2d81")
   textSize(100);
fill("#ecee3e");
  text(count,width/4, height/3); //I have set up counter
  
  textSize(30);
fill("#ecee3e");
  text("robot allies right now",width/4+50, height/3+50);
  textFont('intro'); //I have added some text to counter
  for(var i= -100; i < width; i+=300){
    
    
  robot(i, 100, 1);
  robot2(i+150, 700, 1);
  }
  
  
}
  
  function robot(x, y, s){ //want to make some robots
   push();
  translate(x, y);
      scale(s); //size adjust
  noStroke();
  rect (120, 70, 80, 50); //robo head
   rect (120, 150, 90, 100); //robo body
   rect (140, 230, 25, 70); //robo leg
    rect (100, 230, 25, 70); //robo leg 2
   fill("#ff4ea1");
     rect (120, 150, 70, 80); //robo belly
  rect (120, 85, 30, 15);
    ellipse (90, 75, 20, 20);
      ellipse (150, 75, 20, 20);

  fill("#ecee3e");
     rotate(10);
    rect (-110, -75, 25, 70);//robo arm
  rotate(80);
    rect (10, -225, 25, 70);//robo arm 2
    fill("#ff4ea1");
    rotate(80)
           rect(240, 20, 10, 100); //stick
      rotate(135)
    rect(-240, 50, 200, 100); //banner
     rotate(135);
    fill("#ecee3e");
    textSize(20);
    text("Humans are",150,-30); //text
    text("difficult",190, 0); //text
    
    
 
     pop();
  
}

function robot2(x, y, s){ //want to make another rioting robot
   push();
  translate(x, y);
      scale(s); //size adjust
  noStroke();
  fill("#ff4ea1");
  rect (120, 70, 80, 50); //robo head
   rect (120, 150, 90, 100); //robo body
   rect (140, 230, 25, 70); //robo leg
    rect (100, 230, 25, 70); //robo leg 2
   fill("#ecee3e");
     rect (120, 150, 70, 80); //robo belly
  rect (120, 85, 30, 15);
    ellipse (90, 75, 20, 20);
      ellipse (150, 75, 20, 20);

  fill("#ff4ea1");
     rotate(10);
    rect (-110, -75, 25, 70);//robo arm
  rotate(80);
    rect (10, -225, 25, 70);//robo arm 2
    fill("#ecee3e");
    rotate(80)
           rect(240, 20, 10, 100); //stick
      rotate(135)
    rect(-240, 50, 200, 100); //banner
     rotate(135);
    fill("#ff4ea1");
    textSize(20);
    text("They're bad",150,-30); //text
    text("at math",190, 0); //text
    
    
 
     pop();
  
}



  
  

function randomRectangle(){
  count++;
  //this function makes counter work
}
