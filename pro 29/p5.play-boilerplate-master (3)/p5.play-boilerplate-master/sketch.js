const World = Matter.World;
const Engine  = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,bo13,box14,box15;
var box16,box17,box18,box19,box20,box21;
var pentagon;
var stand1,stand2;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = Engine.world;

  box1 = new box(200,200,30,45);

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}