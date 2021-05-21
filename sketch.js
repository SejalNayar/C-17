
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground,invisibleGround
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   background(220);
  createCanvas(400,400);
monkey = createSprite (50,160,20,50) ;
 monkey.addAnimation("monkeyImage",monkey_running);
  monkey.scale=  0.1;
  ground = createSprite (300,350,600,20);
  ground.velocityX = -4;
  obstacle = createSprite(400,165,10,40);
 foodGroup = new Group();
  obstacleGroup = new Group();
  
     } 
 
  



 function draw() {
  background(180);
  if (ground.x < 150){
    ground.x = ground.width/2;
  } 
if(keyDown("space")){
  monkey.velocityY = -12;
}
monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  spawnfood();
  spawnObstacles();
   stroke("black");
  fill("black");
  textSize(20);
  survivalTime =Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,50,100);
   
    
  drawSprites();
}

function spawnfood(){
 if (frameCount % 80 === 0){
   banana = createSprite(400,165,10,40);
   banana.velocityX = -6;
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.lifetime = 66;
   foodGroup.add(banana);
}
  
 }
function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
     obstacle = createSprite(301,325,40,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 134;
    
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = obstacle.depth + 1;
    
    //adding cloud to the group
   obstacleGroup.add(obstacle);
  }
  
}

