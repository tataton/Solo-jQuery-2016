/*
*/

var numCounters = {
  red: 0, yellow: 0, green: 0, blue: 0
};
/* Decided on a global set of object key:value pairs to
store counters, rather than attaching data attributes to
the reporting <p> tags and having to get those attributes
back off. */

$(document).on('click', 'button', function() {
  // Button handler.
  var buttonColor = $(this).data('color');
  // Add a div.
  var newDivText = '<div class="color-cube ' + buttonColor + '">';
  $('.container').append(newDivText);
  // Increment counter and update label text.
  updateLabel(buttonColor, true);
});

$(document).on('click', '.color-cube', function() {
  /* Cube-press handler. I need to get the color class of
  the item clicked, in spite of the fact that the item has two
  classes. I've decided to do this in two steps: (i) remove
  the color-cube class, which has the added benefit of making
  the cube disappear; and then (ii) get the one remaining
  class. */
  $(this).removeClass('color-cube');
  var colorRemoved = $(this).attr('class');
  updateLabel(colorRemoved, false);
});

var updateLabel = function(color, direction) {
  // Variable direction is boolean; true means up.
  if (direction) {
    numCounters[color]++;
  } else {
    numCounters[color]--;
  }
  var updatedLabel = 'Total ' + color + ': ' + numCounters[color];
  $('#' + color).text(updatedLabel);
};
