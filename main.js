let menu = document.getElementById("menu");
let button = document.getElementById("menu_button");

button.addEventListener("click", function() {
    menu.classList.toggle("active");
})