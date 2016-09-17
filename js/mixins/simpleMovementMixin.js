export default function(speed=300) {
  return function(SuperClass) {
    return class extends SuperClass {
      reset() {
        super.reset(...arguments);
        this.body.velocity.y = speed;
      }
    }
  }
}
