
// Để tránh đường thẳng vẽ từ điểm trên hình cũ sang hình mới dùng hàm moveTo()
//cặp hàm beginPath() và closePath() để đóng gọi các các thông tin thuộc tính cho 1 hình riêng biệt
// sự kiện keypress không hỗ trợ các phím mà có ký tự điều khiển, các phím lên xuống. Chỉ có thể bắt các phím Graphic-Alpha Numberic
// Sự kiên keyup, keydown có thể bắt được tất cả sự kiện bàn phím.

////////////PROCESS GENERAL  ////////////

//localStorage.setItem("bestScore", '0');

let canvas= document.getElementById("canvasGame");
let ctx = canvas.getContext("2d");

let level1=new Level(0.022,0.022,0.022, 0.1,0.05,4,8,
    15,5,5,300,10);
let level2=new Level(0.012,0.012,0.012, 0.07,0.03,6,12,
    10,7,7,300,20);
let level3=new Level(0.011,0.011,0.012, 0.05,0.02,8,16,
    7,10,10,1000,25);


let isGameWin=false;
let isGameOver=false;
let isGameLose=false;
let bar,wall,ball1,score;
let currentLevel="easy";

startGame();
