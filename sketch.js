
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paper1=new paper(100,100,100)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);  // as we are using this line Engine.update is not required
  
}//engine.upadte needed


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper1.display();

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log('pressed')
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-130})
	}
}

