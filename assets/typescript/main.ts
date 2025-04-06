let count: Element | null = document.querySelector(".count");
let restCount: Element | null = document.querySelector(".rest-count");
let incrementCount: Element | null = document.querySelector(".increment-count");

let initValue: number = 0;

function formatCount(value: number): string {
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
