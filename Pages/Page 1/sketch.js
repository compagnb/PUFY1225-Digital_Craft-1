
function setup() {
  createCanvas(windowHeight, windowWidth);
link = createA('http://p5js.org/', 'this is a link','_blank');
  link.position(windowWidth/3,windowHeight/1.05);
}

function draw() {
  background(220);
  rectMode (CENTER);
  noStroke();
   fill("#535353");
  rect(windowHeight/2,windowWidth/2,windowWidth*2, windowHeight*2);
   fill("#c6c6c6");
  rect(windowHeight/2, windowWidth/2, windowWidth/1.3, windowHeight/1.3);
  fill("#efefef");
   rect(windowHeight/2, windowWidth/2, windowWidth/1.3, windowHeight/1.75);
 image(gif_loadImg, 50, 50);
  
  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  gif_createImg.position(50, 350);



}