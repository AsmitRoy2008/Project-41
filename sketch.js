const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const BEGIN = 0;
const PLAY = 1;
const END = 2;
var gameState = 0;

var engine, world;
var bg_img, bg, iss_img, iss;
var craft_img1,craft_img2,craft_img3,craft_img4;
var craft;

function preload()
{
  iss_img = loadImage("iss.png");
  bg_img = loadImage("spacebg.jpg");
  craft_img1 = loadImage("spacecraft1.png");
  craft_img2 = loadImage("spacecraft2.png");
  craft_img3 = loadImage("spacecraft3.png");
  craft_img4 = loadImage("spacecraft4.png");

}
function setup() 
{
  createCanvas(1200,1200);
  
  

  bg = createSprite(700,400,1200,800);
  bg.addImage(bg_img);
  bg.scale = 2;

  
  
  iss = createSprite(600, 320, 50, 50);
  iss.addImage(iss_img);
  
 

  
}

function draw() 
{
  engine = Engine.create();
  world = engine.world;

  
   
  background("white");

 

    
    craft = createSprite(200,200);
    craft.visible = false;

    craft.velocityY = 0;
    craft.velocityX = 0;

    if(keyDown("space"))
  {
    gameState = PLAY;
    craft.visible = true;
    craft.addImage(craft_img1);
    craft.scale = 0.3;
    craft.x = 580;
    craft.y = 650;
  


  //craft.velocityY = 0;
  //craft.velocityX = 0;
  if (gameState === 1)

  if(keyIsDown(UP_ARROW))
  {
    craft.addImage(craft_img2);
    craft.scale = 0.3;
    craft.velocityY = craft.velocityY - 1;
  }
else 
{
  craft.addImage(craft_img1);
  craft.scale = 0.3;
}

  if(keyIsDown(LEFT_ARROW))
  {
    craft.addImage(craft_img4);
    craft.scale = 0.3;
    craft.velocityX = craft.velocityX - 1;
    craft.velocityY = craft.velocityY - 1;
  }

  if(keyIsDown(RIGHT_ARROW))
  {
    craft.addImage(craft_img3);
    craft.scale = 0.3;
    craft.velocityX = craft.velocityX + 1;
    craft.velocityY = craft.velocityY - 1;
  }


  if(craft.y <= (iss.y + 100) && craft.x <= (iss.x - 50))
  { 
    gameState = END;
  }
}


if (gameState === END)
{
  console.log("oh yeah yeah");
  done();
}
  








  
  
  drawSprites();
  
  
}

function done()
{  
  var ball = createSprite(200,200,50,50);
  textSize(25);
  fill("white");
  text("Docking Successful", 100,100);
}