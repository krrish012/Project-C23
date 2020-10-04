var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody,ground;
var base, box1, box2;

function preload() {
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageBody = createSprite(width/2 , 200 , 5 );

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	//packageSprite.x = packageBody.position.x;
	//packageSprite.y = packageBody.position.y;
	packageSprite.visible = false;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255);
	

	//Create a Ground
	ground = createSprite(width/2, 650, width, 10 );

	base = createSprite(width/2, 635, 200, 20);
	base.shapeColor = "red";
	box1 = createSprite(310, 595, 20, 100);
	box1.shapeColor = "red";
	box2 = createSprite(490, 595, 20, 100);
	box2.shapeColor = "red";
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  packageBody.visible = false;
  packageIMG.visible = false;

  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 

  keyPressed();

  packageSprite.collide(base);

  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW) && packageSprite.y < helicopterSprite.y) {
	packageSprite.visible = true;
	packageSprite.y = helicopterSprite.y+5;
	packageSprite.velocityY = 5;
  }
}



