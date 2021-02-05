let voices; // To remember the array of voices
let currentVoiceName = ``;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Get the array of voices
  voices = responsiveVoice.getVoices();
}

function draw() {
  background(255);

  push();
  textSize(32);
  textAlign(CENTER,CENTER);
  text(currentVoiceName,width/2,height/2);
  pop();
}

function mousePressed() {
  // Choose a random voice object from the list
  let voice = random(voices);
  // We need the "name" property of our
  // randomly chosen voice object
  let currentVoiceName = voice.name;

  // Say the text using the randomly chosen voice and with
  // random rate and pitch.
  responsiveVoice.speak("Now I talk like this.", currentVoiceName);
}
