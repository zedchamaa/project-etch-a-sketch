// Create small grid when the small button is clicked

const smallButton = document.querySelector('#small-btn');
smallButton.addEventListener("click", createSmallGrid);

function createSmallGrid() {
  // Target the second child of the mainContainer div
  const mainContainer = document.getElementById('mainContainer');
  const gridContainerClass = mainContainer.children[1];
  // Create a new element/node
  const newGridContainerClass = document.createElement('div');
  newGridContainerClass.className = "grid-container-small";
  // Replace class name
  mainContainer.replaceChild(newGridContainerClass, gridContainerClass);
  // Create small grid
  let gridSize = 17;
  let n = gridSize * gridSize; // n is the total number of div squares
  for (let i = 0; i < n; i++) {
    const gridContainer = document.querySelector('.grid-container-small');
    const div = document.createElement('div');
    div.classList.add('square-div'); 
    div.setAttribute("onmousemove", "toggleClass(this)")
    gridContainer.append(div);
  }
}

// Create medium grid when the medium button is clicked

const mediumButton = document.querySelector('#medium-btn');
mediumButton.addEventListener("click", createMediumGrid);

function createMediumGrid() {
  // Target the second child of the mainContainer div
  const mainContainer = document.getElementById('mainContainer');
  const gridContainerClass = mainContainer.children[1];
  // Create a new element/node
  const newGridContainerClass = document.createElement('div');
  newGridContainerClass.className = "grid-container-medium";
  // Replace class name
  mainContainer.replaceChild(newGridContainerClass, gridContainerClass);
  // Create medium grid
  let gridSize = 30;
  let n = gridSize * gridSize; // n is the total number of div squares
  for (let i = 0; i < n; i++) {
    const gridContainer = document.querySelector('.grid-container-medium');
    const div = document.createElement('div');
    div.classList.add('square-div'); 
    div.setAttribute("onmousemove", "toggleClass(this)")
    gridContainer.append(div);
  }
}

// Create large grid when the large button is clicked

const largeButton = document.querySelector('#large-btn');
largeButton.addEventListener("click", createLargeGrid);

function createLargeGrid() {
  // Target the second child of the mainContainer div
  const mainContainer = document.getElementById('mainContainer');
  const gridContainerClass = mainContainer.children[1];
  // Create a new element/node
  const newGridContainerClass = document.createElement('div');
  newGridContainerClass.className = "grid-container-large";
  // Replace class name
  mainContainer.replaceChild(newGridContainerClass, gridContainerClass);
  // Create large grid
  let gridSize = 42;
  let n = gridSize * gridSize; // n is the total number of div squares
  for (let i = 0; i < n; i++) {
    const gridContainer = document.querySelector('.grid-container-large');
    const div = document.createElement('div');
    div.classList.add('square-div'); 
    div.setAttribute("onmousemove", "toggleClass(this)")
    gridContainer.append(div);
  }
}

// Clear grid

const clearButton = document.querySelector('#clear-btn');
clearButton.addEventListener("click", clearGrid);

function clearGrid() {
  // Target the second child of the mainContainer div
  const mainContainer = document.getElementById('mainContainer');
  const gridContainerClass = mainContainer.children[1];
  // Create a new element/node
  const newGridContainerClass = document.createElement('div');
  newGridContainerClass.className = "clear-grid-container";
  // Replace class name
  mainContainer.replaceChild(newGridContainerClass, gridContainerClass);
  // Create large grid
  let gridSize = 42;
  let n = gridSize * gridSize; // n is the total number of div squares
  for (let i = 0; i < n; i++) {
    const gridContainer = document.querySelector('.clear-grid-container');
    const div = document.createElement('div');
    div.classList.add('square-div'); 
    gridContainer.append(div);
  }
}

// Color the grid squares on mouse move

function toggleClass(element) {
  if (element.className === "square-div") {
    element.className = "square-div-filled";
  } 
}





