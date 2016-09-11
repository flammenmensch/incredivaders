const PI2 = Math.PI * 2;
const TURN_RATE = 5;
const SPEED = 250;

export default class HomingMissile extends Phaser.Bullet {
  update() {
    const targetAngle = this.game.math.angleBetween(
      this.x, this.y,
      0, 0
    );

    if (this.rotation !== targetAngle) {
      let delta = targetAngle - this.rotation;

      if (delta > Math.PI) {
        delta -= PI2;
      }

      if (delta < -Math.PI) {
        delta += PI2;
      }

      if (delta > 0) {
        this.angle += TURN_RATE;
      } else {
        this.angle -= TURN_RATE;
      }

      if (Math.abs(delta) < this.game.math.degToRad(this.TURN_RATE)) {
        this.rotation = targetAngle;
      }

      this.body.velocity.x = Math.cos(this.rotation) * SPEED;
      this.body.velocity.y = Math.sin(this.rotation) * SPEED;
    }
  }
}
