export default function(factor=2, ccv=false) {
  return function(SuperClass) {
    return class extends SuperClass {
      update() {
        super.update();
        if (ccv) {
          this.body.rotation -= factor;
        } else {
          this.body.rotation += factor;
        }
      }
    }
  }
}
