export default class StarField extends Phaser.TileSprite {
  constructor(game) {
    super(game, 0, 0, game.width, game.height, 'space');
  }
  update() {
    super.update();
    this.tilePosition.y += 2;
  }
}
