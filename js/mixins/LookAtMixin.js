export default function(SuperClass, target) {
  return class extends SuperClass {
    update() {
      super.update();
      this.rotation = -Math.PI/2 + this.game.physics.arcade.angleToXY(
        this, target.x, target.y
      );
    }
  }
}
