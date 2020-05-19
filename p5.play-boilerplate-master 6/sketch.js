
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  
  var bobOptions={
    isStatic: true
  }

  

bob = Bodies.rectangle(200,100,200,20,bobOptions);
World.add(world,bob);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("green");
}


function draw() {
  background(0); 
  Engine.update(engine);


  fill ("brown");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("blue");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("white");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;

}

}


