import Player from '../sprites/Player';

export default class PlayState extends Phaser.State {
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.add.existing(new Player(this.game, 400, 576));
  }
}
