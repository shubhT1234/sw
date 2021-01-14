const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("download.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(720,340,70,70);
    box2 = new Box(860,340,70,70);
    pig1 = new Box1(790,340,70,70);
    pig1.scale=1.2;

    box3 = new Box1(720,260,70,70);
    box4 = new Box1(860,260,70,70);
    pig3 = new Box1(790, 260,70,70);


    box5 = new Box(720,140,70,70);
    log4 = new Box(860,140,70,70);
    log5 = new Box1(790,140,70,70);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();

    box3.display();
    box4.display();
    pig3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}