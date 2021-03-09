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
  }
  else if (state === `batmanState`) {
   batmanState();
 }
 else if (state === `jokerState`) {
  jokerStart();
}
  else if (state === `finish`) {
    gameEnd();
  }
}


function gameStart() {
  background(jokerBatmanImage)
  textSize(startState.size);
  fill(255);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  strokeWeight(50);
  text(startState.string, startState.x, startState.y);
  text(startState.string1, width / 2, 300);
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
//set the game finish screen
function jokerStart() {
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
function batmanState() {
  push();
  background(wallpaper);
  function init() {
	if (!createjs.Sound.initializeDefaultPlugins()) {
		document.getElementById("error").style.display = "block";
		document.getElementById("content").style.display = "none";
		return;
	}

	$("#position").css("display", "none");
	$("#playPauseBtn").attr("disabled", true);
	$("#stopBtn").attr("disabled", true);
	$("#track").css("display", "none");

	examples.showDistractor("content");
	var assetsPath = "../../_assets/audio/";
	var src = assetsPath + "M-GameBG.ogg";

	createjs.Sound.alternateExtensions = ["mp3"];	// add other extensions to try loading if the src file extension is not supported
	createjs.Sound.addEventListener("fileload", createjs.proxy(handleLoadComplete, this)); // add an event listener for when load is completed
	createjs.Sound.registerSound(src, "music");
}

var instance;
var positionInterval;
var seeking = false;

function handleLoadComplete(event) {
	examples.hideDistractor();

	$("#track").css("display", "block");
	$("#loading").css("display", "none");
	$("#progress").css("display", "none");
	$("#position").css("display", "block");

	instance = createjs.Sound.play("music");
	instance.addEventListener("complete", function () {
		clearInterval(positionInterval);
		$("#playBtn").removeClass("pauseBtn").addClass("playBtn")
		$("#stopBtn").attr("disabled", true);
	});
	$("#playPauseBtn").attr("disabled", false);
	$("#playBtn").removeClass("playBtn").addClass("pauseBtn");
	$("#playBtn").click(function (event) {
		if (instance.playState == createjs.Sound.PLAY_FINISHED) {
			instance.play();
			$("#playBtn").removeClass("playBtn").addClass("pauseBtn");
			trackTime();
			return;
		} else {
			instance.paused ? instance.paused = false : instance.paused = true;
		}

		if (instance.paused) {
			$("#playBtn").removeClass("pauseBtn").addClass("playBtn");
		} else {
			$("#playBtn").removeClass("playBtn").addClass("pauseBtn");
		}
	});
	$("#stopBtn").click(function (event) {
		instance.stop();
		//console.log("stop");
		clearInterval(positionInterval);
		$("#playBtn").removeClass("pauseBtn").addClass("playBtn");
		$("#thumb").css("left", 0);
	});
	$("#stopBtn").attr("disabled", false);

	trackTime();

	// http://forums.mozillazine.org/viewtopic.php?f=25&t=2329667
	$("#thumb").mousedown(function (event) {
		//console.log("mousedown");
		var div = $();
		$("#player").append($("<div id='blocker'></div>"));
		seeking = true;
		$("#player").mousemove(function (event) {
			// event.offsetX is not supported by FF, hence the following from http://bugs.jquery.com/ticket/8523
			if (typeof event.offsetX === "undefined") { // || typeof event.offsetY === "undefined") {
				var targetOffset = $(event.target).offset();
				event.offsetX = event.pageX - targetOffset.left;
				//event.offsetY = event.pageY - targetOffset.top;
			}
			$("#thumb").css("left", Math.max(0, Math.min($("#track").width() - $("#thumb").width(), event.offsetX - $("#track").position().left)));
		})
		$("#player").mouseup(function (event) {
			//console.log("mouseup");
			seeking = false;
			$(this).unbind("mouseup mousemove");
			var pos = $("#thumb").position().left / $("#track").width();
			instance.position = (pos * instance.duration);
			$("#blocker").remove();
		});
	});
}

var dragOffset;
function trackTime() {
	positionInterval = setInterval(function (event) {
		if (seeking) {
			return;
		}
		$("#thumb").css("left", instance.position / instance.duration * $("#track").width()-10);
	}, 30);
}
}
// when the user presses the mouse the state changes and calling the gamestop mouse pressed function.
function mousePressed() {
  if (state === `start`) {
    state = `game`;
  } else if (state === `game`) {
    gamestop.mousePressed();
  }
}
