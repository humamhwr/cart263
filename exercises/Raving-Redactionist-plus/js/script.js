"use strict";

let anthem;

function preload() {
  anthem = loadSound(`assets/sounds/anthem.mp3`)
}
$(`.top-secret`).on(`click`, redact);
setInterval(revelation, 500);
anthem.play();

function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

function revelation() {
  $(`.redacted`).each(attemptReveal)
}

function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}
