import JSComponents from "./JavaScriptComponents";

// Game Start Button
const startButton = document.querySelector(".startButton");
startButton.addEventListener("click", start);

const JS = JSComponents;
// Global Variables
const tileNodeList = document.querySelectorAll(".tile");
const mirrorTileNodeList = document.querySelectorAll(".mirrorTile");
let acquireTile = false;
let thisTile = false;
let flipClass = "flip";
let firstTile;
let secondTile;
let colorIndex;
let flipColor;

// ==================| Gameplay |==================

function start() {
  console.log("you clicked start!");

  // Reset Variables
  remVntLstnr(startButton, start);
  acquireTile = false;
  thisTile = false;

  // Activate Event listeners on tiles.
  tileNodeList.forEach((tile) => {
    tile.addEventListener("click", flip);
  });
  mirrorTileNodeList.forEach((mirrorTile) => {
    mirrorTile.addEventListener("click", flip);
  });
}

function flip() {
  // This Function...
  // 1. Generates a random color to be assigned to a tile.
  // 2. Prevents selecting the same tile twice in a turn.
  // 3. CSS style clicked tiles.
  // 4. And resets the board after 2 clicks.

  //   Variable Capture
  acquireTile = this.classList;
  correctIndex = acquireTile[0];
  thisTile = document.querySelector("." + correctIndex);

  //   Random Color - colorIndex defined in randomizeColor().
  randomizeColor();
  flipColor = tileColors[colorIndex];

  //   Disable double click on same tile.
  remVntLstnr(thisTile, flip);

  //   CSS Styling & Couting Clicks
  if (firstTile && firstTile !== thisTile) {
    thisTile.style.background = flipColor;

    remVntLstnr(tileNodeList, flip);

    setTimeout(() => {
      firstTile.style.background = "red";
      thisTile.style.background = "red";

      firstTile = 0;

      addVntLstnr(tileNodeList, flip);
    }, 2000);
  } else {
    thisTile.style.background = flipColor;
    firstTile = thisTile;
  }
}

// let flipTile;
// let randomColor;
const tileColors = [
  "blanchedalmond",
  "cyan",
  "orange",
  "green",
  "firebrick",
  "violet",
  "teal",
  "gold",
];

// let flippedTile = (tile) => {
//   randomColor = Math.floor(Math.random() * 6 + 1);
//   console.log("randColor" + randomColor);

//   flipTile = document.querySelector("." + tile);
//   return (flipTile.style.background = tileColors[randomColor]);
// };
