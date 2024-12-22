$(document).ready(function () {
  $("#dark-mode-btn").click(function () {
    $("body").addClass("dark-mode");
  });

  $("#light-mode-btn").click(function () {
    $("body").removeClass("dark-mode");
  });
});
