//////////COMPANY:  CODEGYM
/////////CLASS  : C0719G1
///////// AUTHOR: NGUYỄN BÁ QUỲNH
///////// DATE: 28-08-2019


//localStorage.setItem("bestScore", '0');

let canvas= document.getElementById("canvasGame");
let ctx = canvas.getContext("2d");
let levelElement=document.getElementById("selectLevel");

let level1=new Level(0.022,0.022,0.022, 0.1,0.05,4,8,
    15,5,5,200,10);
let level2=new Level(0.012,0.012,0.012, 0.07,0.03,6,12,
    10,7,7,150,15);
let level3=new Level(0.011,0.011,0.012, 0.05,0.02,8,16,
    7,10,10,150,20);


let isGameWin=false;
let isGameOver=false;
let isGameLose=false;
let bar,wall,ball1,score;
let currentLevel="easy";

startGame();
