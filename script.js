const btnOpen = document.querySelector(".nav-btn");
const btnClose = document.querySelector(".close-btn");

btnOpen.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu);

function openMenu() {
  btnClose.style.display = "block";
  btnOpen.style.display = "none";
}

function closeMenu() {
  btnClose.style.display = "none";
  btnOpen.style.display = "block";
}
