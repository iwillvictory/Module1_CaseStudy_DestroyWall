///////////////// PROCESS GENERAL FOR GAME /////////////////////
function drawGame() {
    if (!isGameOver) {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ball1.draw();
        bar.draw();
        wall.draw();

        ball1.processBallBound();
        bar.processBarBall(ball1);

        ball1.updatePosition();
        wall.processBallWall(ball1);
        bar.updatePosition();

        showScore("score",score.currentScore);
        showScore("bestScore",score.bestScore);

        requestAnimationFrame(drawGame);

    } else {
        processGameOver();
    }
}

function initBestScore() {
    if (localStorage.getItem("bestScore")) {
        score.bestScore = parseInt(localStorage.getItem("bestScore"));
    } else {
        localStorage.setItem("bestScore", '0');
    }
}

function storeBestScore() {
    if(score.currentScore > score.bestScore){
        score.bestScore=score.currentScore;
        score.currentScore=0;
        localStorage.setItem("bestScore",score.bestScore.toString());
    }
}

function initGame() {
    isGameOver=false;
    initBestScore();
    score.currentScore=0;
    bar=new Bar(canvas);
    wall= new Wall(canvas);
    ball1= new Ball(15,5,5,canvas);
    wall.init();
    document.addEventListener("keyup",function (event) {
        bar.stopBar(event);
    });
    document.addEventListener("keydown",function (event) {
        bar.moveBar(event);
    });
    drawGame();
}

/////////////PROCESS GAMEOVER //////////////////////

function processGameOver() {
    if (isGameWin && isGameOver) {
        drawGameOver("YOU ARE WIN");
        storeBestScore();
    } else if (isGameLose && isGameOver) {
        drawGameOver("YOU ARE LOSE");
    } else {
        drawGameOver("GAME OVER");
        storeBestScore();
    }
}
function drawGameOver(message) {
    ctx.beginPath();
    ctx.font="40px red";
    ctx.strokeRect(canvas.width/2-80,canvas.height/2-70,200,100);
    ctx.fillText(message,canvas.width/2-50,canvas.height/2 -15,150);
    ctx.closePath();
}

function showScore(elementId,score) {
    document.getElementById(elementId).innerText=score;
}
function setGameOver() {
    isGameOver=true;
}
