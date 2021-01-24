const cells = document.querySelectorAll('.row > div');
const topLeft = document.getElementById('top-left');
const topMiddle = document.getElementById('top-middle');
const topRight = document.getElementById('top-right');
const centerLeft = document.getElementById('center-left');
const centerMiddle = document.getElementById('center-middle');
const centerRight = document.getElementById('center-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomMiddle = document.getElementById('bottom-middle');
const bottomRight = document.getElementById('bottom-right');
const winnerIs = document.getElementById('winnerChickenDinner');

let turnCount = 0; //game turn counter
let gameOver;  //when gameCount = 1, game is over
gameOver = false;
let clickCount = 0; //how many clicks there have been

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked(event) {
    console.log(event);
    if (event.target.textContent == "") {
        clickCount++;
        if (clickCount % 2 == 1) {
            event.target.textContent = 'X';
            turnCount++
        } else {
            event.target.textContent = 'O';
            turnCount++
        }
        checkWinner();
    }
}

function isEven(e) {
    return x % 2 == 0;
}

function boxClick() {
    if (gameOver == 1) {
        itsOver();
    } else if (box.target.textContent == 'O' || box.target.textContent == 'X') {
        box.textContent += ' ';
    } else if (isEven(turnCount)) {
        turnCount++;
        box.targetContent = 'X';
        checkWinner.winner();
    } else {
        turnCount++;
        box.targetContent = 'O';
        checkWinner.winner();
    }
}

function checkWinner() {
    const topRow = (topLeft.textContent + topMiddle.textContent + topRight.textContent);
    const middleRow = (centerLeft.textContent + centerMiddle.textContent + centerRight.textContent);
    const bottomRow = (bottomLeft.textContent + bottomMiddle.textContent + bottomRight.textContent);
    const leftColumn = (topLeft.textContent + centerLeft.textContent + bottomLeft.textContent);
    const midColumn = (topMiddle.textContent + centerMiddle.textContent + bottomMiddle.textContent);
    const rightColumn = (topRight.textContent + centerRight.textContent + bottomRight.textContent);
    const frontSlash = (topRight.textContent + centerMiddle.textContent + bottomLeft.textContent);
    const backSlash = (topLeft.textContent + centerMiddle.textContent + bottomRight.textContent);
    let winner = [topRow, middleRow, bottomRow, leftColumn, midColumn, rightColumn, frontSlash, backSlash];
    console.log(turnCount);
    for (let i = 0; i < winner.length; i++) {
        //console.log(winner[i]);
        if (winner[i] === 'XXX') {
            winnerIs.textContent = 'And the winner in a landslide is... X!';
            gameOver++;

        } else if (winner[i] === 'OOO') {
            winnerIs.textContent = 'And the winner in a landslide is...O!';
            gameOver++;
        } else if (turnCount === 9) {
            winnerIs.textContent = 'Wow, either both of you suck or both of you are amazing.  It is a draw!';
            gameOver++;  //why will you not say it's a draw?
        }
    }
}

function itsOver() {
    if (gameOver == true) {
        window.location.reload(cells);  //and why will you not reset on a click?
    }
}