export default class Enemies extends Phaser.Group {
  constructor(game, enemyClass, enemySpriteKey, enemyCount=5, minSpacing=300, maxSpacing=3000) {
    super(game);

    this.classType = enemyClass;
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    this.createMultiple(enemyCount, enemySpriteKey);

    this.minSpacing = minSpacing;
    this.maxSpacing = maxSpacing;

    this.launchEnemy();
  }
  launchEnemy() {
    const enemy = this.getFirstExists(false);
    if (enemy) {
      enemy.reset(this.game.rnd.integerInRange(0, this.game.width), -10);
    }
    this.game.time.events.add(
      this.game.rnd.integerInRange(this.minSpacing, this.maxSpacing),
      this.launchEnemy.bind(this)
    );
  }
}
