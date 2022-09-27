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

/**
 * Moves the ball position
 * Handles the ball collisions
 */
function moveBall() {
    // Paddle left/right and left/right wall collisions management
    if (
        (x + dx + circleRadius > paddleX && x + dx + circleRadius <= paddleX + Math.abs(dx) && y + dy + circleRadius > paddleY) ||
        (x + dx - circleRadius < paddleX + paddleWidth && x + dx - circleRadius >= paddleX + paddleWidth - Math.abs(dx) && y + dy + circleRadius > paddleY) ||
        x + dx + circleRadius > canvas.width ||
        x + dx - circleRadius < 0
    ) {
        dx *= -1;
    }

    // Paddle top and top wall collisions management
    if ((y + dy + circleRadius > paddleY && x + dx >= paddleX && x + dx < paddleX + paddleWidth) || y + dy - circleRadius < 0) {
        dy *= -1;
    }

    // Bottom wall collisions management (game over)
    if (!isCircleInPaddle && y + dy + circleRadius > canvas.height) {
        // clearInterval(gameLoopInterval);
        // gameOverContainer.classList.add('lost');
        dy *= -1;
    }

    x += dx;
    y += dy;
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
        if (y + circleRadius > paddleY && paddleX + paddleWidth + paddleDX > x - circleRadius && paddleX + paddleWidth + paddleDX - circleRadius < x - circleRadius) {
            dx = Math.abs(dx);
            x = paddleX + paddleWidth + paddleDX + circleRadius;
        }
        paddleX = Math.min(paddleX + paddleDX, canvas.width - paddleWidth);
    } else if (leftPressed) {
        if (y + circleRadius > paddleY && paddleX - paddleDX <= circleRadius && x < paddleX - paddleDX) {
            paddleX = 2 * circleRadius;
            x = circleRadius;
            dx = Math.abs(dx);
        } else if (y + circleRadius > paddleY && paddleX - paddleDX < x + circleRadius && paddleX - paddleDX + circleRadius >= x + circleRadius) {
            dx = -1 * Math.abs(dx);
            x = paddleX - paddleDX - circleRadius;
            paddleX = Math.max(paddleX - paddleDX, 0);
        } else {
            paddleX = Math.max(paddleX - paddleDX, 0);
        }
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    moveBall();
    drawBall();
    movePaddle();
    drawPaddle();
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
// let x = canvas.width - 100;
let y = canvas.height / 2;
let dx = 2;
let dy = 2;
let isCircleInPaddle = false;

// Paddle variables
const paddleHeight = 100;
const paddleWidth = 80;
const paddleColor = '#4444FF';
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleDX = 5;
let paddleY = canvas.height - paddleHeight;
let rightPressed = false;
let leftPressed = false;

// Game Over pannel
const gameOverContainer = document.getElementById('gameOverContainer');

/* ************************************************** */
/* Main program */
/* ************************************************** */

// Game Loop
const gameLoopInterval = setInterval(draw, loopInterval);

// Keyboard buttons listeners
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
