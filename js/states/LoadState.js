export default class LoadState extends Phaser.State {
  preload() {
    this.game.load.image('space', 'assets/images/nebula.jpg');
    this.game.load.image('player', 'assets/images/playerShip1_orange.png');
    this.game.load.image('enemyBlack', 'assets/images/enemyBlack3.png');
    this.game.load.image('enemyRed', 'assets/images/enemyRed1.png');
    this.game.load.image('enemyBlue', 'assets/images/enemyBlue5.png');
    this.game.load.image('laser', 'assets/images/laserBlue01.png');
    this.game.load.image('rocket', 'assets/images/laserRed06.png');

    this.game.load.image('meteorBig1', 'assets/images/meteors/meteorBrown_big1.png');
    this.game.load.image('meteorBig2', 'assets/images/meteors/meteorBrown_big2.png');
    this.game.load.image('meteorMed1', 'assets/images/meteors/meteorBrown_med1.png');
    this.game.load.image('meteorMed2', 'assets/images/meteors/meteorBrown_med3.png');
    this.game.load.image('meteorSmall1', 'assets/images/meteors/meteorBrown_small1.png');
    this.game.load.image('meteorSmall2', 'assets/images/meteors/meteorBrown_small2.png');
    this.game.load.image('meteorTiny1', 'assets/images/meteors/meteorBrown_tiny1.png');
    this.game.load.image('meteorTiny2', 'assets/images/meteors/meteorBrown_tiny2.png');

    this.game.load.image('powerUpShield', 'assets/images/power-ups/powerupYellow_shield.png');
    this.game.load.image('powerUpStar', 'assets/images/power-ups/powerupYellow_star.png');
    this.game.load.image('powerUpBolt', 'assets/images/power-ups/powerupYellow_bolt.png');

    this.game.load.spritesheet('redExplosion', 'assets/images/explosion_9.png', 256, 256);
    this.game.load.spritesheet('blueExplosion', 'assets/images/explosion_1.png', 196, 237);
  }
  create() {
    this.game.state.start('play');
  }
}

