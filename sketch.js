const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(390,150,360,40)

	bobObject1 = new BobObject(250,500,35);
	bobObject2 = new BobObject(320,500,35);
	bobObject3 = new BobObject(390,500,35);
	bobObject4 = new BobObject(460,500,35);
	bobObject5 = new BobObject(530,500,35);

	rope1 = new Rope(bobObject1.body, roof.body, -35*4,0);
	rope2 = new Rope(bobObject2.body, roof.body, -35*2,0);
	rope3 = new Rope(bobObject3.body, roof.body, -35*0,0);
	rope4 = new Rope(bobObject4.body, roof.body, -35*-2,0);
	rope5 = new Rope(bobObject5.body, roof.body, -35*-4,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
Engine.update(engine);

  drawSprites();
 roof.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:1000})
	}
	if(keyCode === 50) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:1000});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-1000,y:1000});
	}
}
