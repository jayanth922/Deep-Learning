const cells = document.querySelectorAll('.cell');
const messageDisplay = document.querySelector('.message');
const resetButton = document.querySelector('#resetButton');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
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

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        messageDisplay.textContent = `${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    let roundDraw = !board.includes("");
    if (roundDraw) {
        messageDisplay.textContent = `It's a draw!`;
        gameActive = false;
        return;
    }

    switchPlayer();
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageDisplay.textContent = `${currentPlayer}'s turn`;
}

function handleResetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    messageDisplay.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = '');
    messageDisplay.textContent = "X's turn";
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', handleResetGame);
messageDisplay.textContent = "X's turn";