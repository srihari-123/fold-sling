
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;
var backgroundImg,ground2,ground4;
var got1,got2,got3, got4,got5,got6,got7,got8,got9,got10,got11,got12,got13, got14,got15,got16,got17,got18,got19,got20;
function preload(){
  backgroundImg=loadImage("ground3.jpg")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,500,20);
	mango1 = new Mango(1300,300,30);
	mango2 = new Mango(1400,250,30);
	mango3 = new Mango(1300,200,30);
	mango4 = new Mango(1390,300,30);
	mango5 = new Mango(1300,300,30);
	mango6 = new Mango(1200,300,30);
  mango7 = new Mango(1500,280,30);
  tree = new Tree(1300,680);
  ground = new Ground(0,680,4000,20);
  boy = new Boy(200,470,50,50);
  boy.scale=0.5
	chain = new Chain(stone.body,{x:100, y:385});
 ground2= new Ground(700,400,300,30)
 ground4= new Ground(800,200,300,30)
 got1 = new Poke(600,260,30,30)
 got2 = new Poke(650,260,30,30)
 got3= new Poke(700,260,30,30)
 got4= new Poke(750,260,30,30)
 got5= new Poke(800,260,30,30)
 got6= new Poke(600,200,30,30)
 got7= new Poke(650,200,30,30)
 got8= new Poke(700,200,30,30)
 got9= new Poke(750,200,30,30)
 got10= new Poke(800,200,30,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  background(backgroundImg);
  fill('red');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 200,200);
  ground.display();
  //tree.display();
  boy.display();
  stone.display();
  //mango1.display();
 // mango2.display();
 // mango3.display();
 // mango4.display();
  //mango5.display();
 // mango6.display();
 // mango7.display();
  chain.display();
ground2.display()
ground4.display() 
got1.display()
got2.display()
got3.display()
got4.display()
got5.display()
got6.display()
got7.display()
got8.display()
got9.display()
got10.display()
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:300});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}
