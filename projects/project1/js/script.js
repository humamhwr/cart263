"use strict";

//defining the audio and video files and the sliders
let batmanClip;
let jokerClip;

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


function draw() {
  background(0);
}

// loading the images and sounds
function preload() {
  wallpaper = loadImage(`assets/images/wallpaper.gif`)
  batmanImage = loadImage(`assets/images/batmanImage.jpg`);
  jokerBatmanImage = loadImage(`assets/images/jokerbatman.gif `);


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

function setup() {
  createCanvas(windowWidth, windowHeight);

  // calling the enter and end screen
  setUpWelcomeState();
  setUpEndState();

  //loading the video, playing it on loop and muted
  batmanClip = createVideo(['assets/videos/batman.mov']);
  batmanClip.hide();
  batmanClip.elt.muted = true;
  batmanClip.loop();

  jokerClip = createVideo(['assets/videos/joker.mov']);
  jokerClip.hide();
  jokerClip.elt.muted = true;
  jokerClip.loop();



  //loading the audio files
  jokerMusic = createAudio('assets/sounds/jokersoundtrack.mp3');
  jokerSfx = createAudio('assets/sounds/batmanFx.mp3');
  jokerScript = createAudio('assets/sounds/jokerScript.mp3');

  batmanMusic = createAudio('assets/sounds/batmanSoundtrack.mp3');
  batmanSfx = createAudio('assets/sounds/batmanFx.mp3');
  batmanScript = createAudio('assets/sounds/batmanScript.mp3');


  // creating the sliders, first one is for the music, second for sound effects and the third is for the joker talking
  musicSlider = createSlider(0, 1);
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

//the state where the user choses between batman or joker
function choosingSides() {
  background(jokerBatmanImage)
  push();
  textSize(startState.size);
  fill(255);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  strokeWeight(50);
  text(`Woul you like to experince Batman or the joker's side?`, startState.x, startState.y);
  pop();
  textSize(20);
  text(`say your answer outloud`, width / 2, 300);

  //calling annyang library and chaning states according to input
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
  image(jokerClip, 20, 20); // draw the video frame to canvas
  filter(GRAY);
  image(jokerClip, 150, 150); // draw a second copy to canvas

  // the text of the slides
  fill(255, 255, 255);
  textSize(15);
  noStroke();
  text('music', 175, 35);
  text('sfx', 170, 65);
  text('script', 175, 95);
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
  image(jokerClip, 20, 20); // draw the video frame to canvas
  filter(GRAY);
  image(batmanClip, 150, 150); // draw a second copy to canvas

  // the text of the slides
  fill(255, 255, 255);
  textSize(15);
  noStroke();
  text('music', 175, 35);
  text('sfx', 170, 65);
  text('script', 175, 95);
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
