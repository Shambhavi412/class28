class Cons{
constructor(bodyA,pointB)
{
var options = {
    bodyA : bodyA,
    pointB : pointB,
    stiffness : 0.004,
    lenght: 8
}

this.cons = Constraint.create(options)
World.add(world,this.cons);



}
attach()
{
    this.cons.bodyA = stone.body
}


fly()
{
    this.cons.bodyA = null;
    
}
display()
{
    if(this.cons.bodyA)
    {
        
        var pointA = this.cons.bodyA.position;
    var pointB = this.cons.pointB;
    
    strokeWeight(4);
    //stroke("pink")
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    
    }




}




}