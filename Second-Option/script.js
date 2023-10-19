let menubar = document.querySelector("#menu-bar");
let mynav = document.querySelector(".nav");
let searchbar = document.querySelector("#search-bar");
let search = document.querySelector(".search-form");

manubar.onclick = () => {
  menybar.classList.toggle("fa.times");
  mynav.classList.toggle("active");
};

searchbar.onclick = () => {
  search.classList.toggle("active");
};
