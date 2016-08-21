export default class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'player');
    this.game.physics.arcade.enable(this);
    this.anchor.setTo(.5, .5);
  }
}
