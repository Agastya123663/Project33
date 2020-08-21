
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight = 300;
var score = 0
var lives = 10
function preload()
{
  winImage = loadImage("sprites/10.jpg");
}


function setup() {
  createCanvas(500, 800);

	engine = Engine.create();
  world = engine.world;

  ground = new Ground(250,670,500,10);


  for (var k = 15; k<=width ; k = k+95){
    divisions.push(new Division(k,height-divisionHeight + 20 , 10,divisionHeight));
    }

    for(var j = 40 ; j<=width ; j=j+50){
    plinkos.push(new Plinko(j,75) );
    }

    for(var j = 15 ; j<=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,135) );
    }

    for(var j = 15 ; j<=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,195) );
    }

    for(var j = 40 ; j<=width ; j=j+50){
    plinkos.push(new Plinko(j,255) );
    }

    for(var j = 15 ; j<=width ; j=j+50){
    plinkos.push(new Plinko(j,315) );
    }

    particle = new Particle(105,400,10,10);

    



	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

 ground.display();
 
 text( "SCORE : " + score , 350,50)

 text("LIVES : "+lives , 200,700);

  text("?" ,40,650)

  textSize(20)

  text("?" ,150,650)

  text("?" ,250,650)

  text("?" ,350,650)

  text("0" ,450,650)

  text("LUCKY POINTER" , 150,750);
for(var k=0 ; k<divisions.length ; k++){
divisions[k].display();
}

for(var j=0 ; j<plinkos.length ; j++){
plinkos[j].display();
}


for(var i=0 ; i<particles.length ; i++){
  particles[i].display();
  }

  particle.display();

  if( particle.body.position.x > 205 && particle.body.position.x < 305 && particle.body.position.y > 400 && particle.body.position.y < 600){
    score = Math.round(score + random(20,35)); 
  }

  if( particle.body.position.x > 35 && particle.body.position.x < 105 && particle.body.position.y > 400 && particle.body.position.y < 600){
    score = Math.round(score + random(0,5)); 
  }

  if( particle.body.position.x > 105 && particle.body.position.x < 190 && particle.body.position.y > 400 && particle.body.position.y < 600){
    score = Math.round(score + random(5,10)); 
  }

  if(lives === 0 || lives < 0){
   World.remove(world,particle.body);
  }

  if( particle.body.position.x > 305 && particle.body.position.x < 390 && particle.body.position.y > 400 && particle.body.position.y < 600){
    score = Math.round(score + random(10,20)); 
  }

  drawSprites();


}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
  Matter.Body.setStatic(particle.body , false);
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(particle.body , {x:random(100,440),y:30})
    particle = new Particle(random(100,440),30,10,10);
    Matter.Body.setStatic(particle.body , false);
    lives = lives-1
  }
}


