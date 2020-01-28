var xPos = 1;
var yPos = 2;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#b5ccfe");
  ellipse(xPos ,yPos, 70, 70);
  xPos = xPos + 1;
yPos = yPos + 1;
  if (xPos >= 200){
    Xpos = 0;
    }
   triangle(mouseX, mouseY, 30, 50, 50, 60);
  triangle(200, mouseY, 20, 40, 40, 50);
  triangle(mouseX, 200, 70, 50, 50, 50);
   triangle(400, mouseX, 40, 60, 40, 50);
   triangle(mouseY, mouseX, 30, 60, 40, 50);
  triangle(mouseY, 200, 30, 50, 50, 50);
  
   triangle(mouseX, mouseY, 40, 30, 70, 20);
  triangle(200, mouseY, 20, 40, 40, 60);
  triangle(mouseX, 200, 70, 50, 80, 50);
   triangle(400, mouseX, 40, 60, 40, 50);
   triangle(mouseY, mouseX, 30, 60, 40, 50);
  triangle(mouseY, 200, 30, 50, 50, 50);
}