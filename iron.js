class Iron {
    constructor(x,y,r){
    
     var options={
    
    'restitution':1,
    'friction':1,
    'density':1
     }
    this.body= Bodies.circle(x,y,r,options);
    this.r=r;
    //this.width=50;
    //this.height=30;
    World.add(world,this.body);
    
    }
    display(){
    
    var pos=this.body.position;
    
    var angle= this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("red");
    strokeWeight(4);
    stroke("black");
    text("iron")
    ellipse(0,0,this.r);
    pop();
    }
    
    
    }