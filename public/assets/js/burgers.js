// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devourbtn").on("click", function(event) {
    var id = $(this).data("id");
 
    // Send the PUT request.
    $.ajax("/burgers/" + id, {
      type: "PUT"
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim()
    };

    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
