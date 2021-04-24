class Question {
  constructor() {
    this.input = createInput ('Enter option number')
    this.button = createButton('Enter')
    
    this.questions= createElement('h2')
    this.option1= createElement('h2')
    this.option2= createElement('h2')
    this.option3= createElement('h2')
    this.option4= createElement('h2')
  }
  hideDetails (){
 this.greeting.hide()
 this.button.hide()
this.input.hide()
 
  }

  display(){
  var title = createElement('h1')
  title.html("My Quiz Game")
  title.position(280,0)

 
  this.questions.html("What is the national animal of India?")
  this.questions.position(150,80)


  this.option1.html("1: Horse")
  this.option1.position(150,130)


  this.option2.html("2: Stag")
  this.option2.position(150,180)


  this.option3.html("3: Tiger")
  this.option3.position(150,230)

  this.option4.html("4: Lion")
  this.option4.position(150,280)

  this.input.position(51,415)
  this.button.position(240,415)

  this.button.mousePressed(()=>{
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    contestant.name = this.input1.value();
    contestant.answer = this.input2.value();
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);

  })
}
}
