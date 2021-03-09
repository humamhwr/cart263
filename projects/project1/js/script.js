// The dark knight audio player, Hummam Houara
// The user picks between by the joker and the batman. then an audio player shows up that plays a theme song.
// inispired by the latest stocks market costing hedgefunds to lose million of dollars


"use strict";
// const for the number of logos on the screen
const NUM_LOGO_IMAGES = 10;
const NUM_LOGO = 35;
// defining arrays for assets
let logoImages = [];
let logos = [];

let gamestopImage = undefined;
let gamestop = undefined;
let wallpaper = undefined;

let backgroundMusic = undefined;
let aw = undefined;

let batmanImage = {
  x: 200,
  y: 200,
}
let jokerImage = {
  x: 300,
  y: 200,
}
let jokerBatmanImage = undefined




function draw() {
  background(0);


}

// loading the images and sounds, used a loop for the logo images
function preload() {
  for (let i = 0; i < NUM_LOGO_IMAGES; i++) {
    let logoImage = loadImage(`assets/images/logo${i}.png`)
    logoImages.push(logoImage);
  }
  gamestopImage = loadImage(`assets/images/gamestop.png`)
  wallpaper = loadImage(`assets/images/wallpaper.gif`)
  batmanImage = loadImage(`assets/images/batmanImage.jpg`);
  jokerBatmanImage = loadImage(`assets/images/jokerbatman.gif `);
  backgroundMusic = loadSound(`assets/sounds/effect.mp3`);

  aw = loadSound(`assets/sounds/aw.mp3`);
}


// startState and endState variables
let startState = {
  string: `Welcome to the Dark Knight Audio player`,
  string1: `press any where to start`,
  x: undefined,
  y: undefined,
  vx: undefined,
  vy: undefined,
  size: undefined,
};

let finishState = {
  string: `Thanks for helping brinign them down!`,
  x: undefined,
  y: undefined,
  vx: undefined,
  vy: undefined,
  size: undefined,
};

// starting the program with the "start" state
let state = `start`;

/**
canvas and randomizing places of the logos
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < NUM_LOGO; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let logoImage = random(logoImages);
    let logo = new Logo(x, y, logoImage);
    logos.push(logo);
  }

  let x = random(0, width);
  let y = random(0, height);
  gamestop = new GameStop(x, y, gamestopImage);

  // calling the enter and end screen
  setUpStartState();
  setUpEndState();
}
/**
wallpaper and calling all the states
*/
function draw() {
  background(wallpaper);

  if (state === `start`) {
    startStart();
  } else if (state === `game`) {
    gameStart();
  } else if (state === `finish`) {
    gameEnd();
  }
}


function gameStart() {
  background(jokerBatmanImage)

  if (annyang) {
    let commands = {
      'joker': function() {
        state = `start`
      }
    }
    let commands1 = {
      'hello': function() {
        state = `start`
      }
    }


    annyang.addCommands(commands);
    annyang.addCommands(commands1);
    annyang.start();
  }
}


//both start and finish screens set with same values
function setUpStartState() {
  startState.x = width / 2;
  startState.y = 200;
  startState.vx = 5;
  startState.vy = 1;
  startState.size = 45;
}

function setUpEndState() {
  finishState.x = width / 2;
  finishState.y = 200;
  finishState.vx = 5;
  finishState.vy = 1;
  finishState.size = 30;
}

function startStart() {
  background(wallpaper);
  textSize(startState.size);
  fill(255);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  strokeWeight(50);
  text(startState.string, startState.x, startState.y);
  text(startState.string1, width / 2, 300);
}

//set the game finish screen
function gameEnd() {
  push();
  background(wallpaper);
  textSize(finishState.size);
  fill(255);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  strokeWeight(10);
  text(finishState.string, finishState.x, finishState.y);
  pop();
}
// when the user presses the mouse the state changes and calling the gamestop mouse pressed function.
function mousePressed() {
  if (state === `start`) {
    state = `game`;
  } else if (state === `game`) {
    gamestop.mousePressed();
  }
}
