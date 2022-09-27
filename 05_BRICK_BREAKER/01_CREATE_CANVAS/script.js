/* ************************************************** */
/* Class definitions */
/* ************************************************** */

/* ************************************************** */
/* Function definitions */
/* ************************************************** */

/* ************************************************** */
/* Variable definitions */
/* ************************************************** */
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

/* ************************************************** */
/* Main program */
/* ************************************************** */

// Draw a simple square on the canvas
context.beginPath();
context.rect(20, 20, 50, 50);
context.fillStyle = '#FF0000';
context.fill();
context.closePath();

// Draw a simple circle on the canvas
context.beginPath();
context.arc(240, 160, 50, 0, Math.PI * 2, false);
context.fillStyle = 'blue';
context.fill();
context.closePath();

// Draw a rectangle without filling it
context.beginPath();
context.rect(410, 250, 50, 50);
context.strokeStyle = 'rgba(0, 0, 255, 0.5)';
context.stroke();
context.closePath();
