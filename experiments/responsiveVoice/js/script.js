"use strict";



/**
Description of setup
*/
function setup() {
createCanvas(500,500)
}


/**
Description of draw()
*/
function draw() {
background(0);
}

function mousePressed() {
  responsiveVoice.speak("i like french fries" , "UK English Male" , {
    pitch: 2,
    rate: 0.8,
    volume:1
  })
}
