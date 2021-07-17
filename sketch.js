var END =0;
var PLAY =1;
var gameState = PLAY;

var boder1;
var boder2;
var boder3;
var boder4; 

var playership;
var playershipImage;

var bg;

var enemyplane1;
var enemyplane2;
var enemyplane3;
var enemyplane4;
var enemyplane5;

var enemy1Group;
var enemy2Group;
var enemy3Group;
var enemy4Group;
var enemy5Group;

var asteroidImage;

var over;
var overImage;

function preload(){

  bg = loadImage("Background.jpg");
  playershipImage = loadImage("PlayerShipBlue.png")
  enemyplane1 = loadImage("EnemyBlack1.png");
  enemyplane2 = loadImage("EnemyBlue1.png");
  enemyplane3 = loadImage("EnemyGreen1.png");
  enemyplane4 = loadImage("EnemyRed1.png");
  enemyplane5 = loadImage("EnemyUFOBlue.png");
  laserImage = loadImage("PlayerLaserGreen.png");
  asteroid1Image = loadImage("MeteorBrownBig1.png");
  asteroid2Image = loadImage("MeteorBrownTiny1.png");
  weponplayersound = loadSound("weapon_player.wav");
  explosionenemysound = loadSound("explosion_enemy.wav");
  explosionasteroidsound = loadSound("explosion_asteroid.wav");
  explosionplayersound = loadSound("explosion_player.wav"); 
  overImage = loadImage("GameOver.png");
}

function setup() {
  createCanvas(1100,600);

  playership = createSprite(550, 535, 20, 20);
  playership.addImage("player",playershipImage);
  playership.scale = 0.7;

  boder1 = createSprite(1100,300,20,600);
  boder1.shapeColor=color("LightBlue");

  boder2 = createSprite(0, 300, 20, 600);
  boder2.shapeColor=color("LightBlue");

  boder3 = createSprite(550, 0, 1080, 20);
  boder3.shapeColor=color("LightBlue");

  boder4 = createSprite(550, 600, 1080, 20);
  boder4.shapeColor=color("LightBlue");

  over = createSprite(550,300,20,20);
  over.addImage("game",overImage);
  over.visible = false;

  score = 0;
  enemy1Group = new Group();
  enemy2Group = new Group();
  enemy3Group = new Group();
  enemy4Group = new Group();
  enemy5Group = new Group();
  laserGroup = new Group();
  asteroid1Group = new Group();
  asteroid2Group = new Group();  


  
  
}

function draw() {
  background(bg);

  

 if(gameState===PLAY){

  playership.x = World.mouseX
   playership.y = World.mouseY


   if (keyDown("space")) {
     laser(); 
     weponplayersound.play( )   
    }
  
   if (laserGroup.isTouching(enemy1Group)){
     enemy1Group.destroyEach();
     laserGroup.destroyEach(); 
     explosionenemysound.play( )
     score=score+1;   
   }
   if (laserGroup.isTouching(enemy2Group)){
     enemy2Group.destroyEach();
     laserGroup.destroyEach(); 
     explosionenemysound.play( ) 
     score=score+1;  
   }
   if (laserGroup.isTouching(enemy3Group)){
     enemy3Group.destroyEach();
     laserGroup.destroyEach(); 
     explosionenemysound.play( )   
     score=score+1;
   }
   if (laserGroup.isTouching(enemy4Group)){
     enemy4Group.destroyEach();
     laserGroup.destroyEach();  
     explosionenemysound.play( ) 
     score=score+1; 
   }
   if (laserGroup.isTouching(enemy5Group)){
     enemy5Group.destroyEach();
     laserGroup.destroyEach();
     explosionenemysound.play( )   
     score=score+1; 
   }
   if (laserGroup.isTouching(asteroid1Group)){
     asteroid1Group.destroyEach();
     laserGroup.destroyEach();
     explosionasteroidsound.play( )   
     score=score+1; 
   }
   if (laserGroup.isTouching(asteroid2Group)){
     asteroid2Group.destroyEach();
     laserGroup.destroyEach();
     explosionasteroidsound.play( )   
     score=score+1; 
   }

   if (playership.isTouching(asteroid2Group)){
     gameState = END;
    explosionplayersound.play( )

   }
   if (playership.isTouching(asteroid1Group)){
     gameState = END;
    explosionplayersound.play( )

   }
   if (playership.isTouching(enemy1Group)){
    gameState = END;
   explosionplayersound.play( )

  }
  if (playership.isTouching(enemy2Group)){
    gameState = END;
   explosionplayersound.play( )

  }
  if (playership.isTouching(enemy3Group)){
    gameState = END;
   explosionplayersound.play( )

  }
  if (playership.isTouching(enemy4Group)){
    gameState = END;
   explosionplayersound.play( )

  }
  if (playership.isTouching(enemy5Group)){
    gameState = END;
   explosionplayersound.play( )

  }
  
 
  } else if(gameState===END){


    playership.visible = false;

    asteroid1Group.destroyEach();
    asteroid2Group.destroyEach();
    enemy1Group.destroyEach();
    enemy2Group.destroyEach();
    enemy3Group.destroyEach();
    enemy4Group.destroyEach();
    enemy5Group.destroyEach();

    over.visible = true;

  }
  
  

  var select_enemy = Math.round(random(1,7));
  
  if (World.frameCount % 150 == 0) {
    if (select_enemy == 1) {
      enemy1();
    } else if (select_enemy == 2) {
      enemy2();
    } else if (select_enemy == 3) {
      enemy3();
    } else if (select_enemy == 4) {
      enemy4();
    } else {
      enemy5();
    }
  }

  var select_metro = Math.round(random(1,2));
  
  if (World.frameCount % 80 == 0) {
    if (select_metro == 1) {
      asteroid1();
    } else if (select_metro == 2) {
      asteroid2();
    } 
  }
  

  textSize(15);
  text(+ score, 70,45);  
  
  drawSprites();
  
 }

