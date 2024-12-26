$(document).ready(function () {
  $(".gallery-thumbnails img").click(function () {
    const fullImage = $(this).data("full");
    $("#modal-image").attr("src", fullImage);
    $("#gallery-modal").fadeIn();
  });

  $(".close").click(function () {
    $("#gallery-modal").fadeOut();
  });
});
