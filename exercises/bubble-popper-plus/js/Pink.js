// Pink, displays pink bubbles and is a subclass that extends from Bubble.js


class Pink extends Bubble {
  constructor(x, y, size) {
    super(x, y, size);

    this.pink = {
      r: 0,
      g: 255,
      b: 0,
      alpha: 100
    };
  }

  // displays pink bubbles
  display() {
    push();
    stroke(this.pink.r, this.pink.g, this.pink.b);
    fill(this.pink.r, this.pink.g, this.pink.b, this.pink.alpha);
    super.display();
    pop();
  }

}
