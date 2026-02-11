class Platform {
  constructor({ x, y, w, h }) {
    // Position is the top-left corner.
    this.x = x;
    this.y = y;

    // Size (width/height).
    this.w = w;
    this.h = h;
  }

  draw(fillColor) {
    fill(fillColor);
    rect(this.x, this.y, this.w, this.h);
  }
}
