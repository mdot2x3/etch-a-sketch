const body = document.querySelector('body');
const grid = document.querySelector('.container');
let box = [];

// create button via DOM
function gridButton () {
    const buttonCont = document.createElement('div');
    buttonCont.classList.add('buttonCont');
    const button = document.createElement('button');
    buttonCont.appendChild(button);
    body.insertBefore(buttonCont, grid);

    // event handler for button user can use to set grid size
    button.addEventListener('click', () => {
    let userChoice = prompt("Building grid... Please enter the number of squares per side(1-100 are valid)(default set to 16).", 16);
    while (userChoice < 1 || userChoice > 100) {
        userChoice = prompt("That is not a valid value. Please enter a number between 1 and 100. (default is set to 16).", 16);
    };
})
}

// create new div elements
function boxMaker () {
    for (let i = 0; i < (16 * 16); i++) {
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


// // create new div elements
// function boxMaker () {
//     for (let i = 0; i < (userChoice * userChoice); i++) {
//         const oneBox = document.createElement('div');
//         oneBox.classList.add('box');
//         box.push(oneBox);
//     }
// }