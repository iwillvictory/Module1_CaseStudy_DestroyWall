/////////////////////////PROCESS BAR //////////////////////

function Bar(canvas,speed,width){
    this.canvas=canvas;
    this.ctx=canvas.getContext("2d");
    this.width= width;
    this.height= 15;
    this.posX = canvas.width/2 -75;
    this.posY = canvas.height-18;
    this.speed=speed;
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

    this.stopBar=function(){
        this.speed=this.minSpeed;
    };

    this.moveBar=function() {

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
        let isBarOppositeDirectionBall1=this.isMovingLeft && ball.dx > 0;
        let isBarOppositeDirectionBall2=this.isMovingRight && ball.dx < 0;
        if(isBallMeetBar){
            playSound();
            ball.dy=-ball.dy;
            if(isBarOppositeDirectionBall1){
                ball.dx=-ball.dx;
            }else if( isBarOppositeDirectionBall2){
                ball.dx=-ball.dx;
            }

        }
    };

}



