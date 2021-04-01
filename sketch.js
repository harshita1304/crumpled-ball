
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
var radius;
var maxSides;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(200,200,radius,[options,[maxSides]])

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keypressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body.position,{x:85,y:85});
	}
}



