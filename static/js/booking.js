/*
$(document).ready(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    
    // Define a validation function that checks the form fields
    function validateForm() {
      var name = $("#customer_name").val();
      var email = $("#email").val();
      var phone = $("#phone_number").val();
      
      if (name === "" || email === "" || phone === "") {
        alert("Please fill in all required fields.");
        return false;
      }
      
      // You could add more validation checks here, such as checking the format of the email or phone number.
      
      return true;
    }
    
    // Call the validation function before making the AJAX request
    if (!validateForm()) {
      return;
    }
    
    $.ajax({
      type: "POST",
      url: "/booking/",
      data: $(this).serialize(),
      success: function(data) {
        if (data["success"]) {
          // Display confirmation message in a pop-up dialog
          alert("Booking confirmed!");
          // Reset the form fields and reload the page
          $('form')[0].reset();         
        } else {
          alert("Booking failed!");
        }
      },
      error: function(data) {
        alert("An error occurred while processing your request.");
      }
    });
  });
}); */
