class Bob {
    constructor(x, y, diameter) {
      var options = {
        isStatic:false,
        restitution:1,
        density:1.2,
        friction:0
      }
      this.diameter = diameter;
      this.body = Bodies.circle(x, y,  diameter / 2, options);
      this.x = x;
      this.y = y;

      World.add(world, this.body);
    }
    display(){
      Engine.update(engine);
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      
      // translate(pos.x, pos.y);
      // rotate(angle);
      rectMode(CENTER);
      fill("purple");
      strokeWeight(1);
      stroke("purple");
      circle( pos.x, pos.y, this.diameter);
      pop();
    }
  }
