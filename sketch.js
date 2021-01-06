
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,600,20)
	ground = new Ground(400,675,800,20)
	dustbin1 = new Dustbin(530,640,10,50)
	dustbin2 = new Dustbin(580,660,100,10)
	dustbin3 = new Dustbin(630,640,10,50)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.debug=true;
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed() {
	if(keyCode==UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-50});
	}
}

