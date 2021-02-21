"use strict";

let userData = {
  name: `stranger` // A default value if we don't know the user's name
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Try to load the user data
  let data = JSON.parse(localStorage.getItem(`example-user-data`));
  // Check if there's data there...
  if (data) {
    // If there is, then use the name property in the data
    userData.name = data.name;
  }
  else {
    // If there isn't, ask the user their name and store it in the user data
    // prompt() brings up a simple dialog that the user can enter text in
    // The first argument is the prompt for the user, the second argument is
    // a default value to provide
    userData.name = prompt(`What's ya name?`, `Tony`);
    // Save the user data
    localStorage.setItem(`example-user-data`, JSON.stringify(userData));
  }
}

function draw() {
  background(255);

  // Greet the user according to their name
  push();
  textSize(32);
  textAlign(CENTER);
  text(`Hi there, ${userData.name}.`, width / 2, height / 2);
}
