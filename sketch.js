var gameState = 1;
var PLAY = 1;
var END = 2;
var scene, player, play1, play2, play3, boxy, box;
var wall1, wall2, wall3, wall4, wall5, land;
var b1, b2, b11, b22, b3, b4, e1, e2, e3, play2, play3, play4, l1, l2, l3, l4, l5, l6, li;

function preload(){
scene = loadImage("lab.png");

//loading pc image
play4 = loadImage("c4.png");


//loading teleporters.
b11 = loadImage("portal.png");
b22 = loadImage("portal2.png");

//loadimg acid images.
li = loadImage("acid.png");

//loading the box image.
boxy = loadImage("box.png");

}

function setup() {
  createCanvas(1200,1000);
  //creating the player sprite.
player = createSprite(1000, 1000, 200, 200);
player.addImage(play4);
player.scale = 0.3;

//creating edge sprites.
e1 = createSprite(0, 0, 5, 2050);
e1.shapeColor = "black";
e2 = createSprite(1200, 1000, 5, 2050);
e2.shapeColor = "black";
e3 = createSprite(0, 0, 3050, 5);
e3 .shapeColor = "black";

//creating the land sprites.
land = createSprite(800, 1000, 2050, 100);

//creating the acid sprites.
l1 = createSprite(600, 700, 25, 25);
l1.addImage(li);
l1.velocityY = 10;
l1.scale = 0.1;

l2 = createSprite(300, 700, 25, 25);
l2.addImage(li);
l2.velocityY = 6;
l2.scale = 0.1;

//creating the wall sprites.
wall3 = createSprite(850, 458, 25, 127);
wall3.shapeColor = "red";

wall4 = createSprite(550, 590, 25, 117);
wall4.shapeColor = "red";

wall5 = createSprite(200, 458, 25, 127);
wall5.shapeColor = "red";

wall1 = createSprite(30, 400, 3050, 15);
wall1.shapeColor = "brown";

wall2 = createSprite(1000, 650, 2050, 15);
wall2.shapeColor = "brown";

//creating the intelingence grower.
box = createSprite(100, 345);
box.addImage(boxy);
box.scale = 0.5;

//createing portals.
b1 = createSprite(30, 840, 50, 400);
b1.addImage(b11);

b2 = createSprite(1100, 530, 50, 400);
b2.addImage(b22);

b3 = createSprite(30, 530, 50, 400);
b3.addImage(b11);

b4 = createSprite(1100, 280, 50, 50);
b4.addImage(b22);

//creating the laser sprites.

l3 = createSprite(750, 285, 35, 35);
l3.shapeColor = "red";
l3.velocityY = -10;

l4 = createSprite(600, 185, 35, 35);
l4.shapeColor = "red";
l4.velocityX = -10;

l5 = createSprite(600, 285, 35, 35);
l5.shapeColor = "red";
l5.velocityX = 10;

l6 = createSprite(450, 285, 35, 35);
l6.shapeColor = "red";
l6.velocityY = -10;

}

function draw() {
  background(scene);  
  
  //to make conditions.
  
  if(gameState === PLAY){

  if(keyDown(UP_ARROW)){
    player.y = player.y - 15;
    //player.changeAnimation(play5);
      }

  if(keyDown(DOWN_ARROW)){
    player.y = player.y + 15;
    
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 15;
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x - 15;
  }

  if(player.isTouching(b1)){
    player.y = 590;
    player.x = 1000;
  }

  if(player.isTouching(b3)){
    player.y = 390;
    player.x = 1000;
  }

  if(player.isTouching(l1) || player.isTouching(l2) || player.isTouching(wall3) || player.isTouching(wall4) || player.isTouching(wall5) || player.isTouching(l3) || player.isTouching(l4) || player.isTouching(l5) || player.isTouching(l6)){
    player.x = 1000;
    player.y = 1000;
  }

  if(l1.isTouching(land)){
    l1.x = 300;
    l1.y = 660;
  }

  if(l2.isTouching(land)){
    l2.x = 600;
    l2.y = 660;
  }
  
  //to make lasers bouncy.
  l3.bounceOff(e3);
  l3.bounceOff(wall1);

  l6.bounceOff(e3);
  l6.bounceOff(wall1);

  l4.bounceOff(e1);
  l4.bounceOff(e2);

  l5.bounceOff(e1);
  l5.bounceOff(e2);

  //to make collisions.
  player.collide(wall1);
  player.collide(wall2);
  player.collide(land);
  player.collide(e1);
  player.collide(e2);
  player.collide(e3);
}

if(player.isTouching(box)){
/*wall1.destroy();
wall2.destroy();*/
wall3.destroy();
wall4.destroy();
wall5.destroy();
l1.destroy();
l2.destroy();
l3.destroy();
l4.destroy();
l5.destroy();
l6.destroy();78
b1.destroy();
b2.destroy();
b3.destroy();
b4.destroy();
player.velocityX = 0;
player.velocityY = 0
//box.destroy();

textSize(50);
fill("red");
strokeWeight(7);
stroke("black");
text("To be continued", 400, 500);
 }


  drawSprites();
}