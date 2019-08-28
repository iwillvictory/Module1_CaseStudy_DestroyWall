
//////////PROCESS BRICKS /////////////

function Brick(posX,posY,color){
    this.posX=posX;
    this.posY=posY;
    this.isDestroy=false;
    this.color=color;
}


function Wall(canvas){
    this.canvas=canvas;
    this.ctx=canvas.getContext("2d");
    this.bricks=[];
    this.beginX = canvas.width*0.022;
    this.beginY = canvas.width* 0.02;
    this.padding= canvas.width* 0.022;
    this.brickWidth= canvas.width* 0.1;
    this.brickHeight= canvas.width* 0.05;
    this.rows= 4;
    this.columns= 8;
    this.brickColors=['red','black'];

    this.init=function () {
        let brick=null;
        let posX, posY, color;
        for(let i=0; i<this.rows; i++){
            for(let j=0 ; j < this.columns; j++){
                posX=this.beginX + j*(this.brickWidth+ this.padding);
                posY=this.beginY + i*(this.brickHeight + this.padding);
                if(i%2===0){
                    color= j%2===0 ? this.brickColors[0] : this.brickColors[1];
                }else{
                    color= j%2===0 ? this.brickColors[1] : this.brickColors[0];
                }
                brick= new Brick(posX,posY,color);
                this.bricks.push(brick);
            }
        }
    };
    
    this.draw=function () {
        for(let brick of this.bricks){
            if(!brick.isDestroy){
                this.ctx.beginPath();
                this.ctx.fillStyle=brick.color;
                this.ctx.fillRect(brick.posX, brick.posY,this.brickWidth,this.brickHeight);
                this.ctx.closePath();
            }
        }
    };


    this.processBallWall=function (ball) {

        for(let brick of this.bricks){
            if(!brick.isDestroy){
                if(ball.posX >= brick.posX && ball.posX <= brick.posX + this.brickWidth &&
                    ball.posY + ball.radius >= brick.posY && ball.posY-ball.radius <= brick.posY + this.brickHeight )
                {
                    ball.dy=-ball.dy;
                    brick.isDestroy=true;
                    score.currentScore++;
                    if(score.currentScore >= score.maxScore){
                        isGameWin=true;
                        isGameOver=true;
                    }
                }
            }
        }
    }


}




