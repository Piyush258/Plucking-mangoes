class Mango{
    constructor(x,y,d){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Matter.Bodies.circle(x,y,d,options);
        this.mango = loadImage("mango.png");
        this.r = d;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.mango,pos.x,pos.y,this.r*2,this.r*2);
        pop();
    }
}