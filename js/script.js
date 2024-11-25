// Sélectionne les éléments nécessaires
const container           = document.querySelector('.container');
const newGridButton       = document.querySelector('#new-grid-button');

// Fonction pour créer une grille NxN
function createGrid(size) {
  container.innerHTML     = ''; // Réinitialise le conteneur
  const totalSquares      = size * size;
  const squareSize        = 640 / size; // Taille dynamique des carrés

  for (let i = 0; i < totalSquares; i++) {
    const square          = document.createElement('div');
    square.classList.add('grid-square');
    square.style.flex     = `0 0 ${squareSize}px`; // Définit la largeur
    square.style.height   = `${squareSize}px`; // Définit la hauteur

    // Ajout d'un écouteur pour changer la couleur au survol
    square.addEventListener('mouseover', () => {
      square.classList.add('hovered');
    });

    container.appendChild(square);
  }
}

// Gestionnaire d'événements pour le bouton "Create New Grid"
newGridButton.addEventListener('click', () => {
  let gridSize            = parseInt(prompt('Enter the number of squares per side (max: 100):'), 10);

  // Validation de l'entrée
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  // Crée une nouvelle grille
  createGrid(gridSize);
});

// Initialisation avec une grille par défaut 16x16
createGrid(16);
