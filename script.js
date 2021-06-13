const iconMenu = document.getElementById("icon-menu");
const iconHamburger = document.getElementById("iconHamburger");
const iconClose = document.getElementById("iconClose");

const navBar = document.getElementById("navBar");
const headerBottom = document.getElementById("headerBottom");

const navLeft = document.querySelector(".nav-left");

const ulList = document.querySelectorAll(
   ".nav-link-container  ul"
);

// ? when tha page load
window.addEventListener("DOMContentLoaded", () => {
   if (window.innerWidth < 768) {
      iconClose.style.display = "none";
      navBar.style.height = "0";
      headerBottom.style.height = "auto";
   } else {
      iconMenu.style.display = "none";
   }
});

// ? when chiking in the icon
iconMenu.addEventListener("click", (e) => {
   e.stopPropagation();

   if (iconClose.style.display == "none") {
      iconClose.style.display = "block";
      iconHamburger.style.display = "none";

      navBar.style.height = "33rem";
      headerBottom.style.height = "0";
   } else {
      iconClose.style.display = "none";
      iconHamburger.style.display = "block";

      navBar.style.height = "0";
      headerBottom.style.height = "auto";
   }
});

const acordeon = (e) => {
   const li = e.parentElement;
   const ul = li.querySelector("ul");

   if (ul.classList.contains("accordion")) {
      ul.classList.replace("accordion", "nab-hidden");
      console.log("hola");
   } else {
      ulList.forEach((e) =>
         e.classList.contains("accordion")
            ? e.classList.replace("accordion", "nab-hidden")
            : ""
      );
      ul.classList.replace("nab-hidden", "accordion");
   }
};

// ? when clicking inside menu
navLeft.addEventListener("click", (e) => {
   e.stopPropagation();

   if (e.target.classList.contains("nav-arrow"))
      acordeon(e.target);
   else if (
      e.target.parentElement.classList.contains("nav-arrow")
   )
      acordeon(e.target.parentElement);
});

// *****************************************
// ? *************** desktop ***************
// *****************************************

window.addEventListener("resize", (e) => {
   if (e.target.innerWidth > 768) {
      console.log("hola mundo");
   }
});
