let a, i, b;
w=40;
angle = 0;
var m = 0;
var offset = 0;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);


    background(220);

  for (var i = -width/2; i< width; i+=w+10){
 for (var a = -height/2; a< height; a+=w+10){
   noStroke();
rotateX(mouseY/40);
   rotateY(mouseX/40);
      
      
    ambientMaterial("#fbfbfb");
      fill (a+200, i+200, b+200);
      var d = dist (i, 0, width/2, height/2);
   offset = map(d, 0, width/2, PI/8, PI);
   m = offset + angle;
      

   push();
   translate(a, i, b);
      translate(i, map(sin(m), -1, 1, -50, 50));
  box(40);
   pop();
        angle+=0.0005;
    }
 }
  

}