export default function(maxSpeed=300) {
  return function(SuperClass) {
    return class extends SuperClass {
      update() {
        super.update();
        let bank = this.body.velocity.x / maxSpeed;
        this.scale.x = 1 - Math.abs(bank) * .5;
        this.angle = bank * 15;
      }
    }
  }
}
