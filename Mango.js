class Mango{
    constructor(x,y,r){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
        } 
    this.body = Matter.Bodies.circle(x,y,r,options) 
    this.image = loadImage("mango.png")
    this.r = r
    World.add(world,this.body);
    }

    display(){
        ellipseMode(RADIUS);
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        //ellipse(0,0,this.r,this.r)
        imageMode(CENTER)
        image(this.image,0,0,this.r*6,this.r*5) 
        pop()  
    }

}