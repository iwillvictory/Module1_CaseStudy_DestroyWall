///////////////////PROCESS BALL ///////////////////

function Ball(radius,dx,dy,canvas){
    this.canvas=canvas;
    this.ctx=canvas.getContext("2d");
    this.posX=canvas.width/2;
    this.posY=canvas.height-bar.height- 15;
    this.radius=radius;
    this.gradient= {r1:3,r2:15};
    this.orderGradient=[0,0.5,1];
    this.colorGradient=['red','yellow','blue'];
    this.dx=dx;
    this.dy=dy;
    
    this.draw=function () {
        this.ctx.beginPath();
        let grad=this.ctx.createRadialGradient(this.posX,this.posY,this.gradient.r1,this.posX,this.posY,this.gradient.r2);
        let orderTemp=this.orderGradient.red;
        this.orderGradient.red=this.orderGradient.blue;
        this.orderGradient.blue=orderTemp;
        grad.addColorStop(this.orderGradient[0],this.colorGradient[0]);
        grad.addColorStop(this.orderGradient[1],this.colorGradient[1]);
        grad.addColorStop(this.orderGradient[2],this.colorGradient[2]);
        this.ctx.fillStyle=grad;
        this.ctx.arc(this.posX,this.posY,this.radius,0,2*Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    };
    
    this.processBallBound=function () {
        let isBallMeetLeftRightBound=this.posX > this.canvas.width-this.radius || this.posX < this.radius;
        let isBallMeetTopBound=this.posY < this.radius;
        let isBallMeetBottomBound=this.posY > this.canvas.height-this.radius;
        if(isBallMeetLeftRightBound){
            this.dx=-this.dx;
        }
        if( isBallMeetTopBound){
            this.dy=-this.dy;
        }
        if(isBallMeetBottomBound){
            isGameOver=true;
            isGameLose=true;
        }
    };
    
    
    this.updatePosition=function () {
        this.posX+=this.dx;
        this.posY+=this.dy;
    };
    
    this.resetPosition=function () {
        this.posX=this.canvas.width/2;
        this.posY=this.canvas.height-bar.height- 15;
    }
}
