var boxChangeColor = document.querySelector(".change-color");

function changeYellow() {
  boxChangeColor.classList.add("is-active");
}

boxChangeColor.addEventListener("click", changeYellow);

var boxChangeColor = document.querySelector(".toggle-color");

function changeColor() {
  boxChangeColor.classList.toggle("is-active");
}

boxChangeColor.addEventListener("click", changeColor);

var boxTrigger = document.querySelector(".trigger");
var boxTarget = document.querySelector(".target");

function hideBox() {
  boxTarget.classList.toggle("is-hidden");
}

boxTrigger.addEventListener("click", hideBox);
