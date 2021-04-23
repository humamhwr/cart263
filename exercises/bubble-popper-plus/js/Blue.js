// Blue, displays blue bubbles and is a subclass that extends from Bubble.js

class Blue extends Bubble  {
  constructor(x, y, size) {
    super(x, y, size);

    this.blue = {
      r: 0,
      g: 0,
      b: 255,
      alpha: 100
    };

  }

  // displays blue bubbles
  display() {
    push();
    strokeWeight(2);
    stroke(this.blue.r, this.blue.g, this.blue.b);
    fill(this.blue.r, this.blue.g, this.blue.b, this.blue.alpha);
    super.display();
    pop();
  }
}
