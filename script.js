// Create the grid container

const gridContainer = document.querySelector('.grid-container');

// Create a variable to store the number of grid squares

let n = 2408;

function createGrid() {
  for (let i = 0; i < n; i++) {
    const div = document.createElement('div');
    div.classList.add('square-div'); 
    div.setAttribute("onmousemove", "toggleClass(this)")
    gridContainer.append(div);
  }
}

createGrid();

// Color the grid squares on mouse hover

function toggleClass(element) {
  if (element.className = "square-div") {
    element.className = "square-div-filled";
  } else element.className = "square-div";
}