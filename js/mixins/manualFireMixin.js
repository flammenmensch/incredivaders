export default function(key=Phaser.Keyboard.SPACEBAR) {
  return function(SuperClass) {
    return class extends SuperClass {
      constructor() {
        super(...arguments);
        this.__fireButton = this.game.input.keyboard.addKey(key);
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
}
