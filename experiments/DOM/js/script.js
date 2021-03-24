let paragraph = document.getElementById(`paragraph`);
let paragraphOpacity = 1; // Default opacity
paragraph.style[`opacity`] = paragraphOpacity; // Set the default opacity

fadeOut();

function fadeOut() {
  // Reduce the opacity
  paragraphOpacity -= 0.01;
  // Set the opacity on the paragraph
  paragraph.style[`opacity`] = paragraphOpacity;
  // Check if the opacity is still above 0
  if (paragraphOpacity > 0) {
    // If it is, call fadeOut() again on the next frame
    // So we get an animation over time!
    requestAnimationFrame(fadeOut);
  }
}
