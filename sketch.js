const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world
var ground

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world = engine.world

  ground=new Ground(400,380,800,20)
  stand=new Ground(500,350,300,10)


  box1=new Box(500,340,20,40)
  box2=new Box(490,340,20,40)
  box3=new Box(480,340,20,40)
  box4=new Box(510,340,20,40)
  box5=new Box(520,340,20,40)
ball=new Ball (50,200,20)
chain=new Chain(ball.body,{x:200,y:200})
}

function draw() {
  background("black");  
  Engine.update(engine)
  ground.display()
  stand.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 ball.display()
 chain.display()
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
  chain.fly()
}