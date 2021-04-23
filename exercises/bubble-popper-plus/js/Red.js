// Red, displays red bubbles and is a subclass that extends from Bubble.js


class Red extends Bubble {
  constructor(x, y, size) {
    super(x, y, size);

    this.red = {
      r: 255,
      g: 0,
      b: 0,
      alpha: 100
    };
  }

  // displays red bubbles
  display() {
    push();
    stroke(this.red.r,this.red.g,this.red.b);
    fill(this.red.r,this.red.g,this.red.b, this.red.alpha);
    super.display();
    pop();
  }
}
