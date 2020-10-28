
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,leftpart,rightpart,bottompart;
function preload(){
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground  = new Ground(600,650,1200,20)
  paper = new Paper(300,200,50);
  leftpart = new Dustbin(840.5,550,20,150)
  rightpart = new Dustbin(1009.5,550,20,150)
  bottompart = new Dustbin(925,630,150,20)

	Engine.run(engine);
  keyPressed();
}


function draw() {
 
  background(0);
  Engine.update(engine);
  
 paper.display();
 ground.display();
 leftpart.display();
 rightpart.display();
 bottompart.display();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-300});
	}
}



