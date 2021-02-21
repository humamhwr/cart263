// How many clicks
let clicks = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Display the number of clicks
  push();
  textSize(64);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255, 255, 0);
  text(clicks, width / 2, height / 2);
  pop();
}

function mousePressed() {
  // Track clicks
  clicks++;
}
