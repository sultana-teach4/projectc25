class paper {
    constructor(x, y, r) {
        var options = {
            'isstatic': false,//should we put in quotes
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(this.x, this.y, this.r / 20, options)
        World.add(world, this.body)
    }
    display() {

        var paperpos = this.body.position;
        // console.log(paperpos)

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        //strokeWeight(4);
        fill(255, 0, 255)
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r)
        //ellipse(0,0,this.r, this.r);
        pop()
    }

}
// we have heavy load of live classs issues as its saturday today.. could you please share the repository l,ink?
//email.... kunal.karnik@whitehatjr.com  ok