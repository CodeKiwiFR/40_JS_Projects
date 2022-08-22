/* ************************************************** */
/* Variable definitions */
/* ************************************************** */
const mobileButtonElement = document.getElementById('mobileButton');
const backdropElement = document.getElementById('backdrop');
const menuContainerElement = document.getElementById('menuContainer');

const elementsToToggle = [mobileButtonElement, backdropElement, menuContainerElement];

/* ************************************************** */
/* Function definitions */
/* ************************************************** */
const mobileButtonHandler = (event) => {
    for (const element of elementsToToggle) {
        element.classList.toggle('openedMenu');
    }
};

const backdropHandler = (event) => {
    for (const element of elementsToToggle) {
        element.classList.remove('openedMenu');
    }
};

/* ************************************************** */
/* Main program */
/* ************************************************** */
mobileButtonElement.addEventListener('click', mobileButtonHandler);
backdropElement.addEventListener('click', backdropHandler);
