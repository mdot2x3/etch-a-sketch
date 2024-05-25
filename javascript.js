const body = document.querySelector('body');
const grid = document.querySelector('.container');
let box = [];

// create new div elements
function boxMaker (num) {
    for (let i = 0; i < (num * num); i++) {
        const oneBox = document.createElement('div');
        oneBox.classList.add('box');
        // initialize brightness to 1 (100%)
        oneBox.style.filter = 'brightness(1)';
        box.push(oneBox);
    }
}

// append each div element to the container
function printGrid () {
    for (let i = 0; i < box.length; i++) {
        grid.appendChild(box[i]);
    }
}

// change individual div background color on mouseover, darken on subsequent interactions
grid.addEventListener('mouseover', (e) => {
    const randInt = (int) => {
        return Math.floor(Math.random() * int)
    }

    if (!e.target.style.backgroundColor) {
        e.target.style.backgroundColor = `rgb(${randInt(256)}, ${randInt(256)}, ${randInt(256)})`;
    }
    
    // reduce the brightness by 0.10 on each mouseover
    let currentBrightness = parseFloat(e.target.style.filter.match(/brightness\(([^)]+)\)/)[1]);
    if (currentBrightness > 0) {
        currentBrightness -= 0.10;
        e.target.style.filter = `brightness(${currentBrightness})`;
    }
});

// create button via DOM
function gridButton () {
    const buttonCont = document.createElement('div');
    buttonCont.classList.add('buttonCont');
    const button = document.createElement('button');
    button.textContent = "Set Grid Size";
    buttonCont.appendChild(button);
    body.insertBefore(buttonCont, grid);

    buttonPrompt(button);
}

// event handler for button user can use to set grid size
function buttonPrompt (button) {
    button.addEventListener('click', () => {
        let userChoice = prompt("Building grid...\nPlease enter the number of squares per side (1-100 valid)\n(default set to 16).", 16);
        
        while (userChoice < 1 || userChoice > 100) {
            userChoice = prompt("That is not a valid value.\nPlease enter a number between 1 and 100.\n(default set to 16).", 16);
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
        box-sizing: border-box;
        filter: brightness(1);` // initialize brightness to 1 (100%)
        );
    });
    
    printGrid();

}

// initial grid setup
boxMaker(16);
printGrid();
gridButton();