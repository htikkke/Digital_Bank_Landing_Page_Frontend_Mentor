import "./style.css";

const menuIcon = document.getElementById("menu-icon");
const popupMenu = document.getElementById("popup-menu");
const menuOverlay = document.getElementById("menu-overlay");
let isMenuOpen = false;

menuIcon.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menuIcon.innerHTML = `<img src="/src/images/icon-close.svg" alt="closeIcon" />`;
    menuOverlay.classList.remove("hidden");
    popupMenu.classList.remove("hidden");
    popupMenu.classList.add("flex");
  } else {
    menuIcon.innerHTML = `<img src="/src/images/icon-hamburger.svg" alt="hamburgerIcon" />`;
    menuOverlay.classList.add("hidden");
    popupMenu.classList.remove("flex");
    popupMenu.classList.add("hidden");
  }
});
