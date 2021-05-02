var wall, bullet;

var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30, 50);
  thickness=random(22, 83);

  bullet = createSprite(50, 200, 100, 20);
  bullet.velocityX = speed;
  
  bullet.shapeColor = "white"

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);

}

function draw() {
  background("black");  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2) {
    bullet.velocityX=0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if (damage>10) {
      bullet.shapeColor = color(0,255,0)
    }
    else {
      bullet.shapeColor = color(250,0,0)
    }

  }
  drawSprites();
}