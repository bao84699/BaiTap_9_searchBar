let search = document.getElementById("search");
let button = document.getElementById("button");

button.addEventListener("click", () => {
    search.classList.toggle("show");
    button.classList.toggle("active");
});