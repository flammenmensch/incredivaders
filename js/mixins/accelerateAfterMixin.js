export default function(position, accelerationFactor=10) {
  return function(SuperClass) {
    return class extends SuperClass {
      update() {
        super.update();
        if (this.body.y > position) {
          this.body.acceleration.y += accelerationFactor;
        }
      }
    }
  }
}
