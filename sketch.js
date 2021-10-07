var trex;
var trex_ruuning;
var ground;
var ground_image;
function preload(){
trex_ruuning=loadAnimation("trex1.png","trex3.png","trex4.png");
ground_image=loadImage("ground2.png")
}



function setup(){
  createCanvas(600,200);
  trex=createSprite(50,150,20,20);
  trex.addAnimation("trab",trex_ruuning);
  trex.scale=0.7;

  ground= createSprite(200,180,400,20);
  ground.addImage("abc",ground_image);
  ground.velocityX=-3
}


function draw(){
background("pink");

if(keyDown("space")){
  trex.velocityY=-10
}
trex.velocityY=trex.velocityY+1


trex.collide(ground)

drawSprites()
}






