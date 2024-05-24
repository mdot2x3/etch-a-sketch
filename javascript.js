const grid = document.querySelector('.container');
let box = [];

// create new div elements
function boxMaker () {
    for (let i = 0; i < 256; i++) {
        const oneBox = document.createElement('div');
        oneBox.classList.add('box')
        box.push(oneBox);
    }
}

// append each div element to the container
function printGrid () {
    for (let i = 0; i < box.length; i++) {
        grid.appendChild(box[i]);
    }
}

boxMaker();
printGrid();