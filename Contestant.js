class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  static getContestantInfo(){
  
  var contestantInfoRef = database.ref ('contestantCount')
  contestantInfoRef.on("value",(data)=>{
  
  allContestant = data.val()
  
  })
  
  
  }
  
   getCount(){
      var contestantInfoRef = database.ref('contestantCount');
      contestantInfoRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  }
  