export default class LoadState extends Phaser.State {
  preload() {
    this.game.load.image('space', 'assets/images/nebula.jpg');
    this.game.load.image('player', 'assets/images/playerShip1_orange.png');
    this.game.load.image('enemyBlack', 'assets/images/enemyBlack3.png');
    this.game.load.image('enemyRed', 'assets/images/enemyRed1.png');
    this.game.load.image('enemyBlue', 'assets/images/enemyBlue5.png');
    this.game.load.image('ufoRed', 'assets/images/ufoRed.png');
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

    this.game.load.spritesheet('explosion1', 'assets/images/explosion_9.png', 256, 256);
    this.game.load.spritesheet('explosion2', 'assets/images/explosion_10.png', 256, 256);
    this.game.load.spritesheet('explosion3', 'assets/images/explosion_3.png', 256, 256);

    this.game.load.audio('laserSfx', 'assets/sounds/laser.mp3');
    this.game.load.audio('explosionSfx1', 'assets/sounds/explosion.mp3');
    this.game.load.audio('explosionSfx2', 'assets/sounds/explosion-2.mp3');
    this.game.load.audio('explosionSfx3', 'assets/sounds/explosion-3.mp3');

    this.game.load.audio('pickup1', 'assets/sounds/pickup.mp3');
    this.game.load.audio('pickup2', 'assets/sounds/pickup-2.mp3');
    this.game.load.audio('pickup3', 'assets/sounds/pickup-3.mp3');
  }
  create() {
    this.game.state.start('play');
  }
}

