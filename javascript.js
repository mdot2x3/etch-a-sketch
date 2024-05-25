const body = document.querySelector('body');
const grid = document.querySelector('.container');
let box = [];
let userChoice = prompt("Building grid... Please enter the number of squares per side (default is set to 16).", 16)

// button user can use to set grid size
function gridButton () {
    const buttonCont = document.createElement('div');
    buttonCont.classList.add('buttonCont');
    const button = document.createElement('button');
    buttonCont.appendChild(button);
    body.insertBefore(buttonCont, grid);
}

// create new div elements
function boxMaker () {
    for (let i = 0; i < (userChoice * userChoice); i++) {
        const oneBox = document.createElement('div');
        oneBox.classList.add('box');
        box.push(oneBox);
    }
}

// append each div element to the container
function printGrid () {
    for (let i = 0; i < box.length; i++) {
        grid.appendChild(box[i]);
    }
}

// change individual div background color on mouseover
grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = '#FF10F0';
});

gridButton();
boxMaker();
printGrid();