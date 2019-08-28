/////////////////////////PROCESS BAR //////////////////////

function Bar(canvas){
    this.canvas=canvas;
    this.ctx=canvas.getContext("2d");
    this.width= 150;
    this.height= 15;
    this.posX = canvas.width/2 -75;
    this.posY = canvas.height-15;
    this.speed=15;
    this.maxSpeed=30;
    this.minSpeed=10;
    this.isMovingLeft=false;
    this.isMovingRight=false;

    this.draw= function(){
        this.ctx.beginPath();
        let grad= this.ctx.createLinearGradient(this.posX, this.posY, this.posX+ this.width,this.posY);
        grad.addColorStop(0,"blue");
        grad.addColorStop(0.5, "yellow");
        grad.addColorStop(1,"blue");
        this.ctx.fillStyle=grad;
        this.ctx.fillRect(this.posX,this.posY,this.width,this.height);
        this.ctx.closePath();
    };

    this.updatePosition= function(){
        if(this.isMovingLeft && this.posX > 0){
            this.posX -=this.speed;
        }else if(this.isMovingRight && this.posX < this.canvas.width - this.width){
            this.posX +=this.speed;
        }
    };

    this.stopBar=function(event){
        if(event.keyCode==37){
            this.isMovingLeft=false;


        }else if(event.keyCode==39){
            this.isMovingRight=false;
        }
        this.speed=this.minSpeed;
    };

    this.moveBar=function(event) {

        if(event.keyCode==37){
            this.isMovingLeft=true;
        }else if(event.keyCode==39){
            this.isMovingRight=true;
        }
        if(this.speed <this.maxSpeed){
            this.speed+=2;
        }
    };

    this.resetPosition=function(){
        this.posX=this.canvas.width/2 -75;
        this.posY=this.canvas.height-15;
    };

    this.processBarBall=function (ball) {
        let isBallMeetBar=ball.posX+ball.radius > this.posX && ball.posX-ball.radius < this.posX+ this.width &&
                                            ball.posY+ball.radius >= this.canvas.height- this.height;
        if(isBallMeetBar){
            ball.dy=-ball.dy;
            if(this.isMovingLeft && ball.dx > 0){
                ball.dx=-ball.dx;
            }else if( this.isMovingRight && ball.dx < 0){
                ball.dx=-ball.dx;
            }

        }
    };

}



