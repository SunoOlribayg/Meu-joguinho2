var spermatosoide1,spermatozoide1Image, espermatosoide2,spermatozoide2Image, spermatosoide3,spermatozoide3Image;
var homen1,homen1Image, homen2,homen2Image, homen3,homen3Image;
var planoDeFundo1,planoDeFundo1Image, planoDeFundo2,planoDeFundo2Image, planoDeFundo3,planoDeFundo3Image;

function preload(){
    spermatosoide1Image = loadImage("sperma1.png","sperma2.png","sperma3.png");
    homen1Image = loadImage("primeirohomen1.png","primeirohomen2.png","primeirohomen3.png");
    planoDeFundo1Image = loadImage("planoDeFundo1.jpg");
    planoDeFundo2Image = loadImage("planoDeFundo2.jpg");
   // planoDeFundo3 = loadImage("planoDeFundo3.jpg");
}
function setup(){
    createCanvas(800,800)
  

}
function draw (){
    background(planoDeFundo1Image)
    
    //drawSprites();
}