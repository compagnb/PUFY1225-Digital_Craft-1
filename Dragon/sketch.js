let p,speed,radius,max; 

function setup() {
  createCanvas(800, 500);
  p = 0;
  speed=100;
  radius=30;
  max=20;
}

function draw() {
  background(255-mouseX);
 fill (mouseX, mouseY, 100)
  for(var i=1,x=radius; i<=max; i++) {
    ellipse(x, (sin(2*3.14*i/max+p)+1.2)*height/4, radius*i/max,radius*i/max);
    x+=radius*i/max;
  }
  
  p+=2*3.14/speed;
  print(p);
  rect(i*radius-250, (sin(2*3.14*i/max+p)+1.2)*height/4, 24, 10);
     rect(i*radius-250, (sin(2*3.14*i/max+p)+1.2)*height/4+20, 24, 10);
    ellipse(i*radius-270, (sin(2*3.14*i/max+p)+1.2)*height/4, 50, 35);
  triangle(i*radius-235, (sin(2*3.14*i/max+p)+1.2)*height/4+30, i*radius-270, (sin(2*3.14*i/max+p)+1.2)*height/4+30, i*radius-300,  (sin(2*3.14*i/max+p)+1.2)*height/4-10);
  ellipse(i*radius-280, (sin(2*3.14*i/max+p)+1.2)*height/4+5, 25, 25);
   ellipse(i*radius-290, (sin(2*3.14*i/max+p)+1.2)*height/4-20, 25, 20);
   ellipse(i*radius-300, (sin(2*3.14*i/max+p)+1.2)*height/4, 25, 20);
    ellipse(i*radius-290, (sin(2*3.14*i/max+p)+1.2)*height/4+20, 25, 20);
      ellipse(i*radius-230, (sin(2*3.14*i/max+p)+1.2)*height/4, 15, 15);
    ellipse(i*radius-250, (sin(2*3.14*i/max+p)+1.2)*height/4-5, 15, 15);
       ellipse(i*radius-260, (sin(2*3.14*i/max+p)+1.2)*height/4-10, 20, 15);
}