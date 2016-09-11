export default function(verticalSpeed=180, frequency=100, spread=60) {
  return function(SuperClass) {
    return class extends SuperClass {
      reset() {
        super.reset(...arguments);
        this.startingX = this.game.rnd.integerInRange(100, this.game.width - 100);
        this.body.velocity.y = verticalSpeed;
      }
      update() {
        super.update();
        this.body.x = this.startingX + Math.sin((this.y) / frequency) * spread;
      }
    }
  }
}
