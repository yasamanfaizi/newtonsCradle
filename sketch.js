const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight/2);
  engine = Engine.create();
  world = engine.world;
  var canvasmouse = Mouse.create(canvas.elt);
  //setting the pixel ratio so that it works on any high definition laptops
  canvasmouse.pixelRatio = pixelDensity();
  var options = {
    mouse: canvasmouse
  };
  //creating mouseconstraints
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
  p1 = new Pendulum(160, 350, "black")
  p2 = new Pendulum(220, 350, "grey")
  p3 = new Pendulum(280, 350, "darkgrey")
  p4 = new Pendulum(340, 350, "lightgrey")
  p5 = new Pendulum(400, 350, "white")

  sling1 = new Sling(p1.body, {x:160, y:50})
  sling2 = new Sling(p2.body, {x:220, y:50})
  sling3 = new Sling(p3.body, {x:280, y:50})
  sling4 = new Sling(p4.body, {x:340, y:50})
  sling5 = new Sling(p5.body, {x:400, y:50})
}

function draw() {
  background("blue");  
  Engine.update(engine);

  p1.display()
  p2.display()
  p3.display()
  p4.display()
  p5.display()

  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  sling5.display()
}