/* ************************************************** */
/* Variable definitions */
/* ************************************************** */
const decreaseButtonElement = document.getElementById('decreaseButton');
const resetButtonElement = document.getElementById('resetButton');
const increaseButtonElement = document.getElementById('increaseButton');
const counterElement = document.getElementById('counter');
let counter = parseInt(counterElement.textContent);

/* ************************************************** */
/* Function definitions */
/* ************************************************** */
const updateCounter = (value, reset = false) => {
    if (reset) {
        counter = 0;
    } else {
        counter += value;
    }

    counterElement.textContent = counter;
    if (counter < 0 && !counterElement.classList.contains('red')) {
        counterElement.classList.add('red');
    } else if (counter > 0 && !counterElement.classList.contains('green')) {
        counterElement.classList.add('green');
    } else if (counter === 0) {
        if (counterElement.classList.contains('red')) {
            counterElement.classList.remove('red');
        }
        if (counterElement.classList.contains('green')) {
            counterElement.classList.remove('green');
        }
    }
};

const decreaseButtonHandler = (event) => {
    updateCounter(-1);
};

const resetButtonHandler = (event) => {
    updateCounter(0, true);
};

const increaseButtonHandler = (event) => {
    updateCounter(1);
};

/* ************************************************** */
/* Main program */
/* ************************************************** */
decreaseButtonElement.addEventListener('click', decreaseButtonHandler);
resetButtonElement.addEventListener('click', resetButtonHandler);
increaseButtonElement.addEventListener('click', increaseButtonHandler);
