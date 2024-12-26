$(document).ready(function () {
  $.ajax({
    url: "data/content.json",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const contentContainer = $("#dynamic-content");
      data.posts.forEach((post) => {
        contentContainer.append(`
          <div class="post" data-id="${post.id}">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </div>
        `);
      });
    },
    error: function () {
      toastr.error("Failed to load content.");
    },
  });

  $(document).on("click", ".delete-btn", function () {
    const post = $(this).closest(".post");
    post.remove();
    toastr.success("Post deleted successfully!");
  });

  $(document).on("click", ".edit-btn", function () {
    const post = $(this).closest(".post");
    const newTitle = prompt("Edit title:", post.find("h3").text());
    if (newTitle) {
      post.find("h3").text(newTitle);
      toastr.success("Post edited successfully!");
    }
  });
});
