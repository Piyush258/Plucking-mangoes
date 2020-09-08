class Stone {
    constructor(x,y,d){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Matter.Bodies.circle(x,y,d,options);
        this.image = loadImage("stone.png");
        this.r = d;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r*2,this.r*2);
        pop();
    }
}