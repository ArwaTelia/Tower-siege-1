class Polygon extends BaseClass {
  constructor(x,y){
    super(x,y,100,80);
    this.image = loadImage("sprites/hexagon.png");
  }

  display() {
    super.display();
  }
} 
