// Black, displays black bubbles and is a subclass that extends from Bubble.js

class Black extends Bubble {
  constructor(x, y, size) {
    super(x, y, size);
    this.black = {
      r: 255,
      g: 255,
      b: 0,
      alpha: 100
    };
  }

  // displays black bubbles
  display() {
    push();
    stroke(this.black.r, this.black.g, this.black.b);
    fill(this.black.r, this.black.g, this.black.b, this.black.alpha);
    super.display();
    pop();
  }
}
