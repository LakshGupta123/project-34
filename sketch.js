const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32, box33, box34, box35, box36, box37, box38, box39, box40, box41, box42, box43, box44, box45, box46, box47, box48, box49, box50, box51, box52, box53, box54, box55, box56, box57, box58, box59;
var ball, ballp;
var monster, monsterp;
var rope;
var backgroundImg;

function preload()
{
  ballp = loadImage("download.pngi.png");
  backgroundImg = loadImage("GamingBackground.png");
  monsterp = loadImage("Monster-01.png");
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(width/2-100, height/2+100, 300, 20);
  ground2 = new Ground(width/2+300, height/2-50, 200, 20);
  ground3 = new Ground(width/2+0, height/2+200, 1700,20)

  ball = Bodies.rectangle(100,200,90,90);
  World.add(world, ball);

  monster = Bodies.rectangle(500,50,70,70)
  World.add(world, monster);

  rope= new Rope(this.ball,{x:250, y:10});

  box10 = new Box(width/2-215, height/2+80, 30, 40);
  box11 = new Box(width/2-185, height/2+80, 30, 40);
  box12 = new Box(width/2-155, height/2+80, 30, 40);
  box13 = new Box(width/2-125, height/2+80, 30, 40);
  box14 = new Box(width/2-95, height/2+80, 30, 40);
  box15 = new Box(width/2-65, height/2+80, 30, 40);
  box16 = new Box(width/2-35, height/2+80, 30, 40);
  box17 = new Box(width/2-5, height/2+80, 30, 40);
  box18 = new Box(width/2-200, height/2+40, 30, 40);
  box19 = new Box(width/2-170, height/2+40, 30, 40);
  box20 = new Box(width/2-140, height/2+40, 30, 40);
  box21 = new Box(width/2-110, height/2+40, 30, 40);
  box22 = new Box(width/2-80, height/2+40, 30, 40);
  box23 = new Box(width/2-50, height/2+40, 30, 40);
  box24 = new Box(width/2-20, height/2+40, 30, 40);
  box25 = new Box(width/2-185, height/2, 30, 40);
  box26 = new Box(width/2-155, height/2, 30, 40);
  box27 = new Box(width/2-125, height/2, 30, 40);
  box28 = new Box(width/2-95, height/2, 30, 40);
  box29 = new Box(width/2-65, height/2, 30, 40);
  box30 = new Box(width/2-35, height/2, 30, 40);
  box31 = new Box(width/2-170, height/2-40, 30, 40);
  box32 = new Box(width/2-140, height/2-40, 30, 40);
  box33 = new Box(width/2-110, height/2-40, 30, 40);
  box34 = new Box(width/2-80, height/2-40, 30, 40);
  box35 = new Box(width/2-50, height/2-40, 30, 40);
  box36 = new Box(width/2-135, height/2-80, 30, 40);
  box37 = new Box(width/2-125, height/2-80, 30, 40);
  box38 = new Box(width/2-93, height/2-80, 30, 40);
  box45 = new Box(width/2+220, height/2-80, 30, 40);
  box46 = new Box(width/2+250, height/2-80, 30, 40);
  box47 = new Box(width/2+280, height/2-80, 30, 40);
  box48 = new Box(width/2+310, height/2-80, 30, 40);
  box49 = new Box(width/2+340, height/2-80, 30, 40);
  box50 = new Box(width/2+370, height/2-80, 30, 40);
  box51 = new Box(width/2+235, height/2-120, 30, 40);
  box52 = new Box(width/2+265, height/2-120, 30, 40);
  box53 = new Box(width/2+295, height/2-120, 30, 40);
  box54 = new Box(width/2+325, height/2-120, 30, 40);
  box55 = new Box(width/2+355, height/2-120, 30, 40);
  box56 = new Box(width/2+250, height/2-160, 30, 40);
  box57 = new Box(width/2+280, height/2-160, 30, 40);
  box58 = new Box(width/2+310, height/2-160, 30, 40);
  box59 = new Box(width/2+340, height/2-160, 30, 40);
 
}

function draw() {
  background(backgroundImg);
  fill("YELLOW")
  stroke("Green")
  strokeWeight(7)
  textSize(29)
  text("KILL THE MONSTER BY Laksh ",9,25);
  stroke("black")
  strokeWeight(3)
  Engine.update(engine);
  drawSprites();
  ground1.display();
  ground2.display();
  ground3.display();
  
  fill("red");
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();
  box51.display();
  box52.display();
  box53.display();
  box54.display();
  box55.display();
  box56.display();
  box57.display();
  box58.display();
  box59.display();

  rope.display();
  
  imageMode(CENTER);
  image(ballp, ball.position.x, ball.position.y, 200, 150);
  image(monsterp, monster.position.x, monster.position.y,120,120)

}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}
