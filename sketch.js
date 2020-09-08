
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree;
var boy, b;
var stone,launcher;
var mango1,mango2,mango3,mango4,mango5,mango6;

function preload()
{
	b = loadImage("boy.png");
}

function setup() {
	createCanvas(1535,720);

	boy = createSprite(350,625,10,10);
	boy.addImage("boy",b);
	boy.scale = 0.15;
	
	engine = Engine.create();
	world = engine.world;
	//the ground
	ground = new Gr(width/2,height-5,width,30);
	World.add(world, ground);
	//the stone
	stone = new Stone(265,585,15);
	World.add(world, stone);
	//the mangoes
	mango1 = new Mango(1100,300,30);
	mango2 = new Mango(1050,350,30);
	mango3 = new Mango(1200,250,30);
	mango4 = new Mango(1250,325,30);
	mango5 = new Mango(1300,400,30);
	mango6 = new Mango(1375,375,30);
	World.add(world, mango1);
	World.add(world, mango2);
	World.add(world, mango3);
	World.add(world, mango4);
	World.add(world, mango5);
	World.add(world, mango6);
	//the tree
	tree = new Tree(1200,435);
	//the launcher
	launcher = new Launcher(stone.body,{x:265,y:535});
	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background(100);
  
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  launcher.display();

  drawSprites();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}
function mouseReleased (){
	launcher.fly();
}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:535});
		launcher.attach(stone.body);
	}
}
function detectCollision(Lstone,Lmango){
	mangoBodyPosition = Lmango.body.position;
	stoneBodyPosition = Lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body, false);
	}
}