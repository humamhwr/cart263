/*********************************************************
player Profile Generator
Generates randomized player profile
**********************************************************/
"use strict";

let playerProfile = {
  playerName: `**HIDDEN**`,
  jerseyName: `**HIDDEN**`,
  secondSport: `**HIDDEN**`,
  keyword: `**HIDDEN**`,
};

let moodData = undefined;
let sportData = undefined;
let keywordData = undefined;
let wallpaper = undefined;
let tarotData = undefined;

function preload() {
  wallpaper = loadImage ('assets/images/tenor.gif');

  moodData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/moods.json`
  );
  sportData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/sports/sports.json`
  );
  keywordData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/dulux.json`
  );
  tarotData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`
  );
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem(`player-profile-data`));
  if (data !== null) {
    let keyword = prompt(`Player! What is your keyword?!`);
    if (keyword === data.keyword) {
      playerProfile.playerName = data.playerName;
      playerProfile.jerseyName = data.jerseyName;
      playerProfile.secondSport = data.secondSport;
      playerProfile.keyword = data.keyword;
    }
  } else {
    generateplayerProfile();
  }
}

function generateplayerProfile() {
  playerProfile.playerName = prompt(`Agent! What is your playerName?!`);
  let mood = random(moodData.moods);
  playerProfile.jerseyName = ` ${mood}`;
  playerProfile.secondSport = random(sportData.sports);
  let colors = random(tarotData.tarot_interpretations);
  playerProfile.keyword = random(colors.keywords);

  localStorage.setItem(`player-profile-data`, JSON.stringify(playerProfile));
}

function draw() {
  background(wallpaper);

  let profile = `** PLAYER PROFILE! DO NOT SPREAD FOR CHEATERS! **

  playerName: ${playerProfile.playerName}
  jerseyName: ${playerProfile.jerseyName}
  secondSport: ${playerProfile.secondSport}
  keyword: ${playerProfile.keyword}`;

  push();
  //textFont();
  textSize(24);
  textAlign(LEFT, TOP);
  fill(255);
  text(profile, 100, 100);
  pop();
}
