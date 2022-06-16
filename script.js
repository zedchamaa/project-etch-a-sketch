// Create the grid container

const gridContainer = document.querySelector('.grid-container');

function createGrid() {
  for (let i = 0; i < 2408; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'square-div'); 
    gridContainer.append(div);
  }
}

createGrid();

// Color the grid squares on mouse hover

const squareDiv = document.getElementById("square-div");

squareDiv.addEventListener("mouseover", colorGridMouseOver, false);
squareDiv.addEventListener("mouseout", colorGridMouseOut, false);

function colorGridMouseOver() {
  squareDiv.setAttribute('style', 'color: blue; background: black;');
}

function colorGridMouseOut() {
  squareDiv.setAttribute('style', 'color: blue; background: red;');
}