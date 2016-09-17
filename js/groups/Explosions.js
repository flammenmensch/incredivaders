import SoundGroup from '../utils/SoundGroup';

export default class Explosions extends Phaser.Group {
  constructor(game, animations, sounds) {
    super(game);

    this.explosionSfx = new SoundGroup(game, sounds);
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    animations.forEach(animation => this.createMultiple(10, animation));
    this.setAll('anchor.x', .5);
    this.setAll('anchor.y', .5);
    this.forEach(explosion => {
      explosion.animations.add('explosion');
    });
  }
  explode(target) {
    const explosion = this.getRandomNotExists();
    explosion.reset(target.body.x + target.body.halfWidth, target.body.y + target.body.halfHeight);
    explosion.body.velocity.y = this.game.math.min(target.body.velocity.y, 180);
    explosion.play('explosion', 30 , false, true);
    this.explosionSfx.play();
  }
  getRandomNotExists(startIndex, endIndex) {
    const list = this.getAll('exists', false, startIndex, endIndex);
    return this.game.rnd.pick(list);
  }
}
