"use strict";
let count = document.querySelector(".count");
let restCount = document.querySelector(".rest-count");
let incrementCount = document.querySelector(".increment-count");
let initValue = 0;
function formatCount(value) {
  return value < 10 ? `0${value}` : `${value}`;
}
function increment() {
  if (count) {
    initValue++;
    count.textContent = formatCount(initValue).toString();
  }
}
function restart() {
  if (count) {
    initValue = 0;
    count.textContent = formatCount(initValue).toString();
  }
}
