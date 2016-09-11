export default class LoadState extends Phaser.State {
  preload() {
    this.game.load.image('space', 'assets/images/nebula.jpg');
    this.game.load.image('player', 'assets/images/playerShip1_orange.png');
    this.game.load.image('enemy', 'assets/images/enemyBlack3.png');
    this.game.load.image('laser', 'assets/images/laserRed01.png');
  }
  create() {
    this.game.state.start('play');
  }
}

