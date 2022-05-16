
var bg,bgImg
var olaf,olafImg
var frostImg1,frostImg2
var frost1Group,frost2Group
var snowImg,snowGroup
function preload(){
 bgImg=loadImage("tree.jpg")
 olafImg=loadImage("olaf.png")
 frostImg1=loadImage("frost1.png")
 frostImg2=loadImage("frost2.png")
 snowImg=loadImage("snow.png")
}

function setup(){
  createCanvas(800,800)
  
  bg=createSprite(500,500,1000,1000);
  bg.addImage("bg",bgImg)
bg.scale=7

olaf=createSprite(100,700,10,10)
olaf.addImage("olaf",olafImg)
 bg.velocityX=-3
 
 invisiblebg=createSprite(400,780,1000,1)
 invisiblebg.visible=false

 frost1Group=new Group()
 frost2Group=new Group()
 snowGroup=new Group()
}

function draw(){
  background("white");
 
  if(bg.x<0){
    bg.x=bg.width/2
  }

  if(keyDown("space")){
    olaf.velocityY=-12
  }
  olaf.velocityY+=0.8

  if(olaf.isTouching(snowGroup)){
    snowGroup.destroyEach()
  }

  if(olaf.isTouching(frost1Group)||
  olaf.isTouching(frost2Group)){
    bg.velocityX=0
    snowGroup.setVelocityXEach(0)
    frost1Group.setVelocityXEach(0)
    frost2Group.setVelocityXEach(0)
    snowGroup.destroyEach()
    frost1Group.destroyEach()
    frost2Group.destroyEach()
    gameOver=createImg("gameover.jpg")
    
  }
  

  olaf.collide(invisiblebg)
  frostone();
  frosttwo();
  snow();
drawSprites()
}

function frostone(){
  if(frameCount%80==0){
    var frost=createSprite(800,150,10,10);
    frost.velocityX=-3
    frost.addImage("frost",frostImg1);
frost.scale=1.5
frost.lifetime=250
frost1Group.add(frost)
  }
}

function frosttwo(){
  if(frameCount%80==0){
    var frost=createSprite(800,680,10,10);
    frost.velocityX=-4
    frost.addImage("frost",frostImg2);
frost.scale=1.5       
frost.lifetime=250
frost2Group.add(frost)
  }
}

function snow (){
  if(frameCount%80==0){
    var snow=createSprite(800,random(350,550),10,10);
    snow.velocityX=-4
   snow.addImage("snow",snowImg);
snow.scale=0.8      
snow.lifetime=250
snowGroup.add(snow)
  }
}