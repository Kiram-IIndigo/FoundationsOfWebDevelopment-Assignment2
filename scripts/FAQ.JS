const faqdiv = document.querySelector(".content");
const togglefaq = document.querySelector(".toggle-btn");
faqdiv.style.display = "none";
togglefaq.addEventListener("click", function () {
  if (faqdiv.style.display === "none" || faqdiv.style.display === "") {
    faqdiv.style.display = "block";
  } else {
    faqdiv.style.display = "none";
  }
});
