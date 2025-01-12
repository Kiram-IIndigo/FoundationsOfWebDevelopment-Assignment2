$(document).ready(function () {
  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({ pageNotFound: "error_404" }); // initialize

  const navLinks = {
    page1: [document.getElementById("navpage1")],
    page2: [document.getElementById("navpage2")],
    page3: [document.getElementById("navpage3")],
    page4: [document.getElementById("navpage4")],
  };

  function updateActiveLink(sectionId) {
    Object.keys(navLinks).forEach((key) => {
      navLinks[key].forEach((link) => {
        if (key === sectionId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  }

  function checkLoginStatus() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      // User is logged in, show their data
      document.getElementById("profile").style.display = "block";
      document.getElementById("redirect-message").style.display = "none";

      document.getElementById("name").textContent = loggedInUser.name;
      document.getElementById("email").textContent = loggedInUser.email;
      document.getElementById("profile-image").src = loggedInUser.image;
    } else {
      // User is not logged in, redirect to #page1
      window.location.hash = "#page1";
      window.alert("You need to log in to see this view");
    }
  }

  // define routes
  app.route({
    view: "page1",
    onCreate: function () {
      $("#view_1").append($.now() + ": Written on create<br/>");
    },
    onReady: function () {
      updateActiveLink("page1");
    },
  });
  app.route({
    view: "page2",
    onCreate: function () {
      $("#view_2").append($.now() + ": Written on create<br/>");
    },
    onReady: function () {
      updateActiveLink("page2");
    },
  });
  app.route({
    view: "page3",
    onCreate: function () {
      $("#view_3").append($.now() + ": Written on create<br/>");
    },
    onReady: function () {
      updateActiveLink("page3");
    },
  });
  app.route({
    view: "page4",
    onCreate: function () {},
    onReady: function () {
      updateActiveLink("page4");

      // Check login status on page load
      checkLoginStatus();
    },
  });

  // run app
  app.run();
});
