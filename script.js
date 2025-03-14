document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");
  
    // Po załadowaniu strony pokazujemy ikonę menu
    setTimeout(() => {
      menuIcon.classList.add("visible");
    }, 500); // Opóźnienie dla efektu
  
    // Kliknięcie w ikonę otwiera navbar
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("open");
    });
  });
  