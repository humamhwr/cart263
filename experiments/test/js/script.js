//defining the audio and video files and the sliders
let fingers;
let jokerMusic, jokerSfx, jokerScript;
let musicSlider, sfxSlider, scriptSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // specify multiple formats for different browsers
  //loading the video, playing it on loop and muted
  fingers = createVideo(['assets/fingers.mov', 'assets/fingers.webm']);
  fingers.hide();
  fingers.elt.muted = true;
  fingers.loop();

//loading the audio files
  jokerMusic = createAudio('assets/sounds/FRVRFRIDAY.mp3');
  jokerSfx =   createAudio('assets/sounds/pride.mp3');
  jokerScript =   createAudio('assets/sounds/carti.mp3');

  // creating the sliders, first one is for the music, second for sound effects and the third is for the joker talking
  musicSlider = createSlider(0, 1, 1);
  musicSlider.position(20, 20);
  sfxSlider = createSlider(0, 1, 1);
  sfxSlider.position(20, 50);
  scriptSlider = createSlider(0, 1, 0);
  scriptSlider.position(20, 80);
}

function draw() {

//calling the audio functions
jokerAudio1();
jokerAudio2();
jokerAudio3();

//val is the value of the volume, when sliding, the volume changes
function jokerAudio1(){
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

//setting up the background along with double effect
background(150);
  image(fingers, 10, 10); // draw the video frame to canvas
  filter(GRAY);
  image(fingers, 150, 150); // draw a second copy to canvas

// the text of the slides
  fill(255,255,255);
  textSize(15);
  noStroke();
  text('music', 155, 35);
  text('sfx', 155, 65);
  text('script', 155, 95);
}
