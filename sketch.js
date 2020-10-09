var fixedRect, movingRect;
var a,b;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  a=createSprite(200,100,50,50);
  b=createSprite(300,100,50,50);
 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
 movingRect.x=mouseX;
 movingRect.y=mouseY;
 
 if( touch(b,movingRect)){
  movingRect.shapeColor="orange";
  b.shapeColor="pink";
 } 
 else{
  movingRect.shapeColor="yellow";
  b.shapeColor="yellow"; 
 }

 
  drawSprites();
}
