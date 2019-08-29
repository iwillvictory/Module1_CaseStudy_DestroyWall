
//////////PROCESS BRICKS /////////////

function Brick(posX,posY,color){
    this.posX=posX;
    this.posY=posY;
    this.isDestroy=false;
    this.color=color;
}

function Wall(canvas,level){
    this.ctx=canvas.getContext("2d");
    this.bricks=[];
    this.beginX = canvas.width*level.beginX;
    this.beginY = canvas.width* level.beginY;
    this.padding= canvas.width* level.padding;
    this.brickWidth= canvas.width* level.brickWidth;
    this.brickHeight= canvas.width* level.brickHeight;
    this.rows= level.rowNumber;
    this.columns= level.columnNumber;


    this.brickColors=['red ','black','blue','green','aqua'];

    this.init=function () {
        let brick=null;
        let posX, posY, color;
        for(let i=0; i<this.rows; i++){
            for(let j=0 ; j < this.columns; j++){
                posX=this.beginX + j*(this.brickWidth+ this.padding);
                posY=this.beginY + i*(this.brickHeight + this.padding);
                if(i%2===0){
                    switch (j%5) {
                        case 0: color=this.brickColors[0]; break;
                        case 1: color=this.brickColors[1]; break;
                        case 2: color=this.brickColors[2]; break;
                        case 3: color=this.brickColors[3]; break;
                        case 4: color=this.brickColors[4]; break;
                    }
                }else{
                    switch (j%5) {
                        case 0: color=this.brickColors[2]; break;
                        case 1: color=this.brickColors[3]; break;
                        case 2: color=this.brickColors[4]; break;
                        case 3: color=this.brickColors[0]; break;
                        case 4: color=this.brickColors[1]; break;
                    }
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




