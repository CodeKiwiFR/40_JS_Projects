/* ************************************************** */
/* Class definitions */
/* ************************************************** */

/* ************************************************** */
/* Function definitions */
/* ************************************************** */
function drawBall() {
    context.beginPath();
    context.arc(x, y, circleRadius, 0, Math.PI * 2);
    context.fillStyle = circleColor;
    context.fill();
    context.closePath();
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    if (x + circleRadius > canvas.width || x - circleRadius < 0) {
        dx *= -1;
    }
    y += dy;
    if (y + circleRadius > canvas.height || y - circleRadius < 0) {
        dy *= -1;
    }
}

/* ************************************************** */
/* Variable definitions */
/* ************************************************** */
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const circleRadius = 20;
const loopInterval = 10;
const circleColor = '#11BBCC';
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = 2;

/* ************************************************** */
/* Main program */
/* ************************************************** */
setInterval(draw, loopInterval);
