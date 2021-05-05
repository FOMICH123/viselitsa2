import { ruswords } from "./words.js";
let h1 = document.querySelector("h1");
let entrNameBtn = document.querySelector("#entrNameBtn");
let entrName = document.querySelector("#entrName");
let setBtn = document.querySelector(".setBtn");
let modal = document.querySelector(".settings");
let secretModal = document.querySelector(".secretModal");
let multiplayer = document.querySelector(".multiplayer");
let single = true;
let singleplayer = document.querySelector(".singleplayer");
let start = document.querySelector(".start");
let word = randomWord();
let check = document.querySelector(".check");
let letter = document.querySelector(".letter");
let letters = [];
let wordInput = document.querySelector(".word");
let attempts = document.querySelector(".attempts");
let attemp = 3;
multiplayer.onclick = function (event) {
  event.preventDefault();
  modal.style.transform = "translateY(100%)";
  secretModal.style.transform = "translate(0)";
  single = false;
};
singleplayer.onclick = function () {
  single = true;
};
setBtn.onclick = function () {
  modal.style.transform = "translateY(0)";
};
modal.onclick = function () {
  modal.style.transform = "translateY(100%)";
};
modal.children[0].onclick = function (event) {
  event.stopPropagation();
};
entrNameBtn.onclick = function (event) {
  console.log(entrName.value);
  event.preventDefault();
  h1.innerHTML = "ВИСЕЛИЦА.MULTIPLAYER";
};
secretModal.onclick = function () {
  secretModal.style.transform = "translateY(100%)";
};
secretModal.children[0].onclick = function (event) {
  event.stopPropagation();
};
start.onclick = function () {
  word = randomWord();
  attemp = 3;
  attempts.innerHTML = 3;
  wordInput.value = "*".repeat(word.length);
  check.disabled = false;
  letter.disabled = false;
};
check.onclick = function () {
  if (word.includes(letter.value)) {
    letters.push(letter.value);
  } else {
    attemp--;
    attempts.innerHTML = attemp;
  }
  if (attemp == 0) {
    check.disabled = true;
    letter.disabled = true;
    alert('Вы проиграли! слово было: "' + word + '"');
  }
  let encoded = "";
  for (let i = 0; i < word.length; i++) {
    if (letters.includes(word[i])) {
      encoded += word[i];
    } else {
      encoded += "*";
    }
  }
  wordInput.value = encoded;
  if (word == encoded) {
    check.disabled = true;
    letter.disabled = true;
    alert("Вы выиграли!");
  }
};
function randomWord() {
  // let words = ["телевизор", "ванная", "огурец", "помидор"];
  let words = ruswords;
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }
  return words[randomInteger(0, words.length)];
}
wordInput.value = "*".repeat(word.length);
