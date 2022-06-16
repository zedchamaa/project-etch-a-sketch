// Create the grid container

const gridContainer = document.querySelector('.grid-container');

function createMultipleSquareDiv() {
  for (let i = 0; i < 1363; i++) {
    const div = document.createElement('div');
    div.classList.add('square-div');
    gridContainer.append(div);
  }
}

createMultipleSquareDiv();