function enemy1(){
  var enemy1 = createSprite (Math.round(random(100, 1000)),0, 20, 20);
  enemy1.addImage("plane1", enemyplane1);
  enemy1.scale = 0.6;
  enemy1.velocityY =3;
  enemy1.lifetime = 300;
  enemy1Group.add(enemy1);   
  return enemy1;

}

function enemy2(){
  var enemy2 = createSprite (Math.round(random(100, 1000)),0, 20, 20);
  enemy2.addImage("plane2", enemyplane2);
  enemy2.scale = 0.6;
  enemy2.velocityY =3;
  enemy2.lifetime = 300;
  enemy2Group.add(enemy2);   
  return enemy2;

}

function enemy3(){
  var enemy3 = createSprite (Math.round(random(100, 1000)),0, 20, 20);
  enemy3.addImage("plane3", enemyplane3);
  enemy3.scale = 0.6;
  enemy3.velocityY =3;
  enemy3.lifetime = 300;
  enemy3Group.add(enemy3);
  return enemy3;   

}

function enemy4(){
  var enemy4 = createSprite (Math.round(random(100, 1000)),0, 20, 20);
  enemy4.addImage("plane4", enemyplane4);
  enemy4.scale = 0.6;
  enemy4.velocityY =3;
  enemy4.lifetime = 300;
  enemy4Group.add(enemy4); 
  return enemy4;  

}

function enemy5(){
  var enemy5 = createSprite (Math.round(random(100, 1000)),0, 20, 20);
  enemy5.addImage("plane5", enemyplane5);
  enemy5.scale = 0.6;
  enemy5.velocityY =3;
  enemy5.lifetime = 300;
  enemy5Group.add(enemy5); 
  return enemy5;  

}

function laser(){
  var laser = createSprite (World.mouseX, World.mouseY, 20, 20);
  laser.addImage("fire", laserImage);
  laser.velocityY =-5;
  laser.lifetime = -300;
  laserGroup.add(laser); 
  return laser; 

}

function asteroid1() {
  var asteroid1 = createSprite (Math.round(random(100, 1000)),0, 20, 20);
  asteroid1.addImage("fire", asteroid1Image);
  asteroid1.velocityY =2;
  asteroid1.lifetime = -300;
  asteroid1Group.add(asteroid1); 
  return asteroid1; 
}

function asteroid2() {
  var asteroid2 = createSprite (Math.round(random(100, 1000)),0, 20, 20);
  asteroid2.addImage("fire", asteroid2Image);
  asteroid2.velocityY =2;
  asteroid2.lifetime = -300;
  asteroid2Group.add(asteroid2); 
  return asteroid2; 
}
