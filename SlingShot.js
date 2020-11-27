class SlingShottttt {
    constructor(bodyA,pointB){
    var options = {
    bodyA:bodyA,pointB:pointB,length:10,stiffness:0.04
    }
    this.Chain = Con.create(options)
    World.add(world,this.Chain)
    }
    display(){
    push();
    if (this.Chain.bodyA){    
    line(this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.Chain.pointB.x,this.Chain.pointB.y)
    pop();
    }}
    fly(){
    this.Chain.bodyA = null
    }}
    