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
   triangle(mouseX, mouseY, 30, 50, 50, 100);
  triangle(200, mouseY, 200, 50, 40, 50);
  triangle(mouseX, 200, 300, 50, 50, 50);
   triangle(400, mouseX, 300, 60, 40, 50);
   triangle(mouseY, mouseX, 300, 60, 40, 50);
}