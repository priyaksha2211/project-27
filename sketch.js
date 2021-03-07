
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1,bob1,bob2,bob3,bob5,bob4;
var rope1,rope2,rope3,rope4,rope5;
var roof2,roof3,roof4,roof5;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;
  var bobDiameter = 75;
  var bobStartPos = 410;
	//Create the Bodies Here.
    roof1 = new Roof(550,100,450,30);
    bob1 = new Bob(bobStartPos + bobDiameter * 0,500,bobDiameter);
	  bob2 = new Bob(bobStartPos + bobDiameter * 1,500,bobDiameter);
	  bob3 = new Bob(bobStartPos + bobDiameter * 2,500,bobDiameter);
    bob4 = new Bob(bobStartPos + bobDiameter * 3,500,bobDiameter);
    bob5 = new Bob(bobStartPos + bobDiameter * 4,500,bobDiameter);
    rope1 = new Chain(bob1.body,roof1.body,-bobDiameter*2,0);
    rope2 = new Chain(bob2.body,roof1.body,-bobDiameter,0);
    rope3 = new Chain(bob3.body,roof1.body,0,0);
    rope4 = new Chain(bob4.body,roof1.body,bobDiameter,0);
    rope5 = new Chain(bob5.body,roof1.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -300,y: -300})
		
	}
}


