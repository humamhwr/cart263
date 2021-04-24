"use strict";

/**
BUBBLE POPPER!
Hummam Houara

The user will be able to pop diffrent colored circles using their finger.
Each finger tip will be a color that will pop the circle that matches its color.
*/
let state = `loadingScreen`;
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
  hand = ml5.handpose(camera, {
    flipHorizontal: true
  }, function() {
    state = `simulation`;
    console.log(`program loaded.`)
  });
  // This sets up an event that fills the variable "predictions"
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
    red = new Red(x, y, size);
    bubbles.push(red);
  }

  // pink bubbles
  for (let i = 0; i < 2; i++) {
    let x = random(width);
    let y = random(height, 550);
    let size = random(30, 70);
    // calling the js class
    pink = new Pink(x, y, size);
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
    black = new Black(x, y, size);
    bubbles.push(black);
  }

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
// instead of waiting for the screen to load with no content,
// i made a loading screen so the user isn't confused
function loadingScreen() {
  push();
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(20);
  text(`Get your fingers ready, pro tip: crack em!`, width / 2, height / 2);
  pop();
}

// simulation
// Once all elements are loaded, the program switches to the interactive simulation
function simulation() {
  background(128);
  pins();
  drawBubbles();
}

// Pins
//checking the pin and touching the bubble and resting the canvas
function pins() {
  // checking the length
  if (predictions.length > 0) {

    pinCoordinates();

    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].popped();

    }
    //drawing the pins
    drawPins();
  }
}

// pinCoordinates
function pinCoordinates() {
  //INDEX FINGER
  // index finger tip's x and y value
  indexTipX = predictions[0].annotations.indexFinger[3][0];
  indexTipY = predictions[0].annotations.indexFinger[3][1];

  // index finger base's x and y value
  indexBaseX = predictions[0].annotations.indexFinger[0][0];
  indexBaseY = predictions[0].annotations.indexFinger[0][1];

  // MIDDLE FINGER
  // middle finger tip's x and y value
  middleTipX = predictions[0].annotations.middleFinger[3][0];
  middleTipY = predictions[0].annotations.middleFinger[3][1];

  // middle finger base's x and y value
  middleBaseX = predictions[0].annotations.middleFinger[0][0];
  middleBaseY = predictions[0].annotations.middleFinger[0][1];

  // RING FINGER
  // ring finger tip's x and y value
  ringTipX = predictions[0].annotations.ringFinger[3][0];
  ringTipY = predictions[0].annotations.ringFinger[3][1];

  // ring finger base's x and y value
  ringBaseX = predictions[0].annotations.ringFinger[0][0];
  ringBaseY = predictions[0].annotations.ringFinger[0][1];

  // PINKY
  // pinky finger tip's x and y value
  pinkyTipX = predictions[0].annotations.pinky[3][0];
  pinkyTipY = predictions[0].annotations.pinky[3][1];

  // pinky finger base's x and y value
  pinkyBaseX = predictions[0].annotations.pinky[0][0];
  pinkyBaseY = predictions[0].annotations.pinky[0][1];
}

// drawPins
function drawPins() {
  // INDEX FINGER: RED PIN
  // body
  push();
  stroke(161, 161, 161);
  line(indexTipX, indexTipY, indexBaseX, indexBaseY);
  pop();

  // head
  push();
  noStroke();
  fill(255, 0, 0);
  ellipse(indexBaseX, indexBaseY, PIN_SIZE);
  pop();

  // MIDDLE FINGER: pink PIN
  // body
  push();
  stroke(161, 161, 161);
  line(middleTipX, middleTipY, middleBaseX, middleBaseY);
  pop();

  // head
  push();
  noStroke();
  fill(255,192,203);
  ellipse(middleBaseX, middleBaseY, PIN_SIZE);
  pop();

  // RING FINGER: BLUE PIN
  // body
  push();
  stroke(161, 161, 161);
  line(ringTipX, ringTipY, ringBaseX, ringBaseY);
  pop();

  // head
  push();
  noStroke();
  fill(0, 0, 255);
  ellipse(ringBaseX, ringBaseY, PIN_SIZE);
  pop();

  // PINKY FINGER: black PIN
  // body
  push();
  stroke(0);
  line(pinkyTipX, pinkyTipY, pinkyBaseX, pinkyBaseY);
  pop();

  // head
  push();
  noStroke();
  fill(255, 255, 0);
  ellipse(pinkyBaseX, pinkyBaseY, PIN_SIZE);
  pop();
}

// drawBubbles
// Calls the Bubble superclass object's methods and makes each element in the bubbles array
// go through them
function drawBubbles() {
  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];
    bubble.motion();
    bubble.display();
  }
}
