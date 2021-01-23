var soccer;
var pingPong;
var gameState=null;
var player;
var fieldImage;
var soccerPlayerScore;
var soccerComScore;
var home;
var goal1;
var goal2;
var goal3;
function preload(){
fieldImage=loadImage("usefield.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
 soccer= createButton("Soccer")

  soccer.position(width/1.2-width/2,height/2-60)

  home= createButton("Home")
  home.position(width/1.8-width/2,height/2-400)


  player=createSprite(width/1-width/2,height/2-340,170,15)
  player.visible=false;

  goal1=createSprite(width/1.2-width/2,height/2-440,10,60)
  goal1.visible=false

  goal2=createSprite(width/.858-width/2,height/2-440,10,60)
  goal2.visible=false

  goal3=createSprite(width/1-width/2,height/2-400,600,15)
goal3.visible=false
  soccerPlayerScore=0
  soccerComScore=0
}

function draw() {
  background("white");

// presses
if(gameState==="home"){
background("white")
player.visible=false
soccer.show()
}
  soccer.mousePressed(()=>{
gameState="play"
  })

  home.mousePressed(()=>{
gameState="home"
      })



  //cricket play.
  if(gameState==="play"){
   
    background(fieldImage)
player.visible=true;


soccer.hide();
fill("black")
textSize(50)
text(""+soccerPlayerScore,width/1.6-width/2,height/2+20)

text(""+soccerComScore,width/1.6-width/2,height/2-60)
  }
  //come back to home

 drawSprites();
    
}

  