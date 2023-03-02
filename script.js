
let optionOneScreen = document.querySelector(".option-one-screen");
let first = document.querySelector(".first");
let storyOpeningScreen = document.querySelector(".story-opening");
let optionTwoScreen = document.querySelector(".option-two-screen");
let holdOff = document.querySelector(".option-one-end");
let dead = document.querySelector(".option-two-end");
let blasterOneButton = document.querySelector(".three");
let blasterTwoButton = document.querySelector(".four")
let button = document.querySelector("buttons");
let img = document.querySelector("img");
let helpusButton = document.querySelector(".one")
let goHomeButton = document.querySelector(".five")
let leaveNowButton = document.querySelector(".two")




helpusButton.onclick = function() {
  optionOneScreen.style.display = "block";
  storyOpeningScreen.style.display = "none";

};

blasterOneButton.onclick = function() {
  optionOneScreen.style.display = "none";
  holdOff.style.display = "block";
body.style.backgroundCOLOR = "green";

};

blasterTwoButton.onclick = function() {
  optionOneScreen.style.display = "none";
  holdOff.style.display = "block";


};

leaveNowButton.onclick = function() {
  optionTwoScreen.style.display = "block";
  storyOpeningScreen.style.display = "none";

};


goHomeButton.onclick = function() {
  optionTwoScreen.style.display = "none";
  dead.style.display = "block";

};












