var o2, movingRect;
var object1,object2,object3;
function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600, 400, 50, 80);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 =createSprite(100,200,50,50);
  object2 = createSprite(200,200,50,50);
  object3 = createSprite(300,200,50,50);
  object1.shapeColor = "green";
  object2.shapeColor = "green";
  object3.shapeColor = "green";
 object2.velocityX = 5 
 object3.velocityX = -5
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,object1)){
    movingRect.shapeColor = "red";
    object1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    object1.shapeColor = "green";
  }
bounceOff(object2,object3)
  drawSprites();
}
