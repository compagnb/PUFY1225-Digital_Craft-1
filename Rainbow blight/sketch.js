let a,i;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  for(var i= -25; i < width; i+=50){
  for (var a= 0; a < height; a+=50){
    ellipse(a, i, mouseY/10, mouseY/10);
    fill (mouseY, mouseX, a/3);
       ellipse(a-25, i-25, mouseX/10, mouseX/10);
    fill (mouseX, mouseY, i/3);
  }
  }
  
}