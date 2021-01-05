var plant;
var plantImage1,plantImage2,plantImage3,plantImage4;
var sun,sunImage;
var obstacle,obstacleImage, obstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var player1,player1Animation;
var player1,player2Animation;
var alien,alienAnimation;
var ground1,groundImage,ground2,ground3;
var levelsGroup;

var score;

var coin,coinImage;

var gameState = "play";

function preload(){
  sunImage = loadImage("sun.png");
  plantImage1 = loadImage("s.jpg");
  plantImage2 = loadImage("s1.jpg");
  plantImage3 = loadImage("s2.jpg");
  plantImage4 = loadImage("s3.jpg");

  obstacleImage = loadImage("levelup.png");

  player1Animation = loadAnimation("player1.png","player2.png");
  player2Animation = loadAnimation("player3.png","player4.png");

  alienAnimation = loadAnimation("alien1.png","alien2.png");

  groundImage = loadImage("ground.png");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");

  coinImage = loadImage("coins.png");
}
function setup() {
  createCanvas(1400,650);
  plant=createSprite(100,400,20,20)
  plant.addImage("s.jpg",plantImage1);

  sun = createSprite(200,20,20,20);
  sun.addImage("sun",sunImage)
  sun.scale=0.1;

  player1 = createSprite(750,180,20,20);
  player1.addAnimation("player1",player1Animation);
  player1.scale=0.5;
  
  player2 = createSprite(750, 380, 20, 20);
  player2.addAnimation("player1", player2Animation);
  player2.scale = 0.5;
  
  ground1 = createSprite(1055,225,20,20);
  ground1.addImage("ground1", groundImage);
  ground1.scale= 0.28 ;

  ground2 = createSprite(1055, 425, 20, 20);
  ground2.addImage("ground1", groundImage);
  ground2.scale = 0.28;

  ground3 = createSprite(1055, 590, 20, 20);
  ground3.addImage("ground1", groundImage);
  ground3.scale = 0.28;
  
  alien = createSprite(750,550,20,20);
  alien.addAnimation("aeghi",alienAnimation)
  alien.scale=0.5;



  obstaclesGroup = createGroup();
  levelsGroup = createGroup();

  score = 0;

}

function draw() {
  background(255, 255, 255);
  text("Score: " + score, 500, 50);
  text("First Level",750,50);
  text("Second Level", 750, 280);
  text("Third Level", 750, 480);
  line(700,0,700,600); 
  line(700, 400, 1400, 400);  
  line(700, 580, 1400, 580);  

  if(player1.visible=true){
     level1();
  }
  if (alien.visible = true) {
    level2();
  }
  if (player2.visible = true) {
    level3();
  }
  if (keyDown("space")) {
    player1.velocityY = -12;
  }
   player1.velocityY = player1.velocityY + 0.8;
   player1.collide(ground1);
  
  levelup();
  drawSprites();
}


function level1(){
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(1400, 185, 10, 40);

    obstacle.velocityX = -6;

    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1: obstacle.addImage(obstacle1);
        break;
      case 2: obstacle.addImage(obstacle2);
        break;
      case 3: obstacle.addImage(obstacle3);
        break;
      case 4: obstacle.addImage(obstacle4);
        break;
      case 5: obstacle.addImage(obstacle5);
        break;
      case 6: obstacle.addImage(obstacle6);
        break;
      default: break;
    }
           
    obstacle.scale = 0.5;
    obstacle.lifetime = 118;
    obstaclesGroup.add(obstacle);
  }
  if (frameCount % 200 === 0) {
    coin = createSprite(1400, 115, 20, 20);

    coin.velocityX = -7.5;
    coin.addImage(coinImage);
    coin.scale = 0.3;
    coin.lifetime = 95;
  }
  //player2.visible=false;
  //alien.visible = false;
}
function level2(){
  if (frameCount % 45 === 0) {
    var obstacle = createSprite(1400, 385, 10, 40);

    obstacle.velocityX = -6;


    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1: obstacle.addImage(obstacle1);
        break;
      case 2: obstacle.addImage(obstacle2);
        break;
      case 3: obstacle.addImage(obstacle3);
        break;
      case 4: obstacle.addImage(obstacle4);
        break;
      case 5: obstacle.addImage(obstacle5);
        break;
      case 6: obstacle.addImage(obstacle6);
        break;
      default: break;
    }
          
    obstacle.scale = 0.5;
    obstacle.lifetime = 118;
    obstaclesGroup.add(obstacle);
  }
  if (frameCount % 200 === 0) {
    coin = createSprite(1400, 315, 20, 20);

    coin.velocityX = -7.5;
    coin.addImage(coinImage);
    coin.scale = 0.3;
    coin.lifetime = 95;
  }
  //player1.visible=false;
 // player2.visible=false;
}
function level3() {
  if (frameCount % 30 === 0) {
    var obstacle = createSprite(1400, 555, 10, 40);

    obstacle.velocityX = -6;

    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1: obstacle.addImage(obstacle1);
        break;
      case 2: obstacle.addImage(obstacle2);
        break;
      case 3: obstacle.addImage(obstacle3);
        break;
      case 4: obstacle.addImage(obstacle4);
        break;
      case 5: obstacle.addImage(obstacle5);
        break;
      case 6: obstacle.addImage(obstacle6);
        break;
      default: break;
    }         
    obstacle.scale = 0.5;
    obstacle.lifetime = 118;
    obstaclesGroup.add(obstacle);
  }
  if (frameCount % 200 === 0) {
    coin = createSprite(1400, 495, 20, 20);

    coin.velocityX = -7.5;
    coin.addImage(coinImage);
    coin.scale = 0.3;
    coin.lifetime = 95;
  }
  //player1.visible = false;
  //alien.visible = false;
}
function levelup(){

  if (frameCount % 60 === 0) {
  var level = createSprite(1400, 555, 10, 40);

  level.velocityX = -6;
  level.addImage(obstacleImage);
  
           
  level.scale = 0.5;
  level.lifetime = 118;

  levelsGroup.add(level);
}
}

