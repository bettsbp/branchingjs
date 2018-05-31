$(document).ready(function() {
  $("#radio").submit(function(event) {
    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "Frogs") {
      $("#frogs").show();
      $("#snakes").hide();
      $("#insects").hide();
    } else if (animal === "Snakes") {
      $("#snakes").show();
      $("#frogs").hide();
      $("#insects").hide();
    } else if (animal === "Insects") {
      $("#insects").show();
      $("#frogs").hide();
      $("#snakes").hide();
    };
    event.preventDefault();
  })

});
