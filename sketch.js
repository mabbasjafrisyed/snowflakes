const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
var bgimage;
var engine,world;
var sAnimate;
var snowFlakes = []
var santa;
var santaImage
var counter = 0;
function preload() {
  bgimage = loadImage("snow2.jpg");
  santaImage = loadAnimation("santa/santa1.png", "santa/santa2.png", "santa/santa3.png", "santa/santa4.png", "santa/santa5.png", "santa/santa6.png", "santa/santa7.png", "santa/santa8.png", "santa/santa9.png", "santa/santa10.png", "santa/santa11.png", "santa/santa12.png", "santa/santa13.png", "santa/santa14.png", "santa/santa15.png", "santa/santa16.png")
}

function setup() {
  createCanvas(1290,625);
  santa = createSprite(200, 550, 50, 50);
  santa.addAnimation("walking",santaImage);

  
  
    engine = Engine.create();
	  world = engine.world;
    
  Engine.run(engine);
}

function draw() {
  background(bgimage);
   if(frameCount%10 === 0){
    snowflake = new Snow(Math.round(random(20,990)),-110,40);
    snowFlakes.push(snowflake);
   }
   for(var i = 0; i <snowFlakes.length; i++){
     snowFlakes[i].display();
   }


   frameRate(120);

   
   if (santa.x >1100) {
      santa.mirrorX(santa.mirrorX( )* -1)
      santa.velocityX = -2;
   }
   if(santa.x<=200){
     if(counter>0) {
      santa.mirrorX(santa.mirrorX( )* -1)
     }
      santa.velocityX = 2;
      counter += 1;
   } 
  Engine.update(engine);
  drawSprites();
  }