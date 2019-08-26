

// Để tránh đường thẳng vẽ từ điểm trên hình cũ sang hình mới dùng hàm moveTo()
//cặp hàm beginPath() và closePath() để đóng gọi các các thông tin thuộc tính cho 1 hình riêng biệt
// sự kiện keypress không hỗ trợ các phím mà có ký tự điều khiển, các phím lên xuống. Chỉ có thể bắt các phím Graphic-Alpha Numberic
// Sự kiên keyup, keydown có thể bắt được tất cả sự kiện bàn phím.
////////////PROCESS GENERAL  ////////////

let canvas= document.getElementById("canvasGame");
let ctx = canvas.getContext("2d");

let canvasConfig={
    width: canvas.width,
    height: canvas.height
};

let bar=new Bar(canvasConfig);
let wall= new Wall(canvasConfig);
let ball1= new Ball(15,10,10);
//let ball2= new Ball(15,3,6);
let score={
    currentScore:0,
    bestScore: 0,
    maxScore:wall.rows * wall.columns
};
let isGameWin=false;
let isGameOver=false;
initGame();
