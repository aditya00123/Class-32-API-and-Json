const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var bg;
var bird, log6, slingshot;

var gameState = "attached";

var score = 0;

var backgroundImg;

function preload() {
changeBackground();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810, 550);
    log1 = new Log(810,460,300, PI/2);

    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig3 = new Pig(810, 420);

    log3 =  new Log(810,380,300, PI/2);

    box5 = new Box(810,360,70,70);
    log4 = new Log(760,320,150, PI/7);
    log5 = new Log(870,320,150, -PI/7);

    bird = new Bird(260,262);

    

    slingshot = new Slingshot(bird.body,{x:260, y:262});

    platform = new Ground(200,510,400,170);

    

}

function draw(){
    if (backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    
    slingshot.display();

    platform.display();

    textSize(25);
    text("SCORE:"+score,1000,50);
}

function mouseDragged() {
    if (gameState!="flying") {
   Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
}

function mouseReleased() {
    slingshot.fly();
    gameState = "flying";
}

async function changeBackground() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata") ;
    var respJson = await response.json();
    var dt = respJson.datetime;
    var t = dt.slice(11,13);
    if (t > 6 && t < 12) {
        bg = "sprites/bg.png";
    }
    else {
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}