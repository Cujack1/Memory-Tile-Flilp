// Component functions
function remVntLstnr(nodes, callback) {
  if (nodes.length > 1) {
    nodes.forEach((obj) => {
      obj.removeEventListener("click", callback);
    });
  } else nodes.removeEventListener("click", callback);
}

function addVntLstnr(nodes, callback) {
  if (nodes.length > 1) {
    nodes.forEach((obj) => {
      obj.addEventListener("click", callback);
    });
  } else nodes.addEventListener("click", callback);
}

function randomizeColor() {
  colorIndex = Math.floor(Math.random() * 7);
}

export default JSComponents;
