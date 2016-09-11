const MINUS_PI_2 = -Math.PI * .5;

export default function(target, accuracy=Math.random()) {
  return function(SuperClass) {
    return class extends SuperClass {
      update() {
        super.update();
        this.rotation =  MINUS_PI_2 * (accuracy + 1) + this.game.physics.arcade.angleToXY(
          this, target.x, target.y
        );
      }
    }
  }
}
