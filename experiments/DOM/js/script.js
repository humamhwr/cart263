let paragraph = document.getElementById(`paragraph`);

paragraph.addEventListener(`contextmenu`, function(event) {
  event.target.style[`color`] = `#ff0000`;
});
