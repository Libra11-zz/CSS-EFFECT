let input = document.querySelector("input");
let search = document.querySelector(".search-icon");
let handle = document.querySelector(".handle");

input.addEventListener("input", () => {
  input.value === ""
    ? search.classList.remove("open")
    : search.classList.add("open");
});

handle.addEventListener("click", () => {
  input.value = "";
  search.classList.remove("open");
});