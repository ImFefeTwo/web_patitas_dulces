const nav = document.querySelector("#header__nav");
const openButton = document.querySelector("#header__menu-open-button");
const closeButton = document.querySelector("#header__nav-close-button");

openButton.addEventListener("click", () => {
  nav.classList.add("header__nav-visible");
  document.body.classList.add("body__no-scroll");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("header__nav-visible");
  document.body.classList.remove("body__no-scroll");
});
