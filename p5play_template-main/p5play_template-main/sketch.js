var bgImage,ground
var spaceCraft,spaceCraftImg

function preload(){
bgImage = loadImage("background.jpg")
spaceCraftImg = loadImage("spacecraft.png")
}

function setup() {
  createCanvas(1600,800);
  spaceCraft = createSprite(400,400,60,60)
  spaceCraft.addImage("spacecraft",spaceCraftImg)
  spaceCraft.scale = 0.2

  ground = createSprite(1600,0,1600,1600)
  ground.addImage("background",bgImage)
  ground.scale = 1.9
}

function draw() 
{
  background(bgImage);
  ground.velocityX = -3
  drawSprites();
}




