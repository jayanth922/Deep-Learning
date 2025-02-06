const board = document.getElementById('board');
const cells = Array.from(document.querySelectorAll('.cell'));
const message = document.getElementById('message');
const restartButton = document.getElementById('restartButton');

let currentPlayer = 'x';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(clickedCell, clickedCellIndex) {
    if (gameBoard[clickedCellIndex] === '' && gameActive) {
        gameBoard[clickedCellIndex] = currentPlayer;
        clickedCell.classList.add(currentPlayer);

        if (checkWin()) {
            message.textContent = `Player ${currentPlayer.toUpperCase()} wins!`;
            gameActive = false;
            return;
        }

        if (checkDraw()) {
            message.textContent = "It's a draw!";
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        message.textContent = `Player ${currentPlayer.toUpperCase()}'s turn`;
    }
}

function checkWin() {
    return winningConditions.some(combination => {
        return combination.every(index => {
            return gameBoard[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

function restartGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'x';
    message.textContent = `Player ${currentPlayer.toUpperCase()}'s turn`;
    cells.forEach(cell => {
        cell.classList.remove('x', 'o');
    });
}

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(cell, index));
});

restartButton.addEventListener('click', restartGame);

message.textContent = `Player ${currentPlayer.toUpperCase()}'s turn`;
