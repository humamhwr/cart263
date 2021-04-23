"use strict";

/**
BUBBLE POPPER!
Hummam Houara

The user will be able to pop diffrent colored circles using their finger.
Each finger tip will be a color that will pop the circle that matches its color.
*/

// camera variable
let camera;

//  hand variable
let hand = undefined;

// predictions variable
let predictions = [];
const PIN_SIZE = 20;

// Storing the bubbles and the colored bubbles.
let bubbles = [];
let bubble;
let red;
let pink;
let blue;
let black;


// index finger
let indexTipX = undefined;
let indexTipY = undefined;
let indexBaseX = undefined;
let indexBaseY = undefined;

// middle finger
let middleTipX = undefined;
let middleTipY = undefined;
let middleBaseX = undefined;
let middleBaseY = undefined;

// ring finger
let ringTipX = undefined;
let ringTipY = undefined;
let ringBaseX = undefined;
let ringBaseY = undefined;

// pinky
let pinkyTipX = undefined;
let pinkyTipY = undefined;
let pinkyBaseX = undefined;
let pinkyBaseY = undefined;


// SETUP
//creating the canvas along with intializing webcam and the bubbles
function setup() {
  createCanvas(640, 480);
  initializeWebcam();
  initializehand();
  initializeBubbles();
}

// Webcam
function initializeWebcam() {
  // accesses the webcam
  camera = createCapture(camera);
  // hiding to show the canvas
  camera.hide();
}

// hand
//creating a new hand pose and changing the state after loading
function initializehand() {
  hand = ml5.hand(camera, {
    flipHorizontal: true
  }, function() {
    state = `simulation`;
    console.log(`program loaded.`)
  });
  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  hand.on(`predict`, function(results) {
    console.log(results);
    predictions = results;
  });
}

// Bubbles
// Initializes each bubble colour by creating a new object to and pushing them in
// in the "bubbles" array
function initializeBubbles() {
  // Red bubbles
  for (let i = 0; i < 2; i++) {
    // defining parameters of the bubbles
    let x = random(width);
    let y = random(height, 550);
    let size = random(30, 70);
    // creating a new object to call the Red.js class
    red = new Red(x, y, size);
    // pushing new object in the "bubbles" array
    bubbles.push(red);
  }

  // pink bubbles
  for (let i = 0; i < 2; i++) {
    let x = random(width);
    let y = random(height, 550);
    let size = random(30, 70);
    pink = new pink(x, y, size);
    bubbles.push(pink);
  }

  // Blue bubbles
  for (let i = 0; i < 2; i++) {
    let x = random(width);
    let y = random(height, 550);
    let size = random(30, 70);
    blue = new Blue(x, y, size);
    bubbles.push(blue);
  }

  // black bubbles
  for (let i = 0; i < 2; i++) {
    let x = random(width);
    let y = random(height, 550);
    let size = random(30, 70);
    black = new black(x, y, size);
    bubbles.push(black);
  }
  // console.log(bubbles);
}

// draw
// changing the state of the program
function draw() {
  if (state === `loadingScreen`) {
    loadingScreen();
  } else if (state === `simulation`) {
    simulation();
  }
}

// loadingScreen
// A state that displays a "loading" text for the user to wait while
// the program's elements are loading
function loadingScreen() {
  push();
  textAlign(CENTER, CENTER);
  fill(0, 170, 0);
  textSize(20);
  text(`Get your fingers ready, pro tip: crack em!`, width / 2, height / 2);
  pop();
}

// simulation
// Once all elements are loaded, the program switches to the interactive simulation
function simulation() {
  background(255); // pink
  pins();
  drawBubbles();
}
