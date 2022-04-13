var Player

function setup() {
  createCanvas(400,400);
  Player=createSprite(200,200,20,20);
  Player.shapeColor="blue"
}

function draw() 
{
  background(30);
  Player.velocityX=0
  Player.velocityY=0
  if(keyDown("LEFT_ARROW")){
    Player.velocityX=-5
    Player.velocityY=0
  }
  if(keyDown("RIGHT_ARROW")){
    Player.velocityX=5
    Player.velocityY=0
  }
  if(keyDown("UP_ARROW")){
    Player.velocityX=0
    Player.velocityY=-5
  }
  if(keyDown("DOWN_ARROW")){
    Player.velocityX=0
    Player.velocityY=5
  }
  drawSprites();
}




