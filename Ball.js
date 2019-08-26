///////////////////PROCESS BALL ///////////////////

function Ball(radius,dx,dy){
    this.posX=canvasConfig.width/2;
    this.posY=canvasConfig.height-bar.height- 15;
    this.radius=radius;
    this.gradient= {r1:3,r2:15};
    this.orderGradient=[0,0.5,1];
    this.colorGradient=['red','yellow','blue'];
    this.dx=dx;
    this.dy=dy;
    
    this.draw=function () {
        ctx.beginPath();
        let grad=ctx.createRadialGradient(this.posX,this.posY,this.gradient.r1,this.posX,this.posY,this.gradient.r2);
        let orderTemp=this.orderGradient.red;
        this.orderGradient.red=this.orderGradient.blue;
        this.orderGradient.blue=orderTemp;
        grad.addColorStop(this.orderGradient[0],this.colorGradient[0]);
        grad.addColorStop(this.orderGradient[1],this.colorGradient[1]);
        grad.addColorStop(this.orderGradient[2],this.colorGradient[2]);
        ctx.fillStyle=grad;
        ctx.arc(this.posX,this.posY,this.radius,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    };
    
    this.processBallBound=function () {
        if(this.posX > canvasConfig.width-this.radius || this.posX < this.radius){
            this.dx=-this.dx;
        }
        if( this.posY < this.radius){
            this.dy=-this.dy;
        }
        if(this.posY > canvasConfig.height-this.radius){
            isGameOver=true;
        }
    };
    
    
    this.updatePosition=function () {
        this.posX+=this.dx;
        this.posY+=this.dy;
    };
    
    this.resetPosition=function () {
        this.posX=canvasConfig.width/2;
        this.posY=canvasConfig.height-bar.height- 15;
    }
}
