let menu = document.getElementById("menu");
let button = document.getElementById("menu_button");

button.addEventListener("click", function () {
  menu.classList.toggle("active");
});

let menuLink = menu.querySelectorAll("a");

menuLink.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});

document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("active");
  }
});

const rain = document.querySelector('.rain');
for (let i = 0; i < 30; i++) {
  let drop = document.createElement('div');
  drop.className = 'rain-drop';
  drop.style.left = Math.random() * 100 + '%';
  drop.style.animationDelay = Math.random() * 2 + 's';
  rain.appendChild(drop);
}

const snow = document.querySelector('.snow');
for (let i = 0; i < 50; i++) {
  let flake = document.createElement('div');
  flake.className = 'snow-flake';
  flake.style.left = Math.random() * 100 + '%';
  flake.style.animationDelay = Math.random() * 3 + 's';
  snow.appendChild(flake);
}

const leaves = document.createElement('div');
leaves.className = 'leaves-container';
document.querySelector('#projects').prepend(leaves);

for (let i = 0; i < 20; i++) {
  let leaf = document.createElement('div');
  leaf.className = 'leaf';
  leaf.style.left = Math.random() * 100 + '%';
  leaf.style.animationDelay = Math.random() * 5 + 's';
  leaf.style.animationDuration = (Math.random() * 3 + 4) + 's';
  leaves.appendChild(leaf);
}