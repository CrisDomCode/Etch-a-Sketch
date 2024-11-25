// Select elements
const container                         = document.querySelector('.container');
const newGridButton                     = document.querySelector('#new-grid-button');
const colorPicker                       = document.querySelector('#color-picker');
const randomColorButton                 = document.querySelector('#random-color-button');

let useRandomColors                     = false; // Flag to track color mode

// Function to generate a random RGB color
function getRandomColor() {
  const r                               = Math.floor(Math.random() * 256);
  const g                               = Math.floor(Math.random() * 256);
  const b                               = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to create a grid NxN
function createGrid(size) {
  container.innerHTML                   = ''; // Clear the container
  const totalSquares                    = size * size;
  const squareSize                      = 640 / size;

  for (let i = 0; i < totalSquares; i++) {
    const square                        = document.createElement('div');
    square.classList.add('grid-square');
    square.style.flex                   = `0 0 ${squareSize}px`;
    square.style.height                 = `${squareSize}px`;

    // Add hover event for changing color
    square.addEventListener('mouseover', () => {
      if (useRandomColors) {
        square.style.backgroundColor    = getRandomColor(); // Randomize color
      } else {
        square.style.backgroundColor    = colorPicker.value; // Use selected color
      }
    });

    container.appendChild(square);
  }
}

// Event listener for "Create New Grid" button
newGridButton.addEventListener('click', () => {
  let gridSize                          = parseInt(prompt('Enter the number of squares per side (max: 100):'), 10);

  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  createGrid(gridSize);
});

// Event listener for "Randomize Colors" button
randomColorButton.addEventListener('click', () => {
  useRandomColors                       = !useRandomColors; // Toggle random color mode
  randomColorButton.textContent         = useRandomColors ? 'Disable Random Colors' : 'Randomize Colors';
});

// Initialize with a default 16x16 grid
createGrid(16);
