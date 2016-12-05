/*
*/

var numCounters = {
  red: 0, yellow: 0, green: 0, blue: 0
}
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
  // Increment counter.
  numCounters[buttonColor]++;
  //Update label text.
  var updatedLabel = 'Total ' + buttonColor + ': ' + numCounters[buttonColor];
  $('#' + buttonColor).text(updatedLabel);
});
