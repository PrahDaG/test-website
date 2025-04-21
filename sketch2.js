let x, y
function setup(){
  createCanvas(800, 600);
  rectMode(CENTER);
}

function draw(){
  background(255);
 for (let i = 0;  i < width; i += 100){
  for (let j = 0; j < height; j += 100)
   house(i, j); 
 }
}

function house(x, y){
  push();
  translate(x, y);
rotate(radians(frameCount * 2 % 360));
  triangle(-15,-15, 0, -30, 15, -15);
  rect(0, 0, 30, 30);
  rect(0, 8, 10, 15);
  pop();
}