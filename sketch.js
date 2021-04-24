var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var database;
var  contestantCount, database, quiz, question, contestant
var allPlayers;


function setup(){
  canvas = createCanvas(800,450);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){

  //console.log("X: "+mouseX)
  //console.log("Y: "+mouseY)
  if (contestantCount===4){
    Quiz.update(1)
}

 if (gameState===1){
  
  clear();
  Quiz.play();
 }
 }
