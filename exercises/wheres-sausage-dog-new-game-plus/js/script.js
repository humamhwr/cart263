"use strict";

const NUM_LOGO_IMAGES = 10;
const NUM_LOGO = 35;

let logoImages = [];
let logos = [];

let gamestopImage = undefined;
let gamestop = undefined;
let wallpaper = undefined;

function preload() {
  for (let i = 0; i < NUM_LOGO_IMAGES; i++) {
    let logoImage = loadImage(`assets/images/logo${i}.png`)
    logoImages.push(logoImage);
  }
  gamestopImage = loadImage(`assets/images/gamestop.png`)
  wallpaper = loadImage(`assets/images/wallstreet.jpg`)
}


/**
Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);

for (let i = 0; i < NUM_LOGO; i++) {
  let x = random(0,width);
  let y = random(0, height);
  let logoImage = random(logoImages);
  let logo = new Logo(x, y, logoImage);
  logos.push(logo);
  }

  let x = random(0, width);
  let y = random(0, height);
  gamestop = new GameStop(x, y, gamestopImage);
}


/**
Description of draw()
*/
function draw() {
  background(wallpaper);

  for (let i = 0; i < logos.length; i++) {
    logos[i].update();
  }

  gamestop.update();
}

function mousePressed () {
  gamestop.mousePressed();
}
