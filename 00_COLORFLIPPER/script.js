/* ************************************************** */
/* Function definitions */
/* ************************************************** */
// Get a random hex. number between 0 and 255
const getRandomHexColorValue = () => {
    let value, hexColorValue;

    value = Math.floor(Math.random() * 255);
    hexColorValue = value.toString(16);

    if (hexColorValue.length === 1) {
        hexColorValue = '0' + hexColorValue;
    }

    return hexColorValue.toUpperCase();
};

// Generating a random haxadecimal color value
const colorRandomiser = () => {
    return (
        '#' +
        getRandomHexColorValue() +
        getRandomHexColorValue() +
        getRandomHexColorValue()
    );
};

// Changes mainContent background color and puts the color hex. value in colorNamePanel
const colorSwitcherButtonHandler = (event) => {
    const newColor = colorRandomiser();

    mainContent.style.backgroundColor = newColor;
    colorNamePanel.textContent = newColor;
};

/* ************************************************** */
/* Variable definitions */
/* ************************************************** */
const colorSwitcherButton = document.getElementById('colorSwitcherButton');
const mainContent = document.getElementById('mainContent');
const colorNamePanel = document.getElementById('colorNamePanel');

/* ************************************************** */
/* Main program */
/* ************************************************** */
colorSwitcherButton.addEventListener('click', colorSwitcherButtonHandler);
