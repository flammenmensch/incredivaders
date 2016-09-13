export default class Explosions extends Phaser.Group {
  constructor(game, animation) {
    super(game);

    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    this.createMultiple(30, animation);
    this.setAll('anchor.x', .5);
    this.setAll('anchor.y', .5);
    this.forEach(explosion => {
      explosion.animations.add('explosion');
    });
  }
  explode(target) {
    const explosion = this.getFirstExists(false);
    explosion.reset(target.body.x + target.body.halfWidth, target.body.y + target.body.halfHeight);
    explosion.body.velocity.y = this.game.math.min(target.body.velocity.y, 180);
    explosion.play('explosion', 30 , false, true);
  }
}
