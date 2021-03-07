
  class Chain {
    constructor(body1,body2,offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{
                x:this.offsetX, 
                y:this.offsetY
            }
        };
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        Engine.update(engine);
        var pointAPos = this.chain.bodyA.position;
        var pointBPos = this.chain.bodyB.position;
        var pointB = this.chain.pointB;
        
        strokeWeight(4);
        line(pointAPos.x,pointAPos.y,pointBPos.x + pointB.x, pointBPos.y + pointB.y);
    }
}




