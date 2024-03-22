const elMenuBtn = document.querySelector(".header__open-menu-btn");
const header = document.querySelector(".header");

elMenuBtn.addEventListener("click", () => {
  header.querySelector(".header__nav-lists").classList.toggle("show");
  elMenuBtn.classList.toggle("btn-img-changer");
  document.body.classList.toggle("unscroll");
});
