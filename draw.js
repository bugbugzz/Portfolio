let f;
let c;


function setup() {
  canvas = createCanvas(windowWidth * 0.795, windowWidth * 0.376);
  canvas.position(0.136 * windowWidth , 0.065 * windowWidth);
  background(247, 247, 247);
  textAlign(CENTER);
  textSize(windowWidth*0.006);
  }

function draw() {
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(0, 0, windowWidth * 0.035, windowWidth * 0.035);
  f = loadFont();
  fill(0);
  strokeWeight();
  textFont(f);
  
  text("RESET", windowWidth * 0.017, windowWidth * 0.02);

  if (mouseIsPressed) {
    strokeWeight(5);
    stroke(255, 92, 137);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if (
    mouseX > 0 &&
    mouseX < 50 &&
    mouseY > 0 &&
    mouseY < 50 &&
    mouseIsPressed
  ) {
    background(247, 247, 247);
  }
}

// Definition of windowResized Function
function windowResized() {
  background(247, 247, 247);
  // canvas = resizeCanvas(windowWidth*0.885, windowWidth*0.418);
  // canvas.position(0.091*windowWidth, 0.068*windowWidth);
  canvas = createCanvas(windowWidth * 0.795, windowWidth * 0.376);
  canvas.position(0.132 * windowWidth , 0.0615 * windowWidth);
  

}


// let f;
// let c;
// let thick = 1;
// let i;

// function setup() {
//   createCanvas(windowWidth * 0.885, windowWidth * 0.418);
//   // canvas = createCanvas(1360, 642);
//   // fullscreen();
//   // canvas.position(140, 104);
//   background(0, 75);
//   textAlign(CENTER);
//   i = 1;
// }

// function draw() {
//   fill(255);
//   stroke(0);
//   strokeWeight(i);
//   rect(1, 1, 50, 50);
//   f = loadFont("Arial", 100, true);
//   fill(0);
//   strokeWeight(thick);
//   textFont(f);
//   text("RESET", width * 0.022, height * 0.07);
//   rect();

//   if (mouseIsPressed) {
//     strokeWeight(5);
//     stroke(255, 92, 137);
//     line(mouseX, mouseY, pmouseX, pmouseY);
//   }

//   if (
//     mouseX > 0 &&
//     mouseX < 50 &&
//     mouseY > 0 &&
//     mouseY < 50 &&
//     mouseIsPressed
//   ) {
//     background(255);
//   }

//   function windowResized() {
//     resizeCanvas(windowWidth * 0.885, windowWidth * 0.418);
// }
// }
