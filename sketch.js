const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    object1 = new objects(100,200,70,70)
    fill('purple')
    object2 = new objects(300,300,250,30)
    object3 = new circleObjects(500,300,90)
    object4 = new objects(700,500,100,60)
    object5 = new objects(900,700,100,60)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
object1.display();
object2.display();
object3.display();
object4.display();
object5.display();





 
}