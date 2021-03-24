let mainHeading = document.getElementById(`main-heading`);
mainHeading.addEventListener(`click`, setRedTextColor);
let subHeading = document.getElementById(`sub-heading`);
subHeading.addEventListener(`click`, setRedTextColor);
let paragraph = document.getElementById(`paragraph`);
paragraph.addEventListener(`click`, setRedTextColor);

function setRedTextColor(event) {
  // Use event.target to change the style of the specific clicked element
  event.target.style[`color`] = `#ff0000`;
}
