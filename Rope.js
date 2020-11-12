class Rope
{
    constructor(bodyA,bodyB)
    {
        this.bodyA = bodyA;
        this.bodyB = bodyB
        var options = 
        {
            length:5,
            stiffness:0.01,
            bodyA: bodyA.body,
            bodyB: bodyB.body

        }

        this.body = Constraint.create(options);
        World.add(world, this.body);

    }

    display()
    {
        stroke("blue");
        strokeWeight(5);
        //line(this.BodyA.position.x,200,500,500);

    }

}