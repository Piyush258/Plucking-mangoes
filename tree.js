class Tree{
    constructor(x,y){
        this.tree = loadImage("tree.png");
    }
    display(){
        imageMode(CENTER);
        image(this.tree,1200,435,600,600);
    }
}