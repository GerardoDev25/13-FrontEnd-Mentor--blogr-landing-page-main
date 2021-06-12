const iconMenu = document.getElementById("icon-menu");
const iconHamburger = document.getElementById("iconHamburger");
const iconClose = document.getElementById("iconClose");

const navBar = document.getElementById("navBar");
const headerBottom = document.getElementById("headerBottom");

const navLeft = document.querySelector(".nav-left");

const product = document.querySelector(".product");
const company = document.querySelector(".company");
const connect = document.querySelector(".connect");

// ? when tha page load
window.addEventListener("DOMContentLoaded", () => {
   iconClose.style.display = "none";
   navBar.style.height = "0";
   headerBottom.style.height = "auto";

   // console.log(navLeft);
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
   const li = e.parentElement
   const ul = li.querySelector('ul')
   console.log(ul);
   ul.classList.add('accordion')
};

navLeft.addEventListener("click", (e) => {
   e.stopPropagation();

   if (e.target.classList.contains("nav-arrow"))
      acordeon(e.target);
   else if (
      e.target.parentElement.classList.contains("nav-arrow")
   )
      acordeon(e.target.parentElement);
});
