class Pendulum {
    constructor(x, y, color) {
        var options = {
            restitution: 1,
        };
        this.body = Bodies.circle(x, y, 30, options);
        this.radius = 30
        this.color = color;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius,this.radius)
    }
}