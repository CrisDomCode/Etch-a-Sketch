// Select elements
const container                         = document.querySelector('.container');
const newGridButton                     = document.querySelector('#new-grid-button');
const colorPicker                       = document.querySelector('#color-picker');
const randomColorButton                 = document.querySelector('#random-color-button');
const resetGridButton                   = document.querySelector('#reset-grid-button');
const toggleModeButton                  = document.querySelector('#toggle-mode-button');
const loadingSpinner                    = document.querySelector('#loading-spinner');

let useRandomColors                     = false; // Flag to track random color mode
let darkMode                            = false; // Flag to track dark mode

// Generate a random RGB color
function getRandomColor() {
  const r                               = Math.floor(Math.random() * 256);
  const g                               = Math.floor(Math.random() * 256);
  const b                               = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Create a grid NxN
function createGrid(size) {
  container.innerHTML                   = ''; // Clear existing grid
  const totalSquares                    = size * size;
  const squareSize                      = 640 / size;

  // Show loading spinner
  loadingSpinner.classList.remove('hidden');

  setTimeout(() => {
    for (let i = 0; i < totalSquares; i++) {
      const square                      = document.createElement('div');
      square.classList.add('grid-square');
      square.style.flex                 = `0 0 ${squareSize}px`;
      square.style.height               = `${squareSize}px`;

      // Add hover effect for colors
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor    = useRandomColors
          ? getRandomColor()
                                        : colorPicker.value;
      });

      container.appendChild(square);
    }

    // Hide loading spinner
    loadingSpinner.classList.add('hidden');
  }, 500);
}

// Reset grid colors
resetGridButton.addEventListener('click', () => {
  document.querySelectorAll('.grid-square').forEach(square => {
    square.style.backgroundColor        = 'transparent';
  });
});

// Toggle random color mode
randomColorButton.addEventListener('click', () => {
  useRandomColors                       = !useRandomColors;
  randomColorButton.textContent         = useRandomColors
    ? 'Disable Random Colors'
                                        : 'Randomize Colors';
});

// Toggle light/dark mode
toggleModeButton.addEventListener('click', () => {
  darkMode                              = !darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
  toggleModeButton.textContent          = darkMode ? 'Light Mode' : 'Dark Mode';
});

// Create new grid with user input
newGridButton.addEventListener('click', () => {
  let gridSize                          = parseInt(prompt('Enter the number of squares per side (max: 100):'), 10);

  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  createGrid(gridSize);
});

// Initialize default 16x16 grid
createGrid(16);
