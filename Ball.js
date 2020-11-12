class Ball
{
    constructor(x,y,size)
    {
        this.size = size;

        var options = 
        {
            restitution:1

        }

        this.body = Bodies.circle(x, y, size, options);
        World.add(world, this.body);

    }

    display()
    {
        ellipseMode(CENTER);

        ellipse(this.body.position.x, this.body.position.y, this.size*2, this.size*2);
    }

}