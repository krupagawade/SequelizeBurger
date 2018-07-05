// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function(){
    console.log("doc loaded");
    //AJAX call to insert a new record
    $(".create-form").on("submit", function(event) {
        //alert("Clicked submit");
        console.log("Clicked submit");
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#burger_name").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burger", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      }); //end of post method
      
    $(".devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = {
            devoured: true
        }

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevoured
          }).then(
            function() {
              console.log("changed devoured", newDevoured);
              // Reload the page to get the updated list
              location.reload();
            }); //end of then
    });   //end of put menthod
}); //end of document ready
