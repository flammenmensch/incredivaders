export default class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'player');
    this.anchor.setTo(.5, .5);
    this.health = 100;
  }
}
