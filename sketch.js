let canvasWidth = 800;
let canvasHeight = 800;
let fillColor = "black";

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(30)
  angleMode(DEGREES)
}

function draw() {
  let r = random(100, 150);
  let g = random(255);
  let b = random(200,255);
  background(0);

  fill(map(mouseX,0,canvasWidth,0,255));
  for (let n=0; n< 10; n++ ) {
    rotate(frameCount/2);
    rect(40*n, mouseY, 30, 30);
  }
}