// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devourbtn").on("click", function(event) {
    var id = $(this).val();
 
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
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

    var newburger = {
      name: $("#burger").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
