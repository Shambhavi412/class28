
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;

var boyImage;
var stone;
var stone2;
var cons;
var boy;
var mango1, mango2, mango3, mango4, mango5, mango6,mango7,mango8,mango9,mango10;

function preload()
{ boyImage = loadImage("boy.png");
	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  stone = new Stone(220,510,55);
  cons = new Cons(stone.body,{x:220,y:525});

ground = new Ground(width/2,650,width);
tree = new Tree(900,80,590,590)
boy = Matter.Bodies.rectangle(180,460,30,30)
mango1 = new Mango(960,300,40)
mango2 = new Mango(1460,300,50)
mango3 = new Mango(1360,300,60)
mango4 = new Mango(1090,200,70)
mango5 = new Mango(1260,140,45)
mango6 = new Mango(1170,320,65)
mango7 = new Mango(1040,310,45)
mango8 = new Mango(1160,170,55)
mango9 = new Mango(1390,200,45)
mango10 = new Mango(1240,260,60)


//boy = new Boy(130,435,50,50)


//stone2 = new Stone2(140,135,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(110);
  image(boyImage,boy.position.x,boy.position.y)
  boyImage.width = 185;

  stone.display();
  cons.display();
  ground.display();
  tree.display();
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  
  
  //boy.display();
  //stone2.display()
 
//ks



  drawSprites();
 
}

function mouseDragged()
{
  Matter.Body.setPosition(stone.body,{x : mouseX, y : mouseY})
}

function mouseReleased()
{
  cons.fly()
}

function detectCollision(lstone,lmango)
{
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<= lmango.r + lstone.r)
{
  Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
if(keyCode === 32)
{
  Matter.Body.setPosition(stone.body,{x:220,y:510});
  cons.attach();
}
}