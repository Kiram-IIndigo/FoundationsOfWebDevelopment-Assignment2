$(document).ready(function () {
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    $(".error-message").remove();
    $("input").removeClass("error");

    const email = $("#email").val();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      isValid = false;
      $("#email")
        .addClass("error")
        .after('<span class="error-message">Invalid email format.</span>');
    }

    const password = $("#password").val();

    if (password.length < 6) {
      isValid = false;
      $("#password")
        .addClass("error")
        .after(
          '<span class="error-message">Password must be at least 6 characters.</span>'
        );
    }

    if (isValid) {
      showToast("Form submitted successfully!");
    }
  });

  function showToast(message) {
    const toast = $("#toast");
    toast.text(message);
    toast.addClass("show");

    setTimeout(function () {
      toast.removeClass("show");
    }, 3000);
  }
});
