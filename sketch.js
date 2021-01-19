
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boyImg,treeImg;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var rope;

function preload()
{

	boyImg = loadImage("boy.png")
	treeImg = loadImage("tree.png") 
}

function setup() {
	createCanvas(1200, 800); 


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,790,1200,20) 
	stone = new Stone(80,700,20)
	mango1 = new Mango(800,400,20)
    rope = new Rope(stone.body,{x: 80, y: 700})

	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background(0);
  
 ground.display() 
 image(boyImg,140,730,200,200) 
 image(treeImg,800,545,500,500)
 stone.display() 
 rope.display()
 mango1.display() 
 detectCollision(stone,mango1)
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x : mouseX, y : mouseY}) 
}

function mouseReleased(){
	rope.fly()
}

function keyPressed(){
	if (keyCode === 32){
		rope.attach(stone.body)
		Matter.Body.setPosition(stone.body,{x : 80, y : 700});
	}
}

function detectCollision(stone,mango){
	mangoPos = mango.body.position
	stonePos = stone.body.position
	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
	if (distance <= mango.r + stone.r){
		Matter.Body.setStatic(mango.body,false)
	} 
}
