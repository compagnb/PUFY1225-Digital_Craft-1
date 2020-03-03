function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background("#7040f0");
  rectMode(CENTER);
  rotateX(frameCount * 0.01)
    rotateY(frameCount * 0.01)

pointLight(255, 0, 0, 10, 10, 100);
  pointLight(0, 0, 255, 10, 100, 10);
    pointLight(0, 255, 0, 100, 10, 10);
  specularMaterial(100, 100, 100);
 
   noStroke();

 torus(100, 10)
  box(100, 100, 100);

}