$(`.header`).each(function() {
  // Get the reversed text of the current heading's text
  let reverseText = $(this).text().split(``).reverse().join(``);
  // Set the new reverse text
  $(this).text(reverseText);
});
