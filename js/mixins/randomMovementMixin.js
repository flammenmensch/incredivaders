export default function(speed=300, drag=300) {
  return function(SuperClass) {
    return class extends SuperClass {
      reset() {
        super.reset(...arguments);
        this.body.velocity.x = this.game.rnd.integerInRange(-speed, speed);
        this.body.velocity.y = speed;
        this.body.drag.x = drag;
      }
    }
  }
}
