class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.9,
            'friction': 0.9,
            'density': 0.001
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(7);
        stroke("Black");
        rect(0, 0, this.width, this.height);
        pop();
      }
}