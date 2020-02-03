function setup() {
  createCanvas(1000, 800);
 background("#bbbbbb");
}
function draw() {
    
   if (mouseIsPressed) {

     if (keyIsDown(87)) {
        noStroke();
      fill ("#ffff00");
   ellipse(mouseX, mouseY, 7, 7); } else {

    
   if (keyIsDown(83)) {
        noStroke();
      fill ("#00ffff");
     ellipse(mouseX, mouseY, 7, 7);} else {

   if (keyIsDown(65)) {
        noStroke();
      fill ("#ff00ff");
  ellipse(mouseX, mouseY, 7, 7); } else {
     noStroke();
      fill ("#000000");
   ellipse(mouseX, mouseY, 7, 7); } } }
   } else {
    noStroke();
      fill ("#bbbbbb");
   ellipse(mouseX, mouseY, 7, 7);
 }

} 
  