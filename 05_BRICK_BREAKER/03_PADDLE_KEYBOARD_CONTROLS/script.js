/* ************************************************** */
/* Class definitions */
/* ************************************************** */

/* ************************************************** */
/* Function definitions */
/* ************************************************** */
function keyDownHandler(event) {
    if (event.key === 'Right' || event.key === 'ArrowRight') {
        rightPressed = true;
    } else if (event.key === 'Left' || event.key === 'ArrowLeft') {
        leftPressed = true;
    }
}

function keyUpHandler(event) {
    if (event.key === 'Right' || event.key === 'ArrowRight') {
        rightPressed = false;
    } else if (event.key === 'Left' || event.key === 'ArrowLeft') {
        leftPressed = false;
    }
}

function drawBall() {
    context.beginPath();
    context.arc(x, y, circleRadius, 0, Math.PI * 2);
    context.fillStyle = circleColor;
    context.fill();
    context.closePath();
}

function moveBall() {
    x += dx;
    if (x + circleRadius > canvas.width || x - circleRadius < 0) {
        dx *= -1;
    }
    y += dy;
    if (y + circleRadius > canvas.height || y - circleRadius < 0) {
        dy *= -1;
    }
}

function drawPaddle() {
    context.beginPath();
    context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    context.fillStyle = paddleColor;
    context.fill();
    context.closePath();
}

function movePaddle() {
    if (rightPressed) {
        paddleX = Math.min(paddleX + paddleDX, canvas.width - paddleWidth);
    } else if (leftPressed) {
        paddleX = Math.max(paddleX - paddleDX, 0);
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    moveBall();
    drawPaddle();
    movePaddle();
}

/* ************************************************** */
/* Variable definitions */
/* ************************************************** */
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Circle variables
const circleRadius = 10;
const loopInterval = 10;
const circleColor = '#000077';
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = 2;

// Paddle variables
const paddleHeight = 10;
const paddleWidth = 80;
const paddleColor = '#4444FF';
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleDX = 5;
let rightPressed = false;
let leftPressed = false;

/* ************************************************** */
/* Main program */
/* ************************************************** */

// Game Loop
setInterval(draw, loopInterval);

// Keyboard buttons listeners
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
