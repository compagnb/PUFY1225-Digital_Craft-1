let p, i, a, slider, ele, button; // i create new fancy functions

function setup() {
createCanvas(800, 600);
  button = createButton("Line");//I create button that changes bg tone
  button.position(300, 300);
  button.mousePressed(changeBG);
   button = createButton("cat"); //I create cat generator
  button.position(150, 300);
  button.mousePressed(drawCat);
slider = createSlider(0, 255, 100); //I make a badly working slider
  slider.position(440, 300);
  slider.style('width', '80px');
  ele = createAudio('Folly Tree - Forest_.mp3');
  ele.autoplay(true);
}
function draw() {
  let val = slider.value();
  background(val, val, 100, 1);
 for (var a= 0; a < height; a+=10){

rect(0, a, 1000, 10)
noStroke();
fill(255-a/2.5, 100, 255, 100); //I've invented gradient
     }  
textFont("Roboto");
textSize(75);
fill('#ffff00')
text("worst GUI ever", 150, 150, 800, 800); //I've added some sassy text
}
function changeBG()  {
  
   let val = random(555);
  background(val);
}
//on click, button line changes bg shade
function drawCat() {
    for(var i= 0; i < width; i+=100){
  for (var p= 0; p < height; p+=100){
     beginShape();
    vertex(i+30, p+20); //start of ear
vertex(i+30, p+10); //ear point 1
  vertex(i+40, p+20); //end of ear
vertex(i+75, p+20); //start ear 2
  vertex(i+85, p+10); //point ear 2
 vertex(i+85, p+20);  //end ear 2
vertex(i+95, p+75); //right side
  vertex(i+85, p+87); //bottom
    vertex(i+35, p+87);// bottom
vertex(i+20, p+75); //left side
endShape(CLOSE);
  }
    }
  //as expected, on click button "cat" generates cats
  
  
}