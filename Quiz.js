class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
     
        question = new Question()
        question.display();
      }
    }
  
    play(){
      questions.hideDetails();
      textSize(30);
      text("Game Start", 120, 100)
     Contestant.getContestantInfo();
 
  
      
    }
  }