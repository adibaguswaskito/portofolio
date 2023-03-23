const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
  hamburger.classList.remove("is-active");
  menu.classList.remove("menu-active");
});

const loder = document.querySelector(".loder");

function loderActive() {
  loder.classList.add("loder-active");
}

function loderActiveTime() {
  setInterval(loderActive, 3000);
}

window.onload = loderActiveTime();
