export default function() {
  return function(SuperClass) {
    return class extends SuperClass {
      update() {
        super.update();
        this.angle = -this.game.math.radToDeg(
          Math.atan2(this.body.velocity.x, this.body.velocity.y)
        );
      }
    }
  }
}
