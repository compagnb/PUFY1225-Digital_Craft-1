let t="nothing";
let pg;
//I wanna make a texture
function setup() {
  createCanvas(400, 400, WEBGL);
  let inp = createInput(' '); //i create input for the text
  inp.input(myInputEvent); //I create actually input
  pg = createGraphics(200, 200); //texture setup
  pg.textSize(75); //texture setup

}

function draw() {
  
  background("#404770");
  
  rectMode(CENTER);
  pg.background(255); //making texture settings
  pg.text(t, 20, 100); //making texture spell

  
    rotateX(mouseY/10) //I make a robot rotate
  rotateY(mouseX/10);

pointLight(255, 0, 0, 10, 10, 100); //light 1
  pointLight(255, 255, 255, 50, 100, 50); //light 2
  specularMaterial(100, 100, 50); //glossy texture
  
 
texture(pg);
   push();
  translate(0, -50);
box(50, 50, 75) //head
   pop();
  push();
  translate(0, 15);
   box(60, 85, 75) //body
  pop();
  push();
  translate(0, 90, 20);
   box(15, 75, 15) //leg
  pop();
  push();
    translate(0, 90, -20);
    box(15, 75, 15) //leg 2

  pop();
 push();
  translate(-20, 0, 45);
  rotate(20);
   box(15, 75, 15) //arm 1
  pop();
   push();
  translate(-20, 10, -45);
    rotate(20);
   box(15, 75, 15) //arm 2
  pop();
   
   push();
  translate(-50, 15,0);
  box(10, 60, 75)//ear
  pop();
  
     push();
  translate(-20, -50,-20);
  rotate(156);
   cylinder(15, 30, 10) //eye 1
  pop();
   push();
  translate(-20, -50,20);
  rotate(156);
   cylinder(15, 30, 10) //ear 2
  pop();
     //make my texture work
  

}

//define the spelling stuff
function myInputEvent() {
  t=this.value();
  console.log('you are typing: ', this.value());
}
