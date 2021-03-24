let mainHeading = document.getElementById(`main-heading`);
mainHeading.addEventListener(`click`, function(event) {
  mainHeading.innerText = `${event.clientX},${event.clientY}`;
});
