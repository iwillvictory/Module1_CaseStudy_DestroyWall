///////////////// PROCESS GENERAL FOR GAME /////////////////////
function drawGame() {
    if (!isGameOver) {

        ctx.clearRect(0, 0, canvasConfig.width, canvasConfig.height);

        ball1.draw();
        //ball2.draw();
        bar.draw();
        wall.draw();
        ball1.processBallBound();
       // ball2.processBallBound();

        bar.processBarBall(ball1);
      //  bar.processBarBall(ball2);

        ball1.updatePosition();
      //  ball2.updatePosition();

        wall.processBallWall(ball1);
       // wall.processBallWall(ball2);

        bar.updatePosition();

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
    bar=new Bar(canvasConfig);
    wall= new Wall(canvasConfig);
    ball1= new Ball(15,5,5);
  //  ball2= new Ball(15,6,6);
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

function processGameOver(){
    let continueGame;
    if(isGameWin){
        alert("Điểm :" + score.currentScore + "\n Điểm cao nhất của bạn: "+ score.bestScore);
        storeBestScore();
        continueGame=confirm("             YOU ARE WIN !!! \n        Bạn có muốn chơi lại Game này?");
    }else{
        alert("Điểm:" + score.currentScore + "\n Điểm cao nhất của bạn: "+ score.bestScore);
        storeBestScore();
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

