const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var plinko;
var division;
var wall1, wall2;

var particles = [];
var plinkos = [];
var divisions = []

var divisionHeight = 300;

function setup() {
  createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,590,400,30)
  wall1 = new Divisions(400,145,5,200)
  wall2 = new Divisions(0,145,5,200)


  for (var k = 0; k <=width; k = k + 80) { 

    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); 
  }

  for (var j = 50; j <=width-50; j=j+50) { 
    plinkos.push(new Plinko(j,50)); 
  }

  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,120)); 
  }

  for (var j = 50; j <=width-50; j=j+50) { 
    plinkos.push(new Plinko(j,190)); 
  }

  
  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,260)); 
  }



}


function draw() {
  background(0); 

  Engine.update(engine);
 
  ground.display();

  if(frameCount%60===0){

    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))

  }

  for (var i = 0; i < plinkos.length; i++) { 
    plinkos[i].display(); 
  } 

  for (var i = 0; i < divisions.length; i++) { 
    divisions[i].display(); 
  } 

  for (var j = 0; j<particles.length;j++ ){
    particles[j].display();
  }

  drawSprites();

  text(mouseX + ", "+mouseY, mouseX, mouseY)
}