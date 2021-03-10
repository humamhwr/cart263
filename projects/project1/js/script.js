// The dark knight audio player, Hummam Houara
// The user picks between by the joker and the batman. then an audio player shows up that plays a theme song.
// inispired by the latest stocks market costing hedgefunds to lose million of dollars
"use strict";

//defining the audio and video files and the sliders
let fingers;
let pie;

let jokerMusic, jokerSfx, jokerScript;
let batmanMusic, batmanSfx, batmanScript;

let musicSlider, sfxSlider, scriptSlider;
let bmusicSlider, bsfxSlider, bscriptSlider;

// defining arrays for assets
let wallpaper;
let backgroundMusic;
let aw;
let batmanImage = {
  x: 200,
  y: 200,
}
let jokerImage = {
  x: 300,
  y: 200,
}
let jokerBatmanImage;
let batmanScene;

function draw() {
  background(0);
}

// loading the images and sounds, used a loop for the logo images
function preload() {
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



  // calling the enter and end screen
  setUpWelcomeState();
  setUpEndState();

  // specify multiple formats for different browsers
  //loading the video, playing it on loop and muted
  fingers = createVideo(['assets/videos/fingers.mov', 'assets/fingers.webm']);
  fingers.hide();
  fingers.elt.muted = true;
  fingers.loop();

  pie = createVideo(['assets/videos/pie.mov', 'assets/fingers.webm']);
  pie.hide();
  pie.elt.muted = true;
  pie.loop();



  //loading the audio files
  jokerMusic = createAudio('assets/sounds/FRVRFRIDAY.mp3');
  jokerSfx = createAudio('assets/sounds/pride.mp3');
  jokerScript = createAudio('assets/sounds/carti.mp3');

  batmanMusic = createAudio('assets/sounds/FRVRFRIDAY.mp3');
  batmanSfx = createAudio('assets/sounds/pride.mp3');
  batmanScript = createAudio('assets/sounds/carti.mp3');


  // creating the sliders, first one is for the music, second for sound effects and the third is for the joker talking
  musicSlider = createSlider(0, 1, 1);
  musicSlider.position(20, 20);
  sfxSlider = createSlider(0, 1, 1);
  sfxSlider.position(20, 50);
  scriptSlider = createSlider(0, 1, 0);
  scriptSlider.position(20, 80);
}
/**
wallpaper and calling all the states
*/
function draw() {
  background(wallpaper);

  if (state === `start`) {
    startStart();
  } else if (state === `game`) {
    choosingSides();
  } else if (state === `batmanState`) {
    batmanState();
  } else if (state === `jokerState`) {
    jokerState();
  } else if (state === `finish`) {
    gameEnd();
  }
}

function choosingSides() {
  background(jokerBatmanImage)
  textSize(startState.size);
  fill(255);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  strokeWeight(50);
  text('Are you on Batman or the jokers side?', startState.x, startState.y);
  text(`say your answer outloud`, width / 2, 300);
  if (annyang) {
    let commands = {
      'joker': function() {
        state = `jokerState`
      }
    }
    let commands1 = {
      'batman': function() {
        state = `batmanState`
      }
    }
    annyang.addCommands(commands);
    annyang.addCommands(commands1);
    annyang.start();
  }
}


//both start and finish screens set with same values
function setUpWelcomeState() {
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

//set the game finish screen
function jokerState() {

  //calling the audio functions
  jokerAudio1();
  jokerAudio2();
  jokerAudio3();


  //setting up the background along with double effect
  background(150);
  image(fingers, 10, 10); // draw the video frame to canvas
  filter(GRAY);
  image(fingers, 150, 150); // draw a second copy to canvas

  // the text of the slides
  fill(255, 255, 255);
  textSize(15);
  noStroke();
  text('music', 155, 35);
  text('sfx', 155, 65);
  text('script', 155, 95);
}


//val is the value of the volume, when sliding, the volume changes
function jokerAudio1() {
  let val1 = musicSlider.value();
  jokerMusic.volume(val1);
  jokerMusic.play();
}

function jokerAudio2() {
  let val2 = sfxSlider.value();
  jokerSfx.volume(val2);
  jokerSfx.play();
}

function jokerAudio3() {
  let val3 = scriptSlider.value();
  jokerScript.volume(val3);
  jokerScript.play();
}

//set the game finish screen
function batmanState() {

  //calling the audio functions
  batmanAudio1();
  batmanAudio2();
  batmanAudio3();


  //setting up the background along with double effect
  background(150);
  image(pie, 10, 10); // draw the video frame to canvas
  filter(GRAY);
  image(pie, 150, 150); // draw a second copy to canvas

  // the text of the slides
  fill(255, 255, 255);
  textSize(15);
  noStroke();
  text('music', 155, 35);
  text('sfx', 155, 65);
  text('script', 155, 95);
}


//val is the value of the volume, when sliding, the volume changes
function batmanAudio1() {
  let val1 = musicSlider.value();
  batmanMusic.volume(val1);
  batmanMusic.play();
}

function batmanAudio2() {
  let val2 = sfxSlider.value();
  batmanSfx.volume(val2);
  batmanSfx.play();
}

function batmanAudio3() {
  let val3 = scriptSlider.value();
  batmanScript.volume(val3);
  batmanScript.play();
}



// when the user presses the mouse the state changes and calling the gamestop mouse pressed function.
function mousePressed() {
  if (state === `start`) {
    state = `game`;
  // } else if (state === `game`) {
  //   gamestop.mousePressed();
  // }
}
}
