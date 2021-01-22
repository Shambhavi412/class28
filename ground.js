class Ground
{
    constructor(x,y,width)
{

    var options = {
        isStatic : true,
        friction : 0.4
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 15;
    this.body = Bodies.rectangle(x,y,width,15,options);
    World.add(world,this.body)





}

display()
{
    var position = this.body.position;
    push();
    translate(position.x,position.y)
    rectMode(CENTER);
    fill("brown")
    strokeWeight(4)
    stroke("black")
    rect(0,0,this.width,this.height);
pop();

}



}