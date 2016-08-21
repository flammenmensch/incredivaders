const PADDING = 32;

export default function(SuperClass) {
  return class extends SuperClass {
    constructor() {
      super(...arguments);
      this.__cursors = this.game.input.keyboard.createCursorKeys();
    }
    update() {
      super.update();
      if (this.alive) {
        this.body.velocity.setTo(0, 0);
        if (this.__cursors.left.isDown && this.x > PADDING) {
          this.body.velocity.x = -200;
        } else if (this.__cursors.right.isDown && this.x < (this.game.width - PADDING)) {
          this.body.velocity.x =  200;
        }
      }
    }
  }
}
