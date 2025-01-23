var boxChangeColor = document.querySelector(".change-color");

function changeYellow() {
  boxChangeColor.classList.add("is-active");
}

boxChangeColor.addEventListener("click", changeYellow);

var boxToggleColor = document.querySelector(".toggle-color");

function changeColor() {
  boxToggleColor.classList.toggle("is-active");
}

boxToggleColor.addEventListener("click", changeColor);

var boxTrigger = document.querySelector(".trigger");
var boxTarget = document.querySelector(".target");

function hideBox() {
  boxTarget.classList.toggle("is-hidden");
}

boxTrigger.addEventListener("click", hideBox);

var boxTriggerAllSelf = document.querySelector(".trigger-all-self");
var boxTriggerAll = document.querySelector(".trigger-all");

boxTriggerAll.addEventListener("click", changeYellow);
boxTriggerAll.addEventListener("click", changeColor);

boxTriggerAllSelf.addEventListener("click", changeYellow);
boxTriggerAllSelf.addEventListener("click", changeColor);

function allSelf() {
  boxTriggerAllSelf.classList.toggle("is-active");
}
boxTriggerAllSelf.addEventListener("click", allSelf);
