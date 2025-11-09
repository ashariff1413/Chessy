const boardElement = document.getElementById('board');
const aiGrid = document.querySelector('.ai-grid');
const yearEl = document.getElementById('year');

const initialPosition = [
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
  ['♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎'],
  Array(8).fill(''),
  Array(8).fill(''),
  Array(8).fill(''),
  Array(8).fill(''),
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];

const aiOpponents = [
  { name: 'Noob', elo: 100, style: 'Plays random legal moves. Perfect for absolute beginners.' },
  { name: 'Beginner', elo: 400, style: 'Understands development and basic tactics.' },
  { name: 'Average', elo: 1200, style: 'Solid opening principles and occasional blunders.' },
  { name: 'Good', elo: 1500, style: 'Balanced aggression with positional awareness.' },
  { name: 'Awesome', elo: 1800, style: 'Plays sharp openings and punishes weak squares.' },
  { name: 'Master', elo: 2000, style: 'Strong endgames and precise calculations.' },
  { name: 'IM', elo: 2500, style: 'International Master level intuition and depth.' },
  { name: 'GM', elo: 2500, style: 'Grandmaster level opening preparation and tactics.' },
  { name: 'Super GM', elo: 2700, style: 'Elite performance with minimal mistakes.' },
  // Hidden beast opponent
  { name: 'Random Guy', elo: 3400, style: 'Secret boss, plays like Stockfish.', hidden: true },
  { name: 'Mystery', elo: '??', style: 'Every duel is unpredictable. Strength changes on each visit.', dynamic: true }
];

function renderBoard() {
  if (!boardElement) return;
  boardElement.innerHTML = '';
  let isLightSquare = false;
  initialPosition.forEach((row) => {
    row.forEach((piece) => {
      const square = document.createElement('div');
      square.classList.add('square', isLightSquare ? 'light' : 'dark');

      if (piece) {
        const pieceEl = document.createElement('span');
        pieceEl.className = 'piece';
        pieceEl.textContent = piece;
        square.appendChild(pieceEl);
      }

      boardElement.appendChild(square);
      isLightSquare = !isLightSquare;
    });
    isLightSquare = !isLightSquare;
  });
}

function renderAiOpponents() {
  if (!aiGrid) return;
  aiGrid.innerHTML = '';

  aiOpponents
    .filter((opponent) => !opponent.hidden)
    .forEach((opponent) => {
      const card = document.createElement('article');
      card.className = 'card ai-card';
      card.setAttribute('role', 'listitem');

      const title = document.createElement('h3');
      title.textContent = opponent.name;

      const meta = document.createElement('p');
      meta.className = 'ai-meta';
      meta.textContent = opponent.style;

      const elo = document.createElement('p');
      elo.className = 'ai-elo';

      if (opponent.dynamic) {
        const randomElo = Math.floor(Math.random() * (2800 - 800 + 1)) + 800;
        elo.textContent = `Elo: ${randomElo}`;
      } else {
        elo.textContent = `Elo: ${opponent.elo}`;
      }

      card.append(title, elo, meta);
      aiGrid.appendChild(card);
    });
}

function updateYear() {
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

renderBoard();
renderAiOpponents();
updateYear();
