export default class Enemies extends Phaser.Group {
  constructor(game, enemyClass, enemySpriteKey, enemyLauncherClass, enemyCount=5) {
    super(game);

    this.classType = enemyClass;
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    this.createMultiple(enemyCount, enemySpriteKey);

    this.enemyLauncher = new enemyLauncherClass;
    this.enemyLauncher.scheduleLaunch(this);
  }
}
