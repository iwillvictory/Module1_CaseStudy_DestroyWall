///////////////// PROCESS GENERAL FOR GAME /////////////////////
let start = 0;
function drawGame(timestamp){

    if (!start) start = timestamp;
    let progress = timestamp - start;
    if(progress >40){
        if(!isGameOver){
            ctx.clearRect(0,0,canvasConfig.width,canvasConfig.height);

            ball1.draw();
            //   ball2.draw();

            bar.draw();
            wall.draw();

            ball1.processBallBound();
            //   ball2.processBallBound();

            bar.processBarBall(ball1);
            //  bar.processBarBall(ball2);


            ball1.updatePosition();
            //   ball2.updatePosition();

            wall.processBallWall(ball1);
            //  wall.processBallWall(ball2);

            bar.updatePosition();

            requestAnimationFrame(drawGame);
        }else{
            processGameOver();
        }

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
        localStorage.setItem("bestScore",score.bestScore.toString());
    }
}

function initGame() {
    isGameOver=false;
    initBestScore();
    document.addEventListener("keyup",stopBar);
    document.addEventListener("keydown",moveBar);
    score.currentScore=0;
    wall.init();
    bar.resetPosition();
    ball1.resetPosition();
   // ball2.resetPosition();
   // setInterval(drawGame,30);
     drawGame();
}

/////////////PROCESS GAMEOVER //////////////////////

function processGameOver(){
    let continueGame;
    if(isGameWin){
        storeBestScore();
        alert("Điểm :" + score.currentScore + "\n Điểm cao nhất của bạn: "+ score.bestScore);
        continueGame=confirm("             YOU ARE WIN !!! \n        Bạn có muốn chơi lại Game này?");
    }else{
        storeBestScore();
        alert("Điểm:" + score.currentScore + "\n Điểm cao nhất của bạn: "+ score.bestScore);
        continueGame=confirm("             YOU ARE LOSE !!! \n        Bạn có muốn chơi lại Game này?");
    }
    if(continueGame){
        initGame();
    }else{
        drawGameOver();
    }
}
function drawGameOver() {
    ctx.beginPath();
    ctx.font="40px red";
    ctx.strokeRect(canvasConfig.width/2-80,canvasConfig.height/2-70,200,100);
    ctx.fillText("GAME OVER",canvasConfig.width/2-50,canvasConfig.height/2 -15,150);
    ctx.closePath();
}

