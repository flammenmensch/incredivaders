export default function(acceleration=600, maxSpeed=400, drag=400, padding=32) {
  return function(SuperClass) {
    return class extends SuperClass {
      constructor() {
        super(...arguments);
        this.game.physics.arcade.enable(this);
        this.body.maxVelocity.setTo(maxSpeed, maxSpeed);
        this.body.drag.setTo(drag, drag);
        this.__cursors = this.game.input.keyboard.createCursorKeys();
      }

      update() {
        super.update();
        if (this.alive) {
          this.body.acceleration.x = 0;

          if (this.__cursors.left.isDown) {
            this.body.acceleration.x = -acceleration;
          } else if (this.__cursors.right.isDown) {
            this.body.acceleration.x = acceleration;
          }
        }

        if (this.x > this.game.width - padding) {
          this.x = this.game.width - padding;
          this.body.acceleration.x = 0;
        }

        if (this.x < padding) {
          this.x = padding;
          this.body.acceleration.x = 0;
        }
      }
    }
  }
}
