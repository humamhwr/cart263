"use strict";

/*****************

Car guessing game,
Hummam Houara

******************/

// first state
let state = `title`;

// gamestate
let gameState = ``;

// array of cars
const cars = [
  "jeep",
  "honda",
  "mazda",
  "ferrari",
  "lamborghini",
  "jaguar",
  "ford",
  "mercedes"
];

let welcomingPhrase = `Ready to guess some cars?`;

let currentCar = ``;

let currentAnswer = ``;

let brandsImage = undefined;
let carsImage = undefined;


function preload() {
  brandsImage = loadImage('assets/images/logos.jpeg');
  carsImage = loadImage ('assets/images/cars.jpeg')
}

// setup()
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  // annyang
  if (annyang) {
    // declaring a commands variable
    let commands = {
      // calling the car function
      'Are you driving a *car': guessCar
    };
    annyang.debug();

    annyang.addCommands(commands);

    //starting annyang
    annyang.start();

    // text styling
    textSize(50);
    textFont(`serif`);
    textAlign(CENTER, CENTER);
  }
}

// draw()
// order of the states
function draw() {
  if (state === `title`) {
    title();
  } else if (state === `play`) {
    play();
  }
}

// asking the user if they'd like to play with them
// user must reply yes or no. if the user say yes, it switches states.
function title() {
  background(255);

  push();
  textSize(30);
  fill(0);
  text(`A Game of guessing cars`, width / 2 - 10, height / 7);
  push();
  textSize(10);
  text(`Click on the picture`, width / 2 - 10,  700);
  pop();

  image(brandsImage, width / 2, height / 2, 700, 550);

  // if the user says yes, the state switches to the game
  // if the user says no, the user is prompted to basically say yes
  if (annyang) {
    let commands = {
      'Yes': function() {
        state = `play`;
      },
      'No': function() {
        alert(`Say yes please i wrote a lot of codes for this`);
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}

// where the game begins
function play() {
  background(255);

  // instructions
  push();
  fill(0);
  textSize(15);
  textAlign(LEFT);
  text(`1. Guess the reverse spelling of a car.
    \n2. Click the cars image for a new word to guess.
    \n3. start your answer with "are you driving.."`, 10, 50);
  pop();
  image(carsImage, width / 2, height / 2, 500, 300);
}

// calling the right and wrong functions
function answer() {
  // // what happens when the user is either right or wrong
  if (currentAnswer === currentCar) {
    right();
  } else {
    wrong();
  }
}

// right function
function right() {
  push();
  gameState = `right`;
  responsiveVoice.speak(`Vroom! Correct`, "UK English Male", {
    pitch: 1.5,
    rate: 0.7
  });
  pop();
}

// wrong function
function wrong() {
  push();
  gameState = `wrong`;
  responsiveVoice.speak(`Nope, try agian`, "UK English Male", {
    pitch: 1.5,
    rate: 0.7
  });
  pop();
}

// User clicks the screen, responsiveVoice says a car backwards
function mousePressed() {
  // only plays when the state is set to 'title'
  if (state === `title`) {
    responsiveVoice.speak(welcomingPhrase, "UK English Male", {
      pitch: 1,
      rate: 1,
    });
    gameState = `none`;
  }

  if (state === `play`) {

    currentCar = random(cars);

    let reverseCar = reverseString(currentCar);

    // responsiveVoice repeats the element in reverse
    responsiveVoice.speak(reverseCar, "UK English Male", {
      pitch: 1.5,
      rate: 0.7,
    });
    gameState = `inGame`;
  }
}


// when annyang calls this function, it's going to send what the user said to this function in the parameter
function guessCar(car) {
  currentAnswer = car.toLowerCase();
  answer();
}


//from the notes
function reverseString(string) {

  let characters = string.split('');

  let reverseCharacters = characters.reverse();

  let result = reverseCharacters.join('');

  // Return the result
  return result;
}
