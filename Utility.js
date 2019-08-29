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

function startGame(level) {
    if(level){
        canvas.focus();
        selectLevel(level);
    }else{
        selectLevel(currentLevel);
    }
    initGame();
}
function initGame() {
    isGameWin=false;
    isGameOver=false;
    isGameLose=false;
    score={
        currentScore:0,
        bestScore: 0,
        maxScore:wall.rows * wall.columns
    };
    initBestScore();
    wall.init();
    controlBar();
    drawGame();
}

/////////////PROCESS GAMEOVER //////////////////////

function processGameOver() {
    if (isGameWin && isGameOver) {
        drawGameOver("YOU ARE WIN");
        storeBestScore();
    } else if (isGameLose && isGameOver) {
        drawGameOver("YOU ARE LOSE");
        storeBestScore();
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

///////////////PROCESS APPLY LEVEL/////////////
function selectLevel(level) {
    currentLevel = level;
    switch (currentLevel) {
        case "easy":
            level = level1;
            break;
        case  "normal":
            level = level2;
            break;
        case  "difficult":
            level = level3;
            break;
    }

    applyLevel(level);

}

function applyLevel(level){
    bar=new Bar(canvas,level.barSpeed,level.barLong);
    wall= new Wall(canvas,level);
    ball1= new Ball(level.ballRadius,level.ballSpeedX,level.ballSpeedY,canvas);
}

/////////CONTROL BAR/////////////////

function controlBar(){
    document.addEventListener("keyup",function (event) {
        if(event.keyCode==37){
            bar.isMovingLeft=false;
        }else if(event.keyCode==39){
            bar.isMovingRight=false;
        }
        bar.stopBar();
    });
    document.addEventListener("keydown",function (event) {
        if(event.keyCode==37){
            bar.isMovingLeft=true;
        }else if(event.keyCode==39){
            bar.isMovingRight=true;
        }
        bar.moveBar();
    });
}