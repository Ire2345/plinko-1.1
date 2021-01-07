const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,bodies;


function setup() {
  createCanvas(700,900);
  
    engine = Engine.create();
    world = engine.world;
    division1= new Division(80,750,10,200);
    division2= new Division(160,750,10,200);
  division3= new Division(240,750,10,200);
    division4= new Division(320,750,10,200);
    division5= new Division(400,750,10,200);
    division6= new Division(480,750,10,200);
    plinko1=new Plinko(140,200,20,20)
    plinko2=new Plinko(180,200,20,20)
    plinko3=new Plinko(220,200,20,20)
    plinko4=new Plinko(260,200,20,20)
    plinko5=new Plinko(300,200,20,20)

    plinko6=new Plinko(180,150,20,20)
    plinko7=new Plinko(220,150,20,20)
    plinko8=new Plinko(260,150,20,20)
    plinko9=new Plinko(300,150,20,20)
    plinko10=new Plinko(340,150,20,20)
    box1=new Box(100,100,10,10)
    box2=new Box(130,100,10,10)
    box3=new Box(150,100,10,10)
    box4=new Box(170,100,10,10)
    box5=new Box(190,100,10,10)
    box6=new Box(210,50,10,10)
    box7=new Box(230,50,10,10)
    box8=new Box(250,50,10,10)
    box9=new Box(280,50,10,10)
    box10=new Box(310,50,10,10)
    
   
    ground1=new Ground(350,760,900,10);
    
}
function draw() {
  background(0);  
  Engine.update(engine)
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
 box1.display();
 box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
      ground1.display();
  
  
}

