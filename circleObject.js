class circleObjects {
    constructor(x, y , width  ) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.circle(x, y , width, options);
      this.width = width;
      this.height = 100;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('black')
      ellipseMode(CENTER)
      ellipse(0, 0, this.width, this.height);
      pop();
    };
  };
  