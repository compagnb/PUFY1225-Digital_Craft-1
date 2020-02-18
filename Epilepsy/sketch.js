let a, i;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  for(var i= 0; i < width; i+=40){
  for (var a= 0; a < height; a+=40){
  ellipse(a, i, random(10, 250), random(10, 250));
    fill(random(0, 255), random(0, 255), random(0, 255));
       }
  }
}
