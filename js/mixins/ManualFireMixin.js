export default function(SuperClass) {
  return class extends SuperClass {
    constructor() {
      super(...arguments);
      this.__fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }
    update() {
      super.update();
      if (this.alive) {
        if (this.__fireButton.isDown) {
          this.fire();
        }
      }
    }
  }
}
