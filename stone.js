class Stone{

    constructor(x,y,r){

        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2

        }


/*this.width = width;
this.height = height;*/
this.x = x;
this.y = y;
this.r = r;
this.image= loadImage("stone.png")
this.body = Bodies.circle(x,y,r,options)

World.add(world,this.body)






    }
display()
{
var position = this.body.position;
//position.x = mouseX;
//position.y = mouseY;
push();
translate(position.x,position.y);
rotate(this.body.angle);
imageMode(CENTER);

strokeWeight(2);
//stroke("green")
//fill("pink")

image(this.image,0,0,this.r,this.r);

pop()

}












}



















