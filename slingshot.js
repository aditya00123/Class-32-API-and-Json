class Slingshot {
  constructor(bodyA,pointB) {
      var options = {
        bodyA:bodyA,
        pointB:pointB,
        length:15,
        stiffness:0.04,
      }

      this.sling1 = loadImage('sprites/sling1.png');
      this.sling2 = loadImage('sprites/sling2.png');
      this.sling3 = loadImage('sprites/sling3.png');

      this.pointB = pointB;
      this.sling = Matter.Constraint.create(options);
      World.add(world, this.sling);

  }

  fly() {
    this.sling.bodyA = null;
  }

  display() {

    image(this.sling1,260,230);
    image(this.sling2,230,230);
    
    if (this.sling.bodyA) {

    
      var pA = this.sling.bodyA.position;
      var pB = this.pointB;
push();
      strokeWeight(8);
      stroke(48,22,8);

      if (pA.x < 280) {
      line(pA.x-20,pA.y,pB.x-10,pB.y);
      line(pA.x-20,pA.y,pB.x+30,pB.y-3);
      image(this.sling3,pA.x-30,pA.y-10,15,30);
      }
      else {
        line(pA.x+25,pA.y,pB.x-10,pB.y);
      line(pA.x+25,pA.y,pB.x+30,pB.y-3);
      image(this.sling3,pA.x+25,pA.y-10,15,30);
      }
      pop();
      }
    }

}