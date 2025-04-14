document.addEventListener("DOMContentLoaded", (event) => {
  let peopleItems = document.querySelectorAll(".home_people_collection-item-container");
  const xRange = 12;
  const yRange = 1;
  const sizeRangeMax = 9;
  const sizeRangeMin = 6;
  
  for (const peopleItem of peopleItems) {
	  let size = getRandomNum(sizeRangeMin, sizeRangeMax);
	  let xPos = getRandomNum(0, xRange);
	  let yPos = getRandomNum(-1 * yRange, yRange);
	  
	  peopleItem.style.translate = xPos + "rem " + yPos + "rem ";
	  peopleItem.style.width = size + "rem";
	  peopleItem.style.height = size + "rem";
	  
  }
});

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}