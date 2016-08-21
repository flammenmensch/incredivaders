export default function(SuperClass) {
  return class extends SuperClass {
    update() {
      super.update();
      this.fire();
    }
  }
}
