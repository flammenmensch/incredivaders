export default class Enemy extends Phaser.Sprite {
  constructor(game, x, y, key) {
    super(game, x, y, key);
    this.game.physics.arcade.enable(this);
    this.anchor.setTo(.5, .5);
    this.outOfBoundsKill = true;
    this.checkWorldBounds = true;
  }
}
