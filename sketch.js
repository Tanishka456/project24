
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// blocks to make a dustbin
var block1,block2,block3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	ground = createSprite(10,570,20,20);
	ground.shapeColor = "brown";

	block1 = createSprite(600,700,60,20);
	block1.shapeColor = "green";

	block2 = createSprite(590,700,20,20);
	block1.shapeColor = "green";

	block3 = createsprite(650,700,20,20);
	block3.shapeColor = "green";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 if(keyCode === UP_ARROW){
	 
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	
 }

  drawSprites();
 
}



