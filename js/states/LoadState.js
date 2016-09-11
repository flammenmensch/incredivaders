export default class LoadState extends Phaser.State {
  preload() {
    this.game.load.image('space', 'assets/images/nebula.jpg');
    this.game.load.image('player', 'assets/images/playerShip1_orange.png');
    this.game.load.image('enemyBlack', 'assets/images/enemyBlack3.png');
    this.game.load.image('enemyRed', 'assets/images/enemyRed1.png');
    this.game.load.image('laser', 'assets/images/laserBlue01.png');
    this.game.load.image('rocket', 'assets/images/laserRed06.png');
    this.game.load.spritesheet('redExplosion', 'assets/images/explosion_9.png', 256, 256);
    this.game.load.spritesheet('blueExplosion', 'assets/images/explosion_1.png', 196, 237);
  }
  create() {
    this.game.state.start('play');
  }
}

