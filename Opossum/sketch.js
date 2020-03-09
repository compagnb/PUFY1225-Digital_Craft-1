function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background("#7849fb");
  rectMode(CENTER);
  
    rotateY(frameCount * 0.01)

pointLight(255, 0, 0, 10, 10, 100);
  pointLight(0, 0, 255, 10, 100, 10);
    pointLight(0, 255, 0, 100, 10, 10);
  specularMaterial(100, 100, 100);
 
   noStroke();

 ellipsoid(50, 35, 35) //head
  push();
  translate(0, 10);
   ellipsoid(70, 25, 25) //muzzle
  pop();
  push();
  translate(70, -15);
   ellipsoid(90, 50, 50) //body
  pop();
  push();
    translate(-20, -9, 0);
    cone(20, 90); //tail

  pop();
 push();
  translate(130, 10, 20);
   ellipsoid(20, 40, 20) //leg 1
  pop();
   push();
  translate(120, 10, -30);
   ellipsoid(20, 40, 20) //leg 2
  pop();
    push();
  translate(40, 20, -30);
   ellipsoid(20, 40, 20) //arm 1
  pop();
      push();
  translate(30, 20, 20);
   ellipsoid(20, 40, 20) //arm 2
  pop();
  
   push();
  translate(0, -20,30);
   ellipsoid(10, 30, 30) //ear
  pop();
  
     push();
  translate(0, -20,-30);
   ellipsoid(10, 30, 30) //ear 2
  pop();
  

}
