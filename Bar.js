/////////////////////////PROCESS BAR //////////////////////

function Bar(canvasConfig){
    this.canvasConfig=canvasConfig;
    this.width= 150;
    this.height= 15;
    this.posX = canvasConfig.width/2 -75;
    this.posY = canvasConfig.height-15;
    this.speed=15;
    this.maxSpeed=30;
    this.minSpeed=10;
    this.isMovingLeft=false;
    this.isMovingRight=false;

    this.draw= function(){
        ctx.beginPath();
        let grad= ctx.createLinearGradient(this.posX, this.posY, this.posX+ this.width,this.posY);
        grad.addColorStop(0,"blue");
        grad.addColorStop(0.5, "yellow");
        grad.addColorStop(1,"blue");
        ctx.fillStyle=grad;
        ctx.fillRect(this.posX,this.posY,this.width,this.height);
        ctx.closePath();
    };

    this.updatePosition= function(){
        if(this.isMovingLeft && this.posX > 0){
            this.posX -=this.speed;
        }else if(this.isMovingRight && this.posX < this.canvasConfig.width - this.width){
            this.posX +=this.speed;
        }
    };

    this.stopBar=function(event){
        console.log('stopBar', event, this);
        if(event.keyCode==37){
            this.isMovingLeft=false;


        }else if(event.keyCode==39){
            this.isMovingRight=false;
        }
        this.speed=this.minSpeed;
    };

    this.moveBar=function(event) {
        console.log('moveBar', event, this);

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
        this.posX=this.canvasConfig.width/2 -75;
        this.posY=this.canvasConfig.height-15;
    };

    this.processBarBall=function (ball) {
        if(ball.posX+ball.radius > this.posX && ball.posX-ball.radius < this.posX+ this.width &&
            ball.posY+ball.radius >= this.canvasConfig.height- this.height){
            ball.dy=-ball.dy;
        }
    };

}


/*
function stopBar(event){
        bar.stopBar(event);
    }
    function moveBar(event) {
       bar.moveBar(event);
    }
*/
