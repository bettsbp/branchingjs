$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 21) {
    $('#drinks').show();
    $('.well').show();
  } else if (age === 21) {
    alert("Now don't go crazy!");
    $('#drinks').show();
    $('.well').show();
  } else {
    $('#under-21').show();
    $('.well').show();
  };

  if (age >= 18) {
    $('#voting').show();
    $('.well').show();
  } else {
    $('#under-18').show();
    $('.well').show();
  };

});
