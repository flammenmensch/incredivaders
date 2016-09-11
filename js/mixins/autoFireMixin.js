export default function() {
  return function(SuperClass) {
    return class extends SuperClass {
      update() {
        super.update();
        if (this.alive && this.withinFireBounds()) {
          this.fire();
        }
      }
      withinFireBounds() {
        return (
          (this.x > 0 && this.x < this.game.width) &&
          (this.y > 0 && this.y < (this.game.height * .5))
        );
      }
    }
  }
}
