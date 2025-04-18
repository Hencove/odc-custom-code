document.addEventListener("DOMContentLoaded", (event) => {
  randomizePeopleGrid();
  resizeCardStack();
});

window.addEventListener("resize", debounce(onResize, 200)); // 200ms debounce

function resizeCardStack() {
  let cardStacks = document.querySelectorAll(".home_solutions_card-stack");

  for (const cardStack of cardStacks) {
    let cards = cardStack.querySelectorAll(".home_solutions_card");

    let previousHeight = 0;
    let cumulativeOffset = 0;

    for (let i = 0; i < cards.length; i++) {
      let currentCard = cards[i];
      let currentHeight = currentCard.offsetHeight;

      if (previousHeight == 0) {
        previousHeight = currentHeight;
        continue;
      } else {
        let heightDiff = previousHeight - currentHeight;
        let topOffset = heightDiff + cumulativeOffset + remToPx(6);
        currentCard.style.top = topOffset + "px";
        cumulativeOffset = topOffset;
        previousHeight = currentHeight;
      }
    }
  }
}

function randomizePeopleGrid() {
  let peopleItems = document.querySelectorAll(
    ".home_people_collection-item-container",
  );
  const xRange = 12;
  const yRange = 1;
  const sizeRangeMax = 9;
  const sizeRangeMin = 6;

  for (const peopleItem of peopleItems) {
    let size = getRandomNum(sizeRangeMin, sizeRangeMax);
    let xPos = getRandomNum(0, xRange);
    let yPos = getRandomNum(-1 * yRange, yRange);
    let spacer = peopleItem.querySelector(".home_people_popover-spacer");

    peopleItem.style.translate = xPos + "rem " + yPos + "rem ";
    peopleItem.style.width = size + "rem";
    peopleItem.style.height = size + "rem";

    spacer.style.height = size + "rem";
  }
}

function onResize() {
  resizeCardStack();
}

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function remToPx(rem) {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  return rem * rootFontSize;
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
