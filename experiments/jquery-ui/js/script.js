"use strict";

// Prisoner shakes with rage at the start
$(`#prisoner`).effect({
  effect: `shake`,
  duration: 1000,
  times: 10,
  distance: 5,
  complete: makePrisonerDraggable
});

/**
Makes the prisoner draggable
*/
function makePrisonerDraggable() {
  // Prisoner is draggable
  $(`#prisoner`).draggable({
    // Prisoner cannot be dragged out of the prison
    containment: `#prison`,
    // Prisoner gets an underline and turns blue when dragging starts
    start: function(event, ui) {
      $(this).addClass(`prisoner-dragging`, 1000);
    },
    // Prisoner loses underline and turns black when dragging stops
    stop: function(event, ui) {
      // NEW! Animated class removal
      $(this).removeClass(`prisoner-dragging`, 1000);
    }
  });
}

$(`#escape-tunnel`).droppable({
  // Elements dropped on escape tunnel are removed from the page
  drop: function(event, ui) {
    // Remove the dragged element
    ui.draggable.remove();
    // And let's hide the tunnel too for a sneaky effect!
    $(this).hide({
      effect: `blind`,
      duration: 500
    });
  }
});
