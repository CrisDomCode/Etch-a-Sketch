// Sélectionne le conteneur
const container = document.querySelector('.container');

// Fonction pour créer une grille NxN
function createGrid(size) {
  container.innerHTML = ''; // Réinitialise le conteneur
  const totalSquares = size * size;
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    
    // Ajout d'un écouteur pour changer la couleur au survol
    square.addEventListener('mouseover', () => {
      square.classList.add('hovered'); // Ajoute une classe pour changer la couleur
    });

    container.appendChild(square);
  }
}

// Initialisation de la grille
createGrid(16);
