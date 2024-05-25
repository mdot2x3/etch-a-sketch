const body = document.querySelector('body');
const grid = document.querySelector('.container');
let box = [];

// create new div elements
function boxMaker (num) {
    for (let i = 0; i < (num * num); i++) {
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
    const randInt = (int) => {
        return Math.floor(Math.random() * int)
    };
    e.target.style.backgroundColor = `rgb(${randInt(256)}, ${randInt(256)}, ${randInt(256)})`;
});

// create button via DOM
function gridButton () {
    const buttonCont = document.createElement('div');
    buttonCont.classList.add('buttonCont');
    const button = document.createElement('button');
    buttonCont.appendChild(button);
    body.insertBefore(buttonCont, grid);

    buttonPrompt(button);
}

// event handler for button user can use to set grid size
function buttonPrompt (button) {
    button.addEventListener('click', () => {
        let userChoice = prompt("Building grid... Please enter the number of squares per side(1-100 are valid)(default set to 16).", 16);
        
        while (userChoice < 1 || userChoice > 100) {
            userChoice = prompt("That is not a valid value. Please enter a number between 1 and 100. (default is set to 16).", 16);
        };
    
        rebuildGrid(userChoice);

    });
}

// after user input received, clear current grid and build a new one
function rebuildGrid (userChoice) {
    box = [];
    grid.textContent = '';
    boxMaker(userChoice);
    box.forEach((e) => {
        e.setAttribute('style', 
        `flex: 1 0 calc(100% / ${userChoice});
        height: calc(100% / ${userChoice});
        border: 1px dotted black;
        box-sizing: border-box;`
        );
    });
    printGrid();
}

boxMaker(16);
printGrid();
gridButton();