let a,i;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  for(var i= 20; i < width; i+=40){
  for (var a= 20; a < height; a+=40){

     noFill();
    ellipse(a, i, 20, 20);
    fill("#000000");
    rect(a, i, 20, 20);
   fill (mouseX, mouseY, 100);
    ellipse(200, 200, 390, 390);
      fill (mouseX, 200, mouseY);
       ellipse(200, 200, mouseX, mouseX);
       fill (200, mouseY, mouseX);
    ellipse(200, 200, mouseY, mouseY);
    line(mouseX+i, 0, 200, 200,);
 line(0, mouseX+i, 200, 200,);  
    line(mouseX+i, 400, 200, 200,);  
    line(400,mouseX+i, 200, 200,);
  
    
    
  }
  }
}
