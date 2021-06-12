const iconMenu = document.getElementById("icon-menu");
const iconHamburger = document.getElementById("iconHamburger");
const iconClose = document.getElementById("iconClose");

// ? when tha page load
window.addEventListener("DOMContentLoaded", () => {
   iconClose.style.display = "none";
});

// ? when chiking in the icon
iconMenu.addEventListener("click", (e) => {
   e.stopPropagation();

   if (iconClose.style.display == "none") {
      iconClose.style.display = "block";
      iconHamburger.style.display = "none";
   } else {
      iconClose.style.display = "none";
      iconHamburger.style.display = "block";
   }
});
