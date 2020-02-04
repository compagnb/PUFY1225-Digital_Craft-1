
function setup() {

  createCanvas(400, 400);
   let p = createP('We are beautful, we are doomed');
  p.center();
  p.style('20px');
  p.style('z-index', '-9999');
  p.position(0);


}

function draw() {
  background("#3d752f");
   fill("#2d5837");
   noStroke();
  ellipse (60, 240, 50, 50);
   ellipse (130, 260, 140, 50);
     ellipse (30, 400, 140, 50);
   fill("#2d5837");
   ellipse (70, 220, 50, 50);
     ellipse (100, 350, 50, 50);
     ellipse (380, 200, 80, 200);
   fill("#1b301b");
     ellipse (60, 260, 50, 50);
   fill("#296200");
     ellipse (90, 330, 50, 50);
  fill("#296200");
     ellipse (60, 300, 50, 50);
  fill("#000044");
     ellipse (60, 560, 50, 50);
  fill("#296200");
     ellipse (150, 300, 200, 50);
  fill("#924d3d");
  strokeWeight(3);
  stroke(1);
   triangle(-1, 100, -1, -1, 40, -1); 
    strokeWeight(3);
  stroke(1);
   triangle(100, -5, 300, -5, 400, 370);
   noStroke();
  fill("#509230");
     ellipse (370, 310, 90, 160);
   fill("#efc227");
     ellipse (200, 300, 200, 100);
  fill("#efc227");
     rect (130, 200, 190, 200);
  triangle(130, 199, 200, 400, 100, 305); 
   triangle(170, 306, 130, 400, 100, 306); 
    triangle(400, 400, 300, 400, 320, 200); 
  triangle(300, 200, 400, 50, 320, 300); 
    triangle(130, 200, 100, 50, 250, 300);
  fill("#d55318");
   strokeWeight(2);
   stroke("#8e3102");
  ellipse (140, 300, 50, 50);
    ellipse (300, 300, 50, 50);
   fill("#ed7f5c");
  rect (200, 300, 40, 45);
  fill("#601b03");
   ellipse (170, 250, 35, 35);
      ellipse (270, 250, 35, 35);
  rect (215, 270, 10, 4);
  triangle(365, 101, 400, 50, 384, 100); 
    triangle(110, 101, 100, 50, 130, 100); 
  
  erase();
  ellipse(mouseX, mouseY, 100, 100);
  noErase();}

