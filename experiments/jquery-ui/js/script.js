"use strict";

// Start our with normally dragging behaviour
$(`#prisoner`).draggable({
  containment: `#prison`
});

$(`#prisoner`).on(`dragstart`, function(event, ui) {
  $(this).css(`text-decoration`, `underline`);
});

$(`#prisoner`).on(`dragstop`, function(event, ui) {
  $(this).css(`text-decoration`, `none`);
});

$(`#escape-tunnel`).droppable({
  drop: function(event, ui) {
    ui.draggable.remove();
  }
});
