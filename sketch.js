var bello=0;


//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  bello= color (75,0,130); //an RGB color for the canvas' background
}

//The draw function happens over and over again
function draw() {
  background(bello);
  //circle
  stroke(25,75,200) // an RGB color for the circle's border
  strokeWeight(3);
  fill(255,255,255,255,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,250,50,50); // center of canvas, 20px dia
  strokeWeight(10);
  fill(mouseX,mouseY,200);
}

function mousePressed(){
  bello= random(255);
}
