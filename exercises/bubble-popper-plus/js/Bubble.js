class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = 0;
    this.vy = -2; // for element to rise
  }

  // check bubble popping
  popped() {
    // calculates the distance between the bubble and the pin
    let dRed = dist(indexTipX, indexTipY, red.x, red.y);
    let dPink = dist(middleTipX, middleTipY, pink.x, pink.y);
    let dBlue = dist(ringTipX, ringTipY, blue.x, blue.y);
    let dBlack = dist(pinkyTipX, pinkyTipY, black.x, black.y);

    // if the distance is less than half the size of the bubble
    if (dRed < red.size / 2) {
      // the bubble resets starts from the bottom again 
      red.x = random(width);
      red.y = random(height, 500);
    }
    else if (dPink < pink.size / 2) {
      pink.x = random(width);
      pink.y = random(height, 500);
    }
    else if (dBlue < blue.size / 2) {
      blue.x = random(width);
      blue.y = random(height, 500);
    }
    else if (dBlack < black.size/2) {
      black.x = random(width);
      black.y = random(height, 500);
    }
  }

  // bubbles' movement: bubbles rise from the bottom of the canvas
  motion() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.y < 0) {
      this.x = random(width);
      this.y = height;
    }
  }

  // draws bubbles
  display() {
    push();
    strokeWeight(2);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
