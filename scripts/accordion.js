$(document).ready(function () {
  $(".accordion-btn").click(function () {
    $(this).next(".accordion-content").slideToggle();
  });
});
