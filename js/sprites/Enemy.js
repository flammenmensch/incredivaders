export default class Enemy extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'enemy');
    this.game.physics.arcade.enable(this);
    this.anchor.setTo(.5, .5);
  }
}
