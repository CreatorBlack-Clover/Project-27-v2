
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bar, ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var bar_options =
	{
		isStatic: true
	}
	bar = Bodies.rectangle(400,200,500,50,bar_options);
	World.add(world,bar);

	// balls
	ball1 = new Ball(200,300,30);
	ball2 = new Ball(300,100,30);
	ball3 = new Ball(400,100,30);
	ball4 = new Ball(500,100,30);
	ball5 = new Ball(600,100,30);

	// ropes
	rope1 = new Rope(bar,ball1);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect(bar.position.x,bar.position.y,500,50);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  drawSprites();
 
}



