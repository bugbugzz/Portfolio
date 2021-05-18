let f;
let c;
let thick = 1;
let i;

function setup() {
  canvas = createCanvas(window.innerWidth * 0.885, window.innerHeight * 0.844);
  
  // createCanvas(1195, 565);
    canvas.position(140, 104);
  background(0,75);
  textAlign(CENTER);
  i = 1;
}

function draw() {
  fill(255);
  stroke(0);
  strokeWeight(i);
  rect(1, 1, 50, 50);
  f = loadFont("Arial", 100, true);
  fill(0);
  strokeWeight(thick);
  textFont(f);
  text("RESET", width * 0.022, height * 0.07);
  rect();

  if (mouseIsPressed) {
    strokeWeight(5);
    stroke(255,92,137);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if (
    mouseX > 0 &&
    mouseX < 50 &&
    mouseY > 0 &&
    mouseY < 50 &&
    mouseIsPressed
  ) {
    background(255);
  }
}

function windowResized() {
  size = resizeCanvas(windowWidth * 0.78, windowHeight * 0.74);
  canvas.position(140, 104);
  background(0,75);
}
