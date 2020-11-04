const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var box1, pig1;
var backgroundImg,platform;
var hex, slingShot;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground (700,320,400,15);
    ground = new Ground(600,height,1200,20);

    hex = new Polygon(200,50);

    box1 = new Block(590,250,70,70);
    box2 = new Block(661,250,70,70);
    box3 = new Block(732,250,70,70);
    box4 = new Block(803,250,70,70);

    box5 = new Block(620,200,70,70);
    box6 = new Block(691,200,70,70);
    box7 = new Block(762,200,70,70);

    box8 = new Block(650,150,70,70);
    box9 = new Block(721,150,70,70);

    box10 = new Block(685,100,70,70);
      
    slingshot = new SlingShot(hex.body,{x:200, y:150});
}

function draw(){
    background(116,116,116);
    Engine.update(engine);
    strokeWeight(2);

    ground.display();
    stand.display();
    
    hex.display(); 

    fill(237,138,249);
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    fill(52,199,151);
    box5.display();
    box6.display();
    box7.display();

    fill(248,249,138);
    box8.display();
    box9.display();

    fill(255);
    box10.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}