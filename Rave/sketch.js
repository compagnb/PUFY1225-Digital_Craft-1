function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background("#7849fb");
  rectMode(CENTER);
  rotateX(frameCount * 0.01)
    rotateY(frameCount * 0.01)


   for(var i= 0; i < width; i+=40){
 for (var a= 0; a < height; a+=40){
   noStroke();
   fill (200, a, i);
  ellipse(a, i, 50, 50);
    rotateZ(frameCount * 0.04)
   torus(100, 10)
  box(100, 100, 100);
 }
 }
}