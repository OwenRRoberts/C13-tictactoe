const cells = document.querySelectorAll('.row > div');

let turnCount = 0; //game turn counter


//console.log(cells);
//cells[0].textContent;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let clickCount = 0;

function cellClicked() {
    clickCount++;
    if (clickCount % 2 == 1) {
        event.target.textContent = 'X';
    } else {
        event.target.textContent = 'O';
    }
}
