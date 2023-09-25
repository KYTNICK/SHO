document.addEventListener("DOMContentLoaded", function () {
  const moreBtns = document.querySelectorAll(".more-btn");

  moreBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => console.log("Hello World)"), 3000);
    });
  });
});
