document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");

  menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("open");
  });

  // Zamknięcie menu po kliknięciu linku
  document.querySelectorAll(".navbar a").forEach(link => {
      link.addEventListener("click", () => {
          navbar.classList.remove("open");
      });
  });
});
